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
        lactures: [{
            question: 'Who Is This Course For?',
            type: 'simple',
            description: 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.\n\nFirst things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question: 'What Is Rust?',
            type: 'simple',
            description: 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question: 'Why Rust?',
            type: 'simple',
            description: 'First things first; thank you for choosing this course! We hope learning with us will be a beneficial and pleasurable experience for you. Aside from the detailed explanation of the topic, we have quizzes and coding challenges to help the reader assess their grasp of the subject matter.',
        },
        {
            question: 'The Basic Program',
            type: 'program',
            description: 'Below is the source code for a traditional Hello World program.',
        }
        ],
        isLock: false,
        snell: '12'
    },
    {
        title: 'Basic Structure',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Variables',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Data Types',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Operators',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Conditional Expressions',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Loops',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Functions',
        lactures: [],
        isLock: true,
        snell: '12'
    },
    {
        title: 'Strings',
        lactures: [],
        isLock: true,
        snell: '12'
    }
];

interface Quiz {
    question: string,
    answer: string,
    correct: string,
    options: any
}

export const quiz: Array<Quiz> = [{
    question: 'What does HTML stand for?',
    answer: 'Hyper text markup language',
    correct: 'B',
    options: [{
        option: 'A',
        title: 'Home text markup language',
    },
    {
        option: 'B',
        title: 'Hyper text markup language',
    },
    {
        option: 'C',
        title: 'Home tool markup language',
    },
    {
        option: 'D',
        title: 'Hyperlinks and Texting markup language',
    }]
},
{
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    correct: 'A',
    options: [{
        option: 'A',
        title: 'Cascading Style Sheet',
    },
    {
        option: 'B',
        title: 'Credit Style Sheet',
    },
    {
        option: 'C',
        title: 'Casecoding Style Sheet',
    },
    {
        option: 'D',
        title: 'Coding Style Sheet',
    }]
},
{
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    correct: 'A',
    options: [{
        option: 'A',
        title: 'Cascading Style Sheet',
    },
    {
        option: 'B',
        title: 'Credit Style Sheet',
    },
    {
        option: 'C',
        title: 'Casecoding Style Sheet',
    },
    {
        option: 'D',
        title: 'Coding Style Sheet',
    }]
},
{
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    correct: 'A',
    options: [{
        option: 'A',
        title: 'Cascading Style Sheet',
    },
    {
        option: 'B',
        title: 'Credit Style Sheet',
    },
    {
        option: 'C',
        title: 'Casecoding Style Sheet',
    },
    {
        option: 'D',
        title: 'Coding Style Sheet',
    }]
}]

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

interface accountSetting {
    Image: any,
    Title: string

}

export const accountList: Array<accountSetting> = [
    {
        Image: IMAGES.ic_pro,
        Title: 'get_pro',
    },
    {
        Image: IMAGES.ic_profile,
        Title: 'edit_profile'

    },
    {
        Image: IMAGES.ic_appearance,
        Title: 'appearance'

    },
    {
        Image: IMAGES.ic_goal,
        Title: 'set_goal'

    },
    {
        Image: IMAGES.ic_language,
        Title: 'language_change'

    },
];

export const notificationList: Array<accountSetting> = [
    {
        Image: IMAGES.ic_reminder,
        Title: 'daily_reminder',
    },
    {
        Image: IMAGES.ic_notification,
        Title: 'push_notification'

    }
];

export const shareList: Array<accountSetting> = [
    {
        Image: IMAGES.ic_rate_us,
        Title: 'rate_us',
    },
    {
        Image: IMAGES.ic_share,
        Title: 'share_this_app'

    }
];

export const contactList: Array<accountSetting> = [
    {
        Image: IMAGES.ic_help,
        Title: 'help',
    },
    {
        Image: IMAGES.ic_terms_condition,
        Title: 'terms_and_conditions'

    },
    {
        Image: IMAGES.ic_privacy_policy,
        Title: 'privacy_policy'

    }
];

export const dangerList: Array<accountSetting> = [
    {
        Image: IMAGES.ic_logout,
        Title: 'log_out',
    },
    {
        Image: IMAGES.ic_delete,
        Title: 'delete_account'

    }
];

interface subcriptionList {
    title: string,
    disc: string

}

export const subcriptionList: Array<subcriptionList> = [
    {
        title: 'Instant VIP Support',
        disc: 'Facing problem on practice or learning? Just knock us. We should support you ASAP.',
    },
    {
        title: 'Full access to All premium content',
        disc: 'Only visible to premium users'
    },
    {
        title: 'Remove all Ads',
        disc: 'No more extra ads showing when you on focus mode. No distruction'
    },
    {
        title: 'Remove all Ads',
        disc: 'No more extra ads showing when you on focus mode. No distruction'
    },
    {
        title: 'Remove all Ads',
        disc: 'No more extra ads showing when you on focus mode. No distruction'
    }
];

interface inProList {
    title: string,
    perComplete: string

}

export const inProList: Array<inProList> = [
    {
        title: 'Basic Rust',
        perComplete: '30% Done',
    },
    {
        title: 'Basic Rust',
        perComplete: '30% Done'
    },
    {
        title: 'Basic Rust',
        perComplete: '30% Done'
    }
];

interface leaderBordList {
    id: string,
    userName: string,
    programName: string,
    snellItem: string,
    NFT: string

}

export const leaderBordList: Array<leaderBordList> = [
    {
        id: '1',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '2',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '3',
        userName: 'Faruk Ahmed',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '4',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '5',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '6',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '7',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
    {
        id: '8',
        userName: 'John Maxwell',
        programName: 'Programming Ninja',
        snellItem: '12,090 Snell',
        NFT: 'NFT 120'
    },
];


interface availableCourseList {
    new: string,
    userName: string,
    programName: string,
    snellItem: string,

}

export const availableCourseList: Array<availableCourseList> = [
    {
        new: '',
        userName: 'Rust',
        programName: 'Best for beginners label students',
        snellItem: '66 Lessons'
    },
    {
        new: 'New',
        userName: 'Rust for Begginers',
        programName: 'Best for beginners label students',
        snellItem: '66 Lessons'
    },
    {
        new: 'New',
        userName: 'Solana',
        programName: 'Best for beginners label students',
        snellItem: '66 Lessons',
    },
    {
        new: '',
        userName: 'Solana Basic Course',
        programName: 'Best for beginners label students',
        snellItem: '66 Lessons'
    },
    {
        new: '',
        userName: 'Solana Mid-label Course',
        programName: 'Best for beginners label students',
        snellItem: '66 Lessons'
    }
];

interface availableList {
    title: string,

}

export const availableList: Array<availableList> = [
    {
        title: 'Solve problems in Rust'
    },
    {
        title: "Effectively leverage Rust's memory safety guarantees"
    },
    {
        title: 'Write applications and libraries'
    },
    {
        title: 'Test and document your code'
    }
];




