// Language pack for Cholo speech
const choloTranslation = {
    name: 'Cholo',
    description: 'Converts text to Chicano street slang',
    commonTerms: [
        'ese', 'holmes', 'vato', 'carnal', 'loco', 'firme', 'homie',
        'raza', 'jefe', 'primo', 'compa', 'güey', 'cholo', 'homeboy',
        'carnala', 'chale', 'órale', 'simón', 'neta', 'chido',
        'gacho', 'águila', 'rifado', 'orale', 'pues', 'nel', 'rola',
        'trucha', 'ranfla', 'chambear'
    ],
    
    fillerStarters: [
        'Órale, ', 'Simon ese, ', 'Ey holmes, ', 'Check it out ese, ',
        'Watcha, ', 'Que onda, ', 'Mira homie, ', 'Nel, ',
        'Simón carnal, ', 'Pos mira, ', 'Chale, ', 'A ver carnal, ',
        'Échale, ', 'Checa esto, ', 'Fíjate que, ', 'La neta, ',
        'Nombre, ', 'Mira pues, ', 'Sabes qué, ', 'No manches, '
    ],
    
    endSuffixes: {
        question: [
            ', ese?', ', holmes?', ', órale?', ', comprende?',
            ', que no?', ', va?', ', me entiendes?', ', sabes que?',
            ', simón?', ', neta?', ', apoco?', ', va que va?'
        ],
        exclamation: [
            ', órale!', ', simón ese!', ', chale!', ', firme!',
            ', a huevo!', ', nel!', ', no manches!', ', que chido!',
            ', chingón!', ', bien rifado!', ', nombre!', ', fierro!'
        ],
        statement: [
            ', ese', ', holmes', ', ya sabes', ', simón',
            ', neta', ', pos si', ', va', ', ándale',
            ', carnal', ', loco', ', pues', ', órale pues'
        ]
    },
    
    phrases: {
        // Basic conversation
        'i don\'t know': 'no sé ese',
        'are you serious': 'neta holmes',
        'i don\'t care': 'me vale',
        'do you know': 'sabes qué',
        'in my opinion': 'según yo',
        'to be honest': 'te digo la neta',
        'oh my god': 'ay güey',
        'that\'s crazy': 'está loco',
        'i\'m dead': 'estoy muerto',
        'that\'s funny': 'qué cura',
        'thank you': 'gracias ese',
        'i\'m tired': 'estoy cansado',
        'let\'s go': 'vámonos',

        // Street expressions
        'what are you doing': 'qué onda',
        'this is': 'esto es',
        'give me': 'dame',
        'want to': 'quiero',
        'going to': 'voy a',
        'need to': 'necesito',
        'will need': 'voy a necesitar',
        'what\'s up': 'qué pasa homie',
        'no problem': 'no hay pedo',
        'what happened': 'qué pasó ese',
        'be quiet': 'cálmate holmes',
        'look at this': 'chécate esto',
        'that\'s cool': 'está chido',
        'i understand': 'ya te caché',
        'for real': 'de verdad ese',
        'don\'t mess with me': 'no te pases',
        'what\'s wrong': 'qué te pasa',
        'hurry up': 'apúrate güey',
        'watch out': 'aguas ese',
        'that\'s right': 'así es carnal',
        'i got you': 'te tengo homeboy',
        'that\'s mine': 'eso es mío ese',
        'forget it': 'olvídalo carnal',
        'i\'m sorry': 'perdón ese',
        'trust me': 'confía en mí homie',
        'what\'s new': 'qué hay de nuevo',
        'take care': 'cuídate ese'
    },
    
    dictionary: {
        // Common terms
        'amazing': 'chingón',
        'good': 'firme',
        'great': 'chido',
        'awesome': 'a toda madre',
        'bad': 'gacho',
        'terrible': 'culero',
        'very': 'bien',
        'cool': 'chido',
        'friend': 'carnal',
        'yes': 'simón',
        'okay': 'órale',
        'really': 'neta',
        'true': 'simón',
        'excited': 'animado',
        'goodbye': 'nos vemos',
        'hello': 'qué onda',

        // Places and things
        'car': 'ranfla',
        'house': 'cantón',
        'money': 'feria',
        'police': 'jura',
        'street': 'calle',
        'work': 'jale',
        'trouble': 'bronca',
        'girl': 'ruca',
        'guy': 'vato',
        'family': 'familia',
        'gang': 'clika',
        'neighborhood': 'barrio',
        'prison': 'bote',
        'party': 'fiesta',
        'fight': 'bronca',

        // States and conditions
        'mad': 'encabronado',
        'happy': 'contento',
        'sad': 'agüitado',
        'scared': 'sacado',
        'drunk': 'pedo',
        'shoes': 'zapatos',
        'clothes': 'garras',
        'tattoo': 'tatuaje',
        'gun': 'fierro',
        'knife': 'filero',
        'respect': 'respeto',
        'strong': 'macizo',
        'weak': 'débil',
        'smart': 'abusado',
        'stupid': 'menso',

        // Common expressions
        'what': 'qué',
        'please': 'por favor',
        'definitely': 'simón',
        'crazy': 'loco',
        'stupid': 'pendejo',
        'annoying': 'enfadoso',
        'perfect': 'perfecto',
        'interesting': 'interesante',
        'absolutely': 'simón',
        'agree': 'simón',
        'disagree': 'nel',
        'exactly': 'exacto',
        'stop': 'para',
        'wow': 'güey',

        // Actions and feelings
        'never': 'nunca',
        'always': 'siempre',
        'look': 'mira',
        'understand': 'comprendo',
        'think': 'pienso',
        'love': 'amo',
        'hate': 'odio',
        'angry': 'enojado',
        'happy': 'feliz',
        'sad': 'triste',
        'impressive': 'impresionante',
        'want': 'quiero',
        'because': 'porque',
        'try': 'intento',
        'later': 'al rato',
        'suspicious': 'sospechoso',
        'pretty': 'bonito',
        'seriously': 'neta',
        'food': 'comida',
        'going': 'voy',
        'obviously': 'obviamente',
        'easy': 'easy as pie',
        'obvious': 'clear as creek water',
        'horse': 'bronc'
    }
};
