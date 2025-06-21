# Slangify 🗣️

> Transforms a page's content to use themed language packs - making the web more fun and expressive!

## 🚀 What is Slangify?

Slangify is a JavaScript library that dynamically transforms website content using customizable language packs. Whether you want to add some personality to your site with slang, regional dialects, or themed vocabulary, Slangify makes it easy to give your content a unique voice.

## ✨ Features

- 🎭 **Multiple Language Packs** - Switch between different themed vocabularies
- ⚡ **Real-time Transformation** - Content updates dynamically as users browse
- 🎨 **Customizable** - Create your own language packs
- 📱 **Lightweight** - Minimal impact on page performance
- 🔧 **Easy Integration** - Simple setup with any website
- 🌐 **Browser Extension** - Use as an unpacked Chrome/Edge extension

## 🛠️ Installation & Setup

### Clone the Repository
```bash
# Clone the repository
git clone https://github.com/HarambeHombre/Slangify.git

# Navigate to the project directory
cd Slangify
```

### Method 1: Use as Browser Extension (Recommended for Testing)

1. **Enable Developer Mode in Chrome/Edge:**
   - Open Chrome/Edge browser
   - Go to `chrome://extensions/` (Chrome) or `edge://extensions/` (Edge)
   - Toggle "Developer mode" ON (top right corner)

2. **Load Slangify as Unpacked Extension:**
   - Click "Load unpacked" button
   - Select the Slangify folder you just cloned
   - The extension should now appear in your extensions list

3. **Use the Extension:**
   - Navigate to any website
   - Click the Slangify extension icon in your browser toolbar
   - Select a language pack from the popup
   - Watch the page transform in real-time!

4. **Enable on Any Site:**
   - The extension will work on any website you visit
   - Simply click the extension icon and choose your preferred slang pack
   - Toggle on/off as needed

### Method 2: Include in Your Website

#### How to Use After Cloning

1. **Include Slangify in your HTML page:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Slangified Site</title>
</head>
<body>
    <h1>Welcome to my website!</h1>
    <p>This is some awesome content that will be transformed.</p>
    
    <!-- Include Slangify script -->
    <script src="path/to/slangify.js"></script>
    <script>
        // Initialize and use Slangify
        const slangify = new Slangify();
        slangify.loadPack('urban');
        slangify.transform();
    </script>
</body>
</html>
```

2. **Or use as a module in your JavaScript project:**
```javascript
// Import Slangify
import Slangify from './slangify.js';

// Initialize with default settings
const slangify = new Slangify();

// Load a language pack
slangify.loadPack('urban');

// Transform the current page
slangify.transform();

// Transform specific elements
slangify.transformElement(document.querySelector('.content'));
```

3. **Quick Start Example:**
```javascript
// One-liner to slangify your entire page
new Slangify().loadPack('pirate').transform();
```

## 📖 Usage

### Browser Extension Usage
```javascript
// Extension automatically injects Slangify
// Access via browser popup or programmatically:
window.slangify.loadPack('pirate');
window.slangify.transform();

// Listen for extension events
window.addEventListener('slangifyReady', () => {
    console.log('Slangify extension loaded!');
});
```

### Basic JavaScript Usage
```javascript
// Initialize Slangify
const slangify = new Slangify();

// Load a language pack
slangify.loadPack('urban'); // Options: 'urban', 'pirate', 'corporate', 'gen-z'

// Transform the page content
slangify.transform();

// Revert back to original
slangify.revert();
```

### Advanced Usage
```javascript
// Initialize with options
const slangify = new Slangify({
    excludeSelectors: ['.no-transform', '#header'],
    includeSelectors: ['.content', '.post'],
    preserveCase: true,
    animateTransition: true
});

// Chain methods
slangify
    .loadPack('pirate')
    .setOptions({ speed: 'slow' })
    .transform();
```

## 🎨 Language Packs

Slangify supports various themed language packs:
- **Urban** - Street slang and modern expressions
- **Pirate** - Arrr, matey! Transform your site into pirate speak
- **Corporate** - Business jargon and buzzwords
- **Gen Z** - Modern internet slang and expressions

## 🔧 Creating Custom Packs

```javascript
// Example custom language pack
const customPack = {
  "hello": "sup",
  "goodbye": "peace out",
  "awesome": "fire",
  "website": "site",
  "cool": "lit",
  // Add your own transformations
};

slangify.addCustomPack('myPack', customPack);
slangify.loadPack('myPack');
```

## 🌐 Extension Features

When using Slangify as a browser extension:
- **Universal Compatibility** - Works on any website
- **Popup Interface** - Easy language pack switching
- **Persistent Settings** - Remembers your preferences
- **Real-time Toggle** - Enable/disable with one click
- **Custom Packs** - Add your own language transformations

## 🚀 Quick Start Guide

**Fastest way to try Slangify:**

1. Clone the repo: `git clone https://github.com/HarambeHombre/Slangify.git`
2. Open Chrome/Edge → Extensions → Developer Mode ON
3. Click "Load unpacked" → Select Slangify folder
4. Visit any website → Click Slangify icon → Choose a pack
5. Watch the magic happen! 🪄

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new language packs
- Improve existing functionality
- Fix bugs and issues
- Enhance documentation
- Improve browser extension features

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**HarambeHombre**
- GitHub: [@HarambeHombre](https://github.com/HarambeHombre)

---

Made with ❤️ for making the web more expressive!
