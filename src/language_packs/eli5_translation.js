// Language pack for ELI5 (Explain Like I'm 5) speech
const eli5Translation = {
    name: 'ELI5',
    description: 'Converts text to simple, child-friendly explanations',
    commonTerms: [
        'basically', 'simply', 'just like', 'kind of like', 'imagine', 'pretend',
        'like when', 'sort of', 'almost like', 'think about', 'remember how',
        'you know when', 'it\'s like', 'for example', 'like this', 'a bit like',
        'just as', 'same as', 'just think', 'like a'
    ],
    
    fillerStarters: [
        'Okay, so basically ', 'Think of it like this: ', 'Imagine if ',
        'It\'s kind of like when ', 'You know how ', 'Let\'s pretend ',
        'Remember when ', 'Picture this: ', 'It\'s just like when ',
        'Here\'s the thing: ', 'This is like when ', 'Just imagine ',
        'It\'s simple: ', 'Let me show you: ', 'Here\'s a fun way to think about it: ',
        'Like when you ', 'Just like your favorite ', 'Think about when '
    ],
    
    endSuffixes: {
        question: [
            ', you know what I mean?', ', does that make sense?', ', right?',
            ', get it?', ', understand?', ', can you imagine that?',
            ', isn\'t that cool?', ', what do you think?', ', pretty neat, huh?',
            ', see how it works?', ', want to try?', ', cool right?'
        ],
        exclamation: [
            '!', ', wow!', ', that\'s cool!', ', awesome!', 
            ', isn\'t that amazing?!', ', how cool is that?!',
            ', that\'s like magic!', ', super cool!', ', yay!',
            ', that\'s fun!', ', amazing!', ', wowza!'
        ],
        statement: [
            ', and that\'s it', ', that\'s all there is to it',
            ', simple as that', ', just like that', ', easy peasy',
            ', piece of cake', ', as simple as ABC', ', no problem',
            ', like magic', ', just that easy', ', super simple',
            ', that\'s the whole story'
        ]
    },
    
    phrases: {
        // Basic conversation
        'i don\'t know': 'I\'m not sure yet',
        'are you serious': 'really really',
        'i don\'t care': 'I don\'t mind',
        'do you know': 'can you tell me',
        'in my opinion': 'I think',
        'to be honest': 'to tell you the truth',
        'oh my god': 'oh wow',
        'that\'s crazy': 'that\'s really wild',
        'i\'m dead': 'I\'m super surprised',
        'that\'s funny': 'that makes me laugh',
        'thank you': 'thanks a lot',
        'i\'m tired': 'I need a nap',
        'let\'s go': 'let\'s do it',

        // Questions and explanations
        'what are you doing': 'what are you up to',
        'how does it work': 'what makes it go',
        'what happens if': 'what would happen when',
        'why does this happen': 'what makes this happen',
        'how do you know': 'what tells you that',
        'what\'s the reason': 'why does it do that',
        'what does this mean': 'what\'s this all about',
        'is this important': 'do we need to know this',
        'when will this happen': 'when does this start',
        'where does this go': 'where should this be',
        'who is responsible': 'who takes care of this',
        'which one is better': 'which one should we pick',
        'how long will it take': 'when will it be done',
        'what should i do': 'what\'s the best thing to do',
        'how can i help': 'what can i do to make it better',
        'what\'s the difference': 'what makes these different'
    },
    
    dictionary: {
        // Basic actions
        'walk': 'go',
        'run': 'go fast',
        'talk': 'say',
        'eat': 'munch',
        'sleep': 'take a nap',
        'think': 'use your brain',
        'look': 'see',
        'listen': 'hear',
        'write': 'put down',
        'read': 'look at',
        'laugh': 'giggle',
        'cry': 'be sad',
        'jump': 'hop',
        'dance': 'move around',
        'sing': 'make music',
        'play': 'have fun',
        'work': 'do stuff',
        'rest': 'take a break',
        'help': 'make easier',
        'learn': 'find out',

        // States and feelings
        'happy': 'feeling good',
        'sad': 'feeling bad',
        'angry': 'mad',
        'scared': 'afraid',
        'excited': 'super happy',
        'tired': 'sleepy',
        'confused': 'mixed up',
        'worried': 'feeling nervous',
        'surprised': 'shocked',
        'bored': 'not having fun',

        // Common descriptions
        'good': 'nice',
        'bad': 'not good',
        'big': 'huge',
        'small': 'tiny',
        'fast': 'quick',
        'slow': 'not fast',
        'hot': 'warm',
        'cold': 'chilly',
        'loud': 'noisy',
        'quiet': 'soft',
        'hard': 'tough',
        'soft': 'squishy',
        'new': 'brand new',
        'old': 'not new',
        'clean': 'not dirty',
        'dirty': 'needs cleaning',
        'heavy': 'weighs a lot',
        'light': 'not heavy',

        // Comparisons
        'more': 'extra',
        'less': 'not as much',
        'better': 'more good',
        'worse': 'more bad',
        'same': 'just like',
        'different': 'not the same',
        'first': 'number one',
        'last': 'at the end',

        // Time words
        'now': 'right now',
        'later': 'after',
        'soon': 'in a little bit',
        'never': 'not ever',
        'always': 'all the time',
        'sometimes': 'once in a while',
        'today': 'right now',
        'tomorrow': 'next day',
        'yesterday': 'day before',

        // Simple verbs
        'begin': 'start',
        'end': 'finish',
        'continue': 'keep going',
        'stop': 'don\'t do it',
        'make': 'create',
        'break': 'make not work',
        'fix': 'make better',
        'move': 'go somewhere',
        'stay': 'don\'t move',
        'try': 'give it a shot',
        'wait': 'hold on',
        'come': 'come here',
        'go': 'go there',
        'give': 'share',
        'take': 'get',
        'put': 'place',
        'find': 'look for',
        'lose': 'can\'t find',
        'remember': 'keep in mind',
        'forget': 'can\'t remember'
    }
};
