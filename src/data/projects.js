const PROJECTS = [
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://whisperwave-frontend.vercel.app",
        slug: "whatsapp-buseness-chat-app",
        title: "Whatsapp Business Chat App",
        description: "A chat application designed to facilitate seamless communication between business owners and their customers through WhatsApp Business accounts.",
        images: [
            {
                image: "/projects/whatsapp_buseness_chat_app/1.png",
                title: "Dashboard"
            },
            {
                image: "/projects/whatsapp_buseness_chat_app/2.png",
                title: "Chat with customers"
            },
            {
                image: "/projects/whatsapp_buseness_chat_app/3.png",
                title: "Contacts Management"
            },
            {
                image: "/projects/whatsapp_buseness_chat_app/4.png",
                title: "Message Templates Management"
            },
            {
                image: "/projects/whatsapp_buseness_chat_app/5.png",
                title: "WhatsApp account Management"
            },
            {
                image: "/projects/whatsapp_buseness_chat_app/6.png",
                title: "User management"
            }
        ],
        features: [
            {
                title: "Dashboard",
                description: "Access a dashboard displaying weekly messages chart, available templates categorized by status and available contacts categorized by status."
            },
            {
                title: "WhatsApp account management",
                description: "Set up and configure WhatsApp Business accounts to enable communication with customers."
            },
            {
                title: "Message template registration",
                description: "Register message templates for efficient communication with customers through predefined message formats."
            },
            {
                title: "Import message templates",
                description: "Import message templates from configured WhatsApp Business accounts for easy access and usage."
            },
            {
                title: "Sync message template status",
                description: "Synchronize the status of message templates to ensure consistency across platforms."
            },
            {
                title: "Add contacts",
                description: "Add contacts to your chat application for streamlined communication with customers."
            },
            {
                title: "User management",
                description: "Manage users with functionalities such as add, view, update, and delete."
            },
            {
                title: "Chat with customers",
                description: "Initiate, view, and delete chat conversations with customers for effective communication management."
            },
            {
                title: "Real-time messaging",
                description: "Receive real-time updates on message delivery and read status for improved communication tracking."
            },
            {
                title: "Text and media templates",
                description: "Send both text and media templates to customers for comprehensive communication."
            },
            {
                title: "User authentication",
                description: "Secured chat application with user authentication, ensuring that only authorized users can access the platform."
            }
        ],
        technologies: [
            "Next.js",
            "Material UI",
            "React Toastify",
            "React Confirm Alert",
            "Node.js",
            "Express.js",
            "Socket.IO",
            "JavaScript",
            "JWT",
            "Bcrypt",
            "MongoDB"
        ],
        objective: "The objective of this project was to provide business owners with a platform to communicate effectively with their customers via their WhatsApp Business accounts.",
        conclusion: "The project successfully achieved its objectives by implementing features such as Dashboard, WhatsApp Business account Management, Message template registration, Import message templates, Sync message template status, Add contacts, User management, Chat with customers, Real-time messaging, Text and media templates and User authentication. It utilized modern technologies like Next.js, Material UI, Node.js, Express.js, Socket.IO, JWT, and MongoDB. Additionally, it was hosted on a shared server to make it accessible for demo."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://whisperwave-admin-panel.vercel.app",
        slug: "whatsapp-buseness-chat-app-admin-panel",
        title: "WhatsApp Business Chat App Admin Panel",
        description: "An admin panel designed to manage organizations/owners, handle bill payment management, and provide dashboard analytics for the WhatsApp Business Chat App.",
        images: [
            {
                image: "/projects/whatsapp_buseness_chat_app_admin_panel/1.png",
                title: "Manage Organizations/Owners"
            }
        ],
        features: [
            {
                title: "Dashboard",
                description: "Access a dashboard to view analytics and insights regarding organizations/owners, bill payments, and overall system performance."
            },
            {
                title: "Manage Organizations/Owners",
                description: "Manage organizations/owners, including adding new organizations/owners, updating existing details, and deleting obsolete entries."
            },
            {
                title: "Bill Payment Management",
                description: "Handle bill payment management, including processing payments, tracking payment status, and generating payment reports."
            }
        ],
        technologies: [
            "Next.js",
            "Material UI",
            "React Toastify",
            "React Confirm Alert",
            "Node.js",
            "Express.js",
            "JavaScript",
            "JWT",
            "Bcrypt",
            "MongoDB",
        ],
        objective: "The objective of this project was to provide an administrative interface for managing organizations/owners, handling bill payments, and providing dashboard analytics for the WhatsApp Business Chat App.",
        conclusion: "The project successfully achieved its objectives by implementing features such as Dashboard, Manage Organizations/Owners, and Bill Payment Management. It utilized modern technologies like Next.js, Material UI, React, Node.js, Express.js, and MongoDB. Additionally, it was hosted on a shared server to make it accessible for administrative purposes."
    },
    {
        category: "Personal",
        role: "Backend Developer",
        link: "https://www.npmjs.com/package/meta-whatsapp-cloud-api-sdk",
        slug: "meta-whatsapp-cloud-api-sdk",
        title: "Meta Whatsapp Cloud API SDK",
        description: "A Node.js SDK for simplifying communication with WhatsApp Cloud APIs. It provides functionalities to interact with the WhatsApp Cloud Business API, including sending templates, messages, attachments, uploading media, and verifying webhooks.",
        images: [
            {
                image: "/projects/meta_whatsapp_cloud_api_sdk/1.png",
                title: "Meta Whatsapp Cloud API SDK"
            }
        ],
        features: [
            {
                title: "Send Templates",
                description: "Send template messages to WhatsApp users, including support for various message components such as text, images, locations, currencies, and date/time."
            },
            {
                title: "Send Messages",
                description: "Send text messages to WhatsApp users."
            },
            {
                title: "Send Media",
                description: "Send images, videos, audios, and documents to WhatsApp users, with support for media uploading."
            },
            {
                title: "Download Media",
                description: "Download media files from WhatsApp, such as images, videos, audios, and documents."
            },
            {
                title: "Webhook Verification",
                description: "Verify webhook endpoints for receiving WhatsApp API callbacks, such as message delivery notifications."
            },
            {
                title: "Template Management",
                description: "Register, retrieve, update, and delete templates for WhatsApp message formatting and content."
            }
        ],
        technologies: [
            "Node.js",
        ],
        objective: "The objective of this project was to create an SDK for Node.js that simplifies communication with WhatsApp Cloud APIs, providing developers with easy-to-use functionalities for sending messages, managing templates, verifying webhooks, and validating contacts.",
        conclusion: "The project successfully achieved its objective by implementing features such as sending templates, messages, and media; downloading media; webhook verification; template management; and contact validation. It utilized Node.js and JavaScript for development. Additionally, it provides developers with a convenient and efficient SDK for integrating WhatsApp functionalities into their applications."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://github.com/SoumyaRKN/ichat-a-chat-application",
        slug: "chat-application",
        title: "Chat Application",
        description: "A chat application that allows users to sign up, log in, and join group chat rooms with other users to communicate in real-time.",
        images: [
            {
                image: "/projects/chat_application/1.png",
                title: "Analog Clock"
            },
            {
                image: "/projects/chat_application/2.png",
                title: "Analog Clock"
            },
            {
                image: "/projects/chat_application/3.png",
                title: "Analog Clock"
            }
        ],
        features: [
            {
                title: "User Authentication",
                description: "Provides user authentication functionality, allowing users to sign up and log in securely."
            },
            {
                title: "Group Chat Rooms",
                description: "Enables users to join group chat rooms with other users to engage in real-time communication."
            },
            {
                title: "Real-time Messaging",
                description: "Implements a real-time messaging system using Socket.IO, allowing users to send and receive messages instantly."
            }
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "Pug (View Engine)",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "JWT",
            "Bcrypt",
            "Socket.IO",
            "MongoDB",
        ],
        objective: "The objective of this project was to create a chat application that provides users with the ability to sign up, log in, and join group chat rooms for real-time communication.",
        conclusion: "The project successfully achieved its objective by implementing features such as User Authentication, Group Chat Rooms, and Real-time Messaging. It utilized technologies like Node.js, Express.js, Pug (View Engine), CSS, Bootstrap, JavaScript, Socket.IO, and MongoDB. Additionally, it provides users with a seamless and interactive chat experience."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://github.com/SoumyaRKN/NextJs-iBlog",
        slug: "blog-app",
        title: "Blog App",
        description: "A blog application that allows users to explore and read blogs posted by other users, as well as sign up, log in, post their own blogs, contact the administrator, and search for blogs.",
        images: [
            {
                image: "/projects/blog_app/1.png",
                title: "Home Page"
            },
            {
                image: "/projects/blog_app/2.png",
                title: "SignUp Page"
            },
            {
                image: "/projects/blog_app/3.png",
                title: "Login Page"
            },
            {
                image: "/projects/blog_app/4.png",
                title: "Contact Page"
            },
            {
                image: "/projects/blog_app/5.png",
                title: "About Page"
            },
            {
                image: "/projects/blog_app/6.png",
                title: "About Page"
            }
        ],
        features: [
            {
                title: "Explore and Read Blogs",
                description: "Allows users to explore and read blogs posted by other users."
            },
            {
                title: "User Authentication",
                description: "Provides user authentication functionality, allowing users to sign up and log in securely."
            },
            {
                title: "Post Blogs",
                description: "Enables registered users to post their own blogs on the platform."
            },
            {
                title: "Contact Administrator",
                description: "Allows users to contact the administrator for inquiries or assistance."
            },
            {
                title: "Search Blogs",
                description: "Enables users to search for specific blogs using keywords or filters."
            }
        ],
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "JWT",
            "Bcrypt",
            "MongoDB",
        ],
        objective: "The objective of this project was to create a blog application that provides users with the ability to explore, read, and post blogs, as well as contact the administrator and search for blogs of interest.",
        conclusion: "The project successfully achieved its objective by implementing features such as Explore and Read Blogs, User Authentication, Post Blogs, Contact Administrator, and Search Blogs. It utilized technologies like Next.js, Tailwind CSS, JavaScript, and MongoDB. Additionally, it provides users with a user-friendly and feature-rich platform for blogging."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://next-weather-app-xi.vercel.app",
        slug: "weather-app",
        title: "Weather App",
        description: "A weather application that provides users with weather forecasts for their current location and allows them to search for weather information of other places.",
        images: [
            {
                image: "/projects/weather_app/1.png",
                title: "Weather Forecast"
            },
            {
                image: "/projects/weather_app/2.png",
                title: "Weather Details"
            }
        ],
        features: [
            {
                title: "Current Location Weather Forecast",
                description: "Displays the weather forecast for the user's current location, providing information such as temperature, humidity, wind speed, and conditions."
            },
            {
                title: "Other Locations Weather Forecast",
                description: "Enables users to search for weather information of other places by entering the name of a place."
            }
        ],
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "OpenWeather API",
            "JavaScript",
            "Geocoding API",
        ],
        objective: "The objective of this project was to develop a weather application that offers users the convenience of checking weather forecasts for their current location and searching for weather information of other places.",
        conclusion: "The project successfully achieved its objectives by implementing features such as Current Location Weather Forecast and Search Place. It utilized technologies like React for the frontend, Node.js and Express for the backend, and integrated with OpenWeatherMap API for weather data and Geocoding API for location search. Additionally, it provides a user-friendly interface for seamless weather information access."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://soumyarkn.github.io/quiz-app",
        slug: "quiz-app",
        title: "Quiz App",
        description: "A quiz application that allows users to enter their name, answer a series of questions, and view their quiz results.",
        images: [
            {
                image: "/projects/quiz_app/1.png",
                title: "Enter Name"
            },
            {
                image: "/projects/quiz_app/2.png",
                title: "Quiz"
            }
        ],
        features: [
            {
                title: "User Name Entry",
                description: "Allows users to enter their name before starting the quiz."
            },
            {
                title: "Answer 10 Questions",
                description: "Presents users with a series of 10 questions to answer."
            },
            {
                title: "Quiz Result Display",
                description: "Shows users their quiz results at the end, including the number of correct and incorrect answers."
            }
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Quiz API",
        ],
        objective: "The objective of this project was to create a quiz application that provides users with an interactive quiz experience, allowing them to test their knowledge on various topics.",
        conclusion: "The project successfully achieved its objectives by implementing features such as User Name Entry, Answer 10 Questions, and Quiz Result Display. It utilized HTML, CSS, and JavaScript for the frontend, and integrated with a Quiz API to fetch new quizzes dynamically. Additionally, it provides users with an engaging quiz experience and instant feedback on their performance."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://file-downloader-seven.vercel.app",
        slug: "file-downloader",
        title: "File Downloader",
        description: "A file downloader application that allows users to download files from provided URLs. It also provides real-time progress updates, download status, and file size information.",
        images: [
            {
                image: "/projects/file_downloader/1.png",
                title: "File Download from URL and Status"
            }
        ],
        features: [
            {
                title: "File Download from URL",
                description: "Enables users to download files from provided URLs."
            },
            {
                title: "Real-time Progress Updates",
                description: "Shows users real-time progress updates during the file download process."
            },
            {
                title: "Download Status Display",
                description: "Displays the download status (e.g., in progress, completed, failed) for each download."
            },
            {
                title: "File Size Information",
                description: "Provides users with information about the size of the file being downloaded."
            }
        ],
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
        ],
        objective: "The objective of this project was to create a file downloader application that simplifies the process of downloading files from provided URLs, while also providing users with real-time progress updates, download status, and file size information.",
        conclusion: "The project successfully achieved its objectives by implementing features such as File Download from URL, Real-time Progress Updates, Download Status Display, and File Size Information. It utilized Next.js, Tailwind CSS, and JavaScript for the frontend development. Additionally, it provides users with a user-friendly interface and efficient file download experience."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://soumyarkn.github.io/Dragon-Game-JS",
        slug: "dragon-game",
        title: "Dragon Game",
        description: "A game built during learning sessions, where players interact with a dragon character and earn scores.",
        images: [
            {
                image: "/projects/dragon_game/1.png",
                title: "Dragon Game"
            }
        ],
        features: [
            {
                title: "Interactive Gameplay",
                description: "Engage in interactive gameplay with a dragon character, allowing players to perform various actions."
            },
            {
                title: "Scoring Feature",
                description: "Earn scores based on player actions and achievements throughout the game."
            }
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        objective: "The objective of this project was to create an interactive game that provides players with an engaging experience while learning programming concepts.",
        conclusion: "The project successfully achieved its objectives by implementing features such as Interactive Gameplay and Scoring Feature. It utilized HTML, CSS, and JavaScript for game development. Additionally, it provides players with a fun and educational experience during learning sessions."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://soumyarkn.github.io/Digital-Clock/",
        slug: "digital-clock",
        title: "Digital Clock",
        description: "A digital clock application built during learning sessions, displaying the current time.",
        images: [
            {
                image: "/projects/digital_clock/1.png",
                title: "Digital Clock"
            }
        ],
        features: [
            {
                title: "Display Current Time",
                description: "Shows the current time in a digital format, including hours, minutes, and seconds."
            }
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        objective: "The objective of this project was to create a simple digital clock application using basic web development technologies.",
        conclusion: "The project successfully achieved its objective by implementing the feature to display the current time. It utilized HTML, CSS, and JavaScript for development. Additionally, it provides users with a straightforward and functional digital clock application."
    },
    {
        category: "Personal",
        role: "Full Stack Developer",
        link: "https://soumyarkn.github.io/Analog-clock",
        slug: "analog-clock",
        title: "Analog Clock",
        description: "An analog clock application built during learning sessions, displaying the current time in a traditional analog format.",
        images: [
            {
                image: "/projects/analog_clock/1.png",
                title: "Analog Clock"
            }
        ],
        features: [
            {
                title: "Display Current Time",
                description: "Shows the current time in a traditional analog format, with hour, minute, and second hands."
            }
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
        ],
        objective: "The objective of this project was to create a simple analog clock application using basic web development technologies.",
        conclusion: "The project successfully achieved its objective by implementing the feature to display the current time in a traditional analog format. It utilized HTML, CSS, and JavaScript for development. Additionally, it provides users with a classic and functional analog clock application."
    },
];

export default PROJECTS;