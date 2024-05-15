import {
    Storage,
    DeveloperBoardRounded,
    CodeRounded,
    LanguageRounded,
    SecurityRounded,
    DesignServices,
    LanRounded,
    TerminalRounded,
    DeveloperModeRounded
} from '@mui/icons-material';

const SKILLS = [
    {
        icon: <DeveloperBoardRounded />,
        title: 'JavaScript',
        description: 'A high-level, interpreted scripting language used for web development.',
    },
    {
        icon: <DeveloperModeRounded />,
        title: 'Node.js',
        description: 'Server-side JavaScript runtime for building scalable network applications.',
    },
    {
        icon: <CodeRounded />,
        title: 'PHP',
        description: 'A popular general-purpose scripting language that is especially suited to web development.',
    },
    {
        icon: <Storage />,
        title: 'Database',
        description: 'SQL and NoSQL databases for modern web application development.',
    },
    {
        icon: <LanguageRounded />,
        title: 'HTML',
        description: 'The standard markup language for documents designed to be displayed in a web browser.',
    },
    {
        icon: <DesignServices />,
        title: 'CSS',
        description: 'A style sheet language used for describing the presentation of a document written in HTML.',
    },
    {
        icon: <TerminalRounded />,
        title: 'Python',
        description: 'An interpreted, high-level, general-purpose programming language.',
    },
    // {
    //   icon: <Javascript />,
    //   title: 'Core Java',
    //   description: 'A general-purpose, concurrent, object-oriented programming language that is specifically designed to have as few implementation dependencies as possible.',
    // },
    {
        icon: <LanRounded />,
        title: 'Git',
        description: 'A distributed version-control system for tracking changes in source code during software development.',
    },
    {
        icon: <SecurityRounded />,
        title: 'Linux',
        description: 'An open-source Unix-like operating system kernel.',
    },
];

export default SKILLS;