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
            rightText: ''
        },
        {
            title: 'Solana',
            image: IMAGES.solana,
            rightText: ''
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
            rightText: ''
        },
        {
            title: 'I have a lot of experience',
            image: '',
            rightText: ''
        }]
    },
    {
        question: 'Set a daily learning goal',
        description: 'Consistency and discipline are everything\nwhen it comes to success',
        type: 'option',
        options: [{
            title: '10 min / day',
            image: '',
            rightText: 'Casual'
        },
        {
            title: '30 min / day',
            image: '',
            rightText: 'Regular'
        },
        {
            title: '45 min / day',
            image: '',
            rightText: 'Serious'
        },
        {
            title: '60 min / day',
            image: '',
            rightText: 'Intense'
        },
        ]
    }
];

interface UserQuestion {
    question: string,
    answer: string,
    type: any,
    placeholder: string
}

export const userQuestion: Array<UserQuestion> = [
    {
        question: 'how_are_you_old',
        answer: '',
        type: 'number-pad',
        placeholder: 'Age'
    },
    {
        question: 'what_is_your_name',
        answer: '',
        type: 'default',
        placeholder: 'Name'
    },
    {
        question: 'what_is_your_email',
        answer: '',
        type: 'email-address',
        placeholder: 'Email'
    }
];

interface Languages {
    title: string,
    image: number,
    isLock: boolean
}

export const language: Array<Languages> = [
    {
        title: 'Introduction',
        image: IMAGES.languageIcon,
        isLock: false
    },
    {
        title: 'File Handling',
        image: IMAGES.languageIcon,
        isLock: true
    },
    {
        title: 'Python',
        image: IMAGES.languageIcon,
        isLock: true
    },
    {
        title: 'Java',
        image: IMAGES.languageIcon,
        isLock: true
    },
    {
        title: 'Machine Learning',
        image: IMAGES.languageIcon,
        isLock: true
    }

];

interface Lactures {
    title: string,
    lactures: any,
    isLock: boolean,
    snell: string
}

export const lactures: Array<Lactures> = [
    {
        title: 'Getting Started',
        lactures:[{
            question : 'Who Is This Course For?',
            description : 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question : 'What Is Rust?',
            description : 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question : 'Why Rust?',
            description : 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question : 'The Basic Program',
            description : 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },       
    ],
        isLock: false,
        snell : '12'
    },
    {
        title: 'Basic Structure',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Variables',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Data Types',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Operators',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Conditional Expressions',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Loops',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Functions',
        lactures:[],
        isLock: true,
        snell : '12'
    },
    {
        title: 'Strings',
        lactures:[],
        isLock: true,
        snell : '12'
    }
];
interface userCommunityList {
    userImage: string,
    userName: string,
    userSnell: any,
    title: string,
    discription: string,
    usertag: string,
    likeCount: string,
    msgCount: string,
    cummunitcationImage: any

}

export const userCommunityList: Array<userCommunityList> = [
    {
        userImage: IMAGES.user2,
        userName: 'Jonathan Troth',
        userSnell: '32,00 Snell',
        title: 'Uploading asset getting erro',
        discription: 'Display & Video 360 API - while uploading asset getting error Invalid Upload Request. Please check your URL and ensure it includes the /upload prefix.',
        usertag: '#finance #crypto #economy',
        likeCount: '0',
        msgCount: '0',
        cummunitcationImage: ""
    },
    {
        userImage: IMAGES.user1,
        userName: 'Allen Berry',
        userSnell: '32,00 Snell',
        title: 'Uploading asset getting erro',
        discription: 'Display & Video 360 API - while uploading asset getting error Invalid Upload Request. Please check your URL and ensure it includes the /upload prefix.',
        usertag: '#finance #crypto #economy',
        likeCount: '12.8k',
        msgCount: '120.8k',
        cummunitcationImage: IMAGES.communityimage

    },
];

