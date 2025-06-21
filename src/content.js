// Available language packs
const languagePacks = {
    'gen-z': genZTranslation,
    'valley-girl': valleyGirlTranslation,
    'pirate': pirateTranslation,
    'cat': catTranslation,
    'cowboy': cowboyTranslation,
    'old-english': oldEnglishTranslation,
    'eli5': eli5Translation,
    'complicated': overlyComplicatedTranslation,
    'aussie': aussieTranslation,
    'redneck': redneckTranslation,
    'cholo': choloTranslation
};

// Function to check if all language packs are loaded
function areLanguagePacksLoaded() {
    return Object.values(languagePacks).every(pack => 
        pack && 
        pack.name && 
        pack.commonTerms && 
        pack.fillerStarters && 
        pack.endSuffixes && 
        pack.phrases && 
        pack.dictionary
    );
}

// Will hold the current language pack
let currentLanguagePack = null;

// Initialize when everything is loaded
function initializeLanguagePack() {
    if (areLanguagePacksLoaded()) {
        currentLanguagePack = languagePacks['gen-z'];
        return true;
    }
    return false;
}

// Try to initialize immediately
if (!initializeLanguagePack()) {
    // If not loaded yet, wait a bit and try again
    setTimeout(initializeLanguagePack, 100);
}

function convertText(text) {
    // Keep track of all positions where we've made replacements
    const replacedRanges = [];

    function hasOverlap(start, end) {
        return replacedRanges.some(range => 
            (start >= range.start && start <= range.end) ||
            (end >= range.start && end <= range.end)
        );
    }

    function addRange(start, end) {
        replacedRanges.push({ start, end });
        replacedRanges.sort((a, b) => a.start - b.start);
    }

    function ensureSpacing(text, pos) {
        const nearRange = replacedRanges.find(range => 
            Math.abs(range.start - pos) < 10 || Math.abs(range.end - pos) < 10
        );
        
        // Add spaces around common terms from the language pack
        const commonTermsPattern = new RegExp('\\b(' + currentLanguagePack.commonTerms.join('|') + ')\\b', 'i');
        if (nearRange || commonTermsPattern.test(text)) {
            return ' ' + text.trim() + ' ';
        }
        return text;
    }

    let convertedText = text;

    // First convert common phrases
    for (const [phrase, replacement] of Object.entries(currentLanguagePack.phrases)) {
        const regex = new RegExp('\\b' + phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi');
        convertedText = convertedText.replace(regex, (match, offset, string) => {
            let result = replacement;
            
            if (match[0] === match[0].toUpperCase()) {
                result = result.charAt(0).toUpperCase() + result.slice(1);
            }
            
            if (offset > 0 && !/[\s"']/.test(string[offset - 1])) {
                result = ' ' + result;
            }
            
            return result;
        });
    }

    // Then convert individual words
    for (const [standard, replacement] of Object.entries(currentLanguagePack.dictionary)) {
        const regex = new RegExp('\\b' + standard + '\\b', 'gi');
        let match;
        let tempText = convertedText;
        
        while ((match = regex.exec(convertedText)) !== null) {
            const startPos = match.index;
            const endPos = startPos + match[0].length;
            
            if (!hasOverlap(startPos, endPos)) {
                let result = replacement;
                
                if (match[0][0] === match[0][0].toUpperCase()) {
                    result = result.charAt(0).toUpperCase() + result.slice(1);
                }
                
                const needSpaceBefore = startPos > 0 && !/[\s"'({[\-]/.test(convertedText[startPos - 1]);
                const needSpaceAfter = endPos < convertedText.length && !/[\s"'.,!?:;)}\]\-]/.test(convertedText[endPos]);
                
                if (needSpaceBefore) result = ' ' + result;
                if (needSpaceAfter) result = result + ' ';
                result = ensureSpacing(result, startPos);
                
                tempText = tempText.substring(0, startPos) + result + tempText.substring(endPos);
                addRange(startPos, startPos + result.length);
            }
        }
        convertedText = tempText;
    }

    // Clean up spaces
    convertedText = convertedText
        .replace(/\s+/g, ' ')
        .replace(/\s+([.,!?])/g, '$1')
        .replace(/([.,!?])(\w)/g, '$1 $2')
        .trim();

    // Add random suffix based on sentence type
    if (Math.random() < Math.min(0.4, convertedText.split(' ').length / 20)) {
        let suffixType = 'statement';
        if (convertedText.endsWith('?')) suffixType = 'question';
        else if (convertedText.endsWith('!')) suffixType = 'exclamation';
        
        const suffixes = currentLanguagePack.endSuffixes[suffixType];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        convertedText = convertedText.replace(/[.!?]+$/, '') + ' ' + suffix;
    }

    // Add random filler starters
    if (Math.random() < 0.2) {
        const sentences = convertedText.match(/[^.!?]+[.!?]+/g) || [convertedText];
        convertedText = sentences.map((sentence, index) => {
            if (index === 0 || Math.random() < 0.15) {
                const filler = currentLanguagePack.fillerStarters[
                    Math.floor(Math.random() * currentLanguagePack.fillerStarters.length)
                ];
                let trimmedSentence = sentence.trim();
                const fillerWord = filler.replace(/[,\s]+$/, '');                // Remove any *actions* from fillerWord for the pattern
                const cleanFillerWord = fillerWord.replace(/\*[^*]+\*/g, '').trim();
                // Only create pattern if there's actual text to match
                const redundantPattern = cleanFillerWord ? new RegExp(
                    `^\\s*(${cleanFillerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*,\\s*)?(?:${cleanFillerWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}|you|your|you're)\\b`,
                    'i'
                ) : null;
                trimmedSentence = redundantPattern ? trimmedSentence.replace(redundantPattern, '').trim() : trimmedSentence;
                return filler + trimmedSentence;
            }
            return sentence;
        }).join(' ');
    }

    return convertedText;
}

function shouldProcessNode(node) {
    if (!node.parentNode) return false;

    const skipTags = [
        'SCRIPT', 'STYLE', 'INPUT', 'TEXTAREA', 'BUTTON', 'SELECT', 'OPTION',
        'IFRAME', 'CANVAS', 'CODE'
    ];

    let parent = node.parentNode;
    while (parent && parent !== document.body) {
        if (skipTags.includes(parent.tagName)) return false;
        if (parent.onclick || parent.getAttribute('onclick')) return false;
        if (parent.getAttribute('contenteditable') === 'true' ||
            parent.role === 'textbox' || 
            parent.role === 'button') return false;
        parent = parent.parentNode;
    }

    return node.nodeType === 3 && 
           node.nodeValue.trim().length > 0 &&
           node.parentNode.offsetParent !== null;
}

// Track original text content
let originalTexts = new Map();
let isEnabled = false;

// Track UI visibility state
let isUIVisible = true;

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'toggleUI') {
        const uiContainer = document.getElementById('language-translator-ui');
        if (uiContainer) {
            isUIVisible = !isUIVisible;
            uiContainer.style.display = isUIVisible ? 'block' : 'none';
            sendResponse({ success: true, isVisible: isUIVisible });
        } else {
            sendResponse({ success: false, error: 'UI container not found' });
        }
    }
    return true;  // Required for async response
});

function processTextNodes(node) {
    if (!currentLanguagePack || !areLanguagePacksLoaded()) {
        return;
    }

    if (node.nodeType === 3 && shouldProcessNode(node)) {
        const originalText = node.nodeValue;
        if (originalText.trim()) {
            if (!originalTexts.has(node)) {
                originalTexts.set(node, originalText);
            }
            
            const convertedText = convertText(originalText);
            
            if (originalText !== convertedText) {
                const leadingSpace = node.nodeValue.match(/^\s*/)[0];
                const trailingSpace = node.nodeValue.match(/\s*$/)[0];
                node.nodeValue = leadingSpace + convertedText.trim() + trailingSpace;
            }
        }
    } else if (node.nodeType === 1) {
        Array.from(node.childNodes).forEach(child => processTextNodes(child));
    }
}

function restoreOriginalText() {
    originalTexts.forEach((originalText, node) => {
        if (node.parentNode) {
            if (node.nodeType === 3) {
                node.nodeValue = originalText;
            } else {
                const textNode = document.createTextNode(originalText);
                while (node.firstChild) node.removeChild(node.firstChild);
                node.appendChild(textNode);
            }
        }
    });
    originalTexts.clear();
}

// UI Container setup
function createUIContainer() {
    const uiContainer = document.createElement('div');
    uiContainer.id = 'language-translator-ui';    uiContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--vscode-editor-background, white);
        color: var(--vscode-editor-foreground, black);
        border-radius: 8px;
        box-shadow: 0 2px 10px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.3));
        padding: 12px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        transition: all 0.3s ease;
        min-width: 200px;
        border: 1px solid var(--vscode-widget-border, transparent);
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        transition: all 0.3s ease;
    `;

    // Create toggle section that stays visible
    const toggleSection = document.createElement('div');
    toggleSection.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    `;

    // Create toggle switch container (left side)
    const toggleContainer = document.createElement('div');
    toggleContainer.style.cssText = `
        display: flex;
        align-items: center;
        flex: 1;
    `;

    const toggleSwitch = document.createElement('label');
    toggleSwitch.style.cssText = `
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        margin-right: 8px;
    `;

    const toggleInput = document.createElement('input');
    toggleInput.type = 'checkbox';
    toggleInput.style.cssText = `
        opacity: 0;
        width: 0;
        height: 0;
    `;    const toggleSlider = document.createElement('span');
    toggleSlider.style.cssText = `
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--vscode-input-background, #ccc);
        transition: .4s;
        border-radius: 20px;
        border: 1px solid var(--vscode-input-border, transparent);
    `;

    toggleSlider.innerHTML = '<span style="position: absolute; content: \'\'; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%;"></span>';

    const toggleLabel = document.createElement('span');    toggleLabel.style.cssText = `
        font-size: 13px;
        flex: 1;
        color: var(--vscode-foreground, inherit);
        margin-left: 8px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;    toggleLabel.textContent = 'Enable Translation';
    
    // Create minimize button (right side)
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '−';
    toggleBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 16px;
        cursor: pointer;
        color: var(--vscode-foreground, inherit);
        padding: 0 4px;
        margin-left: 8px;
        opacity: 0.8;
        transition: opacity 0.2s, transform 0.2s;
    `;
    
    let isMinimized = false;
    toggleBtn.addEventListener('click', () => {
        isMinimized = !isMinimized;
        toggleBtn.textContent = isMinimized ? '+' : '−';
        toggleBtn.style.transform = isMinimized ? 'rotate(180deg)' : '';
        content.style.display = isMinimized ? 'none' : 'block';
        uiContainer.style.minWidth = isMinimized ? 'unset' : '200px';
    });

    // Create language selector
    const select = document.createElement('select');
    select.style.cssText = `
        width: 100%;
        padding: 8px;
        border: 1px solid var(--vscode-input-border, #ddd);
        border-radius: 4px;
        font-size: 13px;
        margin-top: 5px;
        background: var(--vscode-input-background, white);
        color: var(--vscode-input-foreground, black);
        outline: none;
        transition: border-color 0.2s;
    `;
    select.addEventListener('focus', () => {
        select.style.borderColor = 'var(--vscode-focusBorder, #007acc)';
    });
    select.addEventListener('blur', () => {
        select.style.borderColor = 'var(--vscode-input-border, #ddd)';
    });

    // Add options for each language pack
    for (const [key, pack] of Object.entries(languagePacks)) {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = pack.name || key.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        select.appendChild(option);
    }

    // Handle language change using messaging
    select.onchange = (e) => {
        currentLanguagePack = languagePacks[e.target.value];
        
        if (isEnabled && toggleInput.checked) {
            // If already enabled, update with new language
            restoreOriginalText();
            processTextNodes(document.body);
            const phrase = getRandomPhraseFromPack(currentLanguagePack);
            toggleLabel.textContent = phrase;
        }

        // Save preference using messaging
        chrome.runtime.sendMessage(
            { type: 'setLanguagePreference', value: e.target.value },
            (response) => {
                if (chrome.runtime.lastError) {
                    console.warn('Could not save language preference:', chrome.runtime.lastError);
                }
            }
        );
    };

    function getRandomPhraseFromPack(pack) {
        // Combine all the possible text sources from the pack
        const phrases = [
            ...Object.values(pack.dictionary),
            ...pack.fillerStarters,
            ...Object.values(pack.phrases)
        ].filter(phrase => 
            phrase && 
            typeof phrase === 'string' && 
            phrase.length > 0 &&
            phrase.length < 30 &&
            !phrase.includes('*')  // Skip phrases with actions
        );

        return phrases[Math.floor(Math.random() * phrases.length)] || pack.name;
    }    function updateUIState(isActive) {
        toggleSlider.style.backgroundColor = isActive ? 'var(--vscode-button-background, #2196F3)' : 'var(--vscode-input-background, #ccc)';
        toggleSlider.querySelector('span').style.transform = isActive ? 'translateX(20px)' : 'translateX(0)';
        toggleSlider.querySelector('span').style.backgroundColor = 'var(--vscode-button-foreground, white)';
        
        if (isActive) {
            isEnabled = true;
            processTextNodes(document.body);
            const phrase = getRandomPhraseFromPack(currentLanguagePack);
            toggleLabel.textContent = phrase;
        } else {
            isEnabled = false;
            restoreOriginalText();
            toggleLabel.textContent = 'Enable Translation';
        }
    }

    toggleInput.addEventListener('change', () => {
        updateUIState(toggleInput.checked);
    });

    // Assemble toggle switch
    toggleSwitch.appendChild(toggleInput);
    toggleSwitch.appendChild(toggleSlider);
    toggleContainer.appendChild(toggleSwitch);
    toggleContainer.appendChild(toggleLabel);

    // Assemble UI
    toggleSection.appendChild(toggleContainer);
    toggleSection.appendChild(toggleBtn);
    content.appendChild(select);

    uiContainer.appendChild(toggleSection);
    uiContainer.appendChild(content);
    document.body.appendChild(uiContainer);

    // Make the toggle section draggable
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;

    toggleSection.style.cursor = 'move';
    
    toggleSection.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        initialX = e.clientX - uiContainer.offsetLeft;
        initialY = e.clientY - uiContainer.offsetTop;
        if (e.target === toggleSection && e.target !== toggleBtn && e.target !== toggleInput && e.target !== toggleSlider) {
            isDragging = true;
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            
            // Keep within viewport bounds
            currentX = Math.min(Math.max(0, currentX), window.innerWidth - uiContainer.offsetWidth);
            currentY = Math.min(Math.max(0, currentY), window.innerHeight - uiContainer.offsetHeight);

            uiContainer.style.left = currentX + 'px';
            uiContainer.style.top = currentY + 'px';
            uiContainer.style.right = 'auto';
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
    }
}

// Initialize UI and language packs when the page loads
function initializeExtension() {
    // First make sure language packs are loaded
    if (!areLanguagePacksLoaded()) {
        setTimeout(initializeExtension, 100);
        return;
    }
    
    // Check if UI already exists
    if (!document.getElementById('language-translator-ui')) {
        createUIContainer();
    }    // Load saved language preference using messaging
    chrome.runtime.sendMessage({ type: 'getLanguagePreference' }, (data) => {
        if (chrome.runtime.lastError) {
            console.warn('Could not load language preference:', chrome.runtime.lastError);
            currentLanguagePack = languagePacks['gen-z'];
            return;
        }
        
    if (data && data.selectedLanguage && languagePacks[data.selectedLanguage]) {
            currentLanguagePack = languagePacks[data.selectedLanguage];
            const select = document.querySelector('#language-translator-ui select');
            const toggleInput = document.querySelector('#language-translator-ui input[type="checkbox"]');
            if (select) {
                select.value = data.selectedLanguage;
            }
            if (toggleInput && data.isEnabled) {
                toggleInput.checked = true;
                toggleInput.dispatchEvent(new Event('change'));
            }
        } else if (!currentLanguagePack) {
            // Set default if no preference is saved
            currentLanguagePack = languagePacks['gen-z'];
        }
    });
}

// Initialize when the DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeExtension);
} else {
    initializeExtension();
}
