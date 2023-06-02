import { IMAGES } from "../assets";

export interface LocalizationContextType {
    currentLanguage: string,
    setI18nConfig: (language: string) => void
    getTranslation: (text: string) => string;
}

interface LearningQuestion {
    question: string,
    options: any
}

export const learningQuestion: Array<LearningQuestion> = [{
    question: 'What does HTML stand for?',
    options: [{
        title: 'Home text markup language'
    },
    {
        title: 'Hyper text markup language'
    }, {
        title: 'Home tool markup language'
    }, {
        title: 'Hyperlinks and Texting markup language'
    },
    {
        title: 'Hyperlinks and Texting markup language'
    },
    {
        title: 'Hyperlinks and Texting markup language'
    },
    {
        title: 'Hyperlinks and Texting markup language'
    },
    {
        title: 'Hyperlinks and Texting markup language'
    }]
},
{
    question: 'What does HTML stand for?',
    options: [{
        title: 'Home text markup language'
    },
    {
        title: 'Hyper text markup language'
    }, {
        title: 'Home tool markup language'
    }, {
        title: 'Hyperlinks and Texting markup language'
    }]
},
{
    question: 'What does HTML stand for?',
    options: [{
        title: 'Home text markup language'
    },
    {
        title: 'Hyper text markup language'
    }, {
        title: 'Home tool markup language'
    }, {
        title: 'Hyperlinks and Texting markup language'
    }]
},
{
    question: 'What does HTML stand for?',
    options: [{
        title: 'Home text markup language'
    },
    {
        title: 'Hyper text markup language'
    }, {
        title: 'Home tool markup language'
    }, {
        title: 'Hyperlinks and Texting markup language'
    }]
},
{
    question: 'What does HTML stand for?',
    options: [{
        title: 'Home text markup language'
    },
    {
        title: 'Hyper text markup language'
    }, {
        title: 'Home tool markup language'
    }, {
        title: 'Hyperlinks and Texting markup language'
    }]
}]

interface Question {
    question: string,
    description: string,
    type: string,
    options: any
}

export const question: Array<Question> = [
    {
        question: 'Which topic are you more\ninterested?',
        description: 'Select your niche and dominate it',
        type: 'box',
        options: [{
            title: 'Rust',
            image: IMAGES.rush,
        },
        {
            title: 'Solana',
            image: IMAGES.solana,
        }]
    },
    {
        question: 'Tell us about your level',
        description: 'A journey of a thousand miles begins\nwith a single step',
        type: 'option',
        options: [{
            title: 'Fresher',
            image: '',
        },
        {
            title: 'I have some experience',
            image: '',
        },
        {
            title: 'I have a lot of experience',
            image: '',
        }]
    },
    {
        question: 'Set a daily learning goal',
        description: 'Consistency and discipline are everything\nwhen it comes to success',
        type: 'option',
        options: [{
            title: '10 min / day',
            image: '',
        },
        {
            title: '30 min / day',
            image: '',
        },
        {
            title: '45 min / day',
            image: '',
        },
        {
            title: '60 min / day',
            image: '',
        },
        ]
    }
];
