// Language pack for Australian speech
const aussieTranslation = {
    name: 'Aussie',
    description: 'Converts text to Australian slang',
    
    commonTerms: [
        'mate', 'crikey', 'strewth', 'bloody', 'fair dinkum', 'bonza',
        'ripper', 'deadset', 'heaps', 'grouse', 'bewdy', 'dinky-di',
        'cobber', 'drongo', 'mongrel', 'ratbag', 'sheila', 'digger',
        'seppo', 'dunny', 'arvo', 'servo', 'bottlo', 'maccas',
        'cuppa', 'tinnie', 'aggro', 'whinge', 'yakka', 'fair go'
    ],
    
    fillerStarters: [
        'Crikey, ', 'Fair dinkum, ', 'Strewth, ', 'Listen mate, ',
        'Bloody hell, ', 'Stone the flamin\' crows, ', 'Struth mate, ',
        'Rack off, ', 'Good on ya, ', 'Too right, ', 'Deadset mate, ',
        'Bewdy, ', 'Tell ya what mate, ', 'Fair crack of the whip, ',
        'Blimey mate, ', 'Bloody oath, ', 'Streuth cobber, ',
        'Cop this mate, ', 'Get a load of this, '
    ],
    
    endSuffixes: {
        question: [
            ', mate?', ', yeah?', ', reckon?', ', fair dinkum?',
            ', ya reckon?', ', whatcha reckon?', ', streuth?', ', ey?',
            ', ay?', ', got that?', ', right-o?', ', know what I mean?'
        ],
        exclamation: [
            ', strewth!', ', crikey!', ', bloody oath!',
            ', stone the flamin\' crows!', ', bewdy!', ', bonza!',
            ', cop that!', ', strike a light!', ', fair dinkum!',
            ', you beauty!', ', ridgy-didge!', ', too right!'
        ],
        statement: [
            ', mate', ', yeah', ', too right', ', fair dinkum',
            ', deadset', ', no worries', ', she\'ll be right',
            ', true blue', ', spot on', ', fair go', ', dead set',
            ', no dramas'
        ]
    },
    
    phrases: {
        // Basic conversation
        'i don\'t know': 'haven\'t got a clue',
        'are you serious': 'are you fair dinkum',
        'i don\'t care': 'couldn\'t be bothered',
        'do you know': 'ya reckon',
        'in my opinion': 'reckon',
        'to be honest': 'fair dinkum',
        'oh my god': 'strewth',
        'that\'s crazy': 'that\'s bonkers',
        'i\'m dead': 'I\'m stuffed',
        'that\'s funny': 'that\'s a right laugh',
        'thank you': 'cheers mate',
        'i\'m tired': 'I\'m knackered',
        'let\'s go': 'let\'s head off',

        // Aussie expressions
        'what are you doing': 'whatcha up to',
        'this is': 'this here\'s',
        'give me': 'chuck us',
        'want to': 'wanna',
        'going to': 'gonna',
        'need to': 'gotta',
        'will need': 'gonna need',
        'i\'m hungry': 'I could go a feed',
        'i\'m thirsty': 'I could use a coldie',
        'that\'s excellent': 'that\'s ace mate',
        'no way': 'yeah nah',
        'yes definitely': 'oath mate',
        'that\'s unfortunate': 'bit rough mate',
        'let\'s drink': 'let\'s hit the piss',
        'i\'m exhausted': 'I\'m buggered',
        'that\'s expensive': 'that\'s a bit rich',
        'that\'s cheap': 'that\'s a bargain mate',
        'i\'m angry': 'I\'m bloody aggro',
        'stop kidding': 'stop taking the piss',
        'are you joking': 'you\'re pulling my leg',
        'that\'s obvious': 'clear as mud mate',
        'shut up': 'rack off',
        'go away': 'nick off',
        'hurry up': 'get a wriggle on',
        'that\'s great': 'that\'s grouse mate',
        'no problem': 'she\'ll be right',
        'that\'s difficult': 'bit of a bastard'
    },
    
    dictionary: {
        // Common terms
        'amazing': 'ripper',
        'good': 'bonza',
        'great': 'beaut',
        'awesome': 'ace',
        'bad': 'ordinary',
        'terrible': 'shocking',
        'very': 'bloody',
        'cool': 'grouse',
        'friend': 'mate',
        'yes': 'yeah',
        'okay': 'righto',
        'really': 'fair dinkum',
        'true': 'true blue',
        'excited': 'stoked',
        'goodbye': 'hooroo',
        'hello': 'g\'day',

        // Places and things
        'car': 'ute',
        'food': 'tucker',
        'breakfast': 'brekkie',
        'barbecue': 'barbie',
        'beer': 'coldie',
        'police': 'coppers',
        'sunglasses': 'sunnies',
        'afternoon': 'arvo',
        'mosquito': 'mozzie',
        'present': 'pressie',
        'football': 'footy',
        'chocolate': 'choccy',
        'service station': 'servo',
        'vegetable': 'veggie',

        // States and conditions
        'drunk': 'plastered',
        'tired': 'buggered',
        'excellent': 'rippa',
        'stupid': 'dropkick',
        'idiot': 'drongo',
        'city': 'big smoke',
        'work': 'graft',
        'look': 'gander',
        'woman': 'sheila',
        'man': 'bloke',
        'beer glass': 'schooner',
        'child': 'ankle biter',
        'boss': 'big cheese',
        'fight': 'blue',
        'mistake': 'stuff up',
        'complain': 'whinge',

        // Intensifiers and modifiers
        'please': 'ta',
        'definitely': 'too right',
        'crazy': 'mad as a cut snake',
        'annoying': 'bit rough',
        'perfect': 'spot on',
        'interesting': 'fair go',
        'absolutely': 'dead set',
        'agree': 'too right',
        'disagree': 'nah yeah',
        'exactly': 'spot on',
        'stop': 'rack off',
        'wow': 'crikey',
        'never': 'never ever',
        'always': 'always',

        // Actions and feelings
        'understand': 'get it',
        'think': 'reckon',
        'love': 'love',
        'hate': 'can\'t stand',
        'angry': 'aggro',
        'happy': 'rapt',
        'sad': 'down in the dumps',
        'impressive': 'fair dinkum',
        'want': 'keen on',
        'because': 'cos',
        'try': 'give it a burl',
        'later': 'later on',
        'suspicious': 'suss',
        'seriously': 'dead set',
        'obviously': 'clearly'
    }
};
