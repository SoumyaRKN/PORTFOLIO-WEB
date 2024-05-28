import { Email, GitHub, Instagram, LinkedIn, Phone } from "@mui/icons-material";
import PROJECTS from "./projects";

const RESUME_DETAILS = {
    personalInfo: {
        name: "Soumya Prakash Nayak",
        title: "Full Stack Developer",
        email: "nsoumyaprakash@gmail.com",
        phone: "+91 8908930619",
        alternatePhone: "+91 9040201089",
        dateOfBirth: "11th July, 2000",
        address: {
            village: "Matia",
            post: "Jagulaipara",
            city: "Rajkanika",
            district: "Kendrapara",
            state: "Odisha",
            zip: "754220",
            country: "India"
        },
        socialMedia: [
            {
                icon: <Phone />,
                name: "Phone",
                link: "tel:+918908930619"
            },
            {
                icon: <Email />,
                name: "Email",
                link: "mailto:nsoumyaprakash@gmail.com"
            },
            {
                icon: <GitHub />,
                name: "GitHub",
                link: "https://github.com/SoumyaRKN"
            },
            {
                icon: <LinkedIn />,
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/soumya-prakash-nayak-558151261"
            },
            {
                icon: <Instagram />,
                name: "Instagram",
                link: "https://www.instagram.com/n_soumya_prakash"
            },
        ],
    },
    summary: "Experienced Full Stack Developer with experience in evaluating and improving existing websites and applications to enhance user experience and functionality. Proven success in planning and implementing complex technical solutions to detailed client briefs and requirements.",
    experience: [
        {
            position: "Full Stack Developer",
            company: "Zolute Technology and Consulting Private Limited",
            period: "October 2023 - Present",
            location: {
                city: "Indore",
                state: "Madhya Pradesh",
                zip: "452014",
                country: "India"
            },
            responsibilities: [
                "Completed assigned tasks and reached targets working solely in remote working capacity.",
                "Coded backend services using Node.js, PHP and it's frameworks.",
                "Communicated technical and design requirements to determine performance, reliability and accessibility.",
                "Contributed to large multi-developer projects using agile methodology.",
                "Maintained accountability for troubleshooting and resolving support issues.",
                "Created technical documentation, sharing knowledge, ideas and solutions with wider development team."
            ],
            contact: {
                name: "Archana Dubay",
                phone: "+91 8746971184",
                email: "hr.team@ikontel.com"
            }
        },
        {
            position: "Full Stack Developer",
            company: "iKontel Solutions Pvt.Ltd",
            period: "August 2021 - October 2023",
            location: {
                city: "Bhubaneswar",
                state: "Odisha",
                zip: "751010",
                country: "India"
            },
            responsibilities: [
                "Reviewed code, debugged problems, and corrected issues.",
                "Worked with back-end developers to design APIs.",
                "Worked with UI/UX designers to design & develop UI.",
                "Analyzed existing software implementations to identify areas requiring improvement.",
                "Used NodeJS, PHP and SQL/No-SQL to develop and manage databases.",
                "Built databases and table structures for web applications."
            ],
            contact: {
                name: "Monika Samantaray Mahapatra",
                phone: "+91 8746971184",
                email: "hr.team@ikontel.com"
            }
        }
    ],
    education: [
        {
            degree: "B.Tech.",
            institution: "Sudhananda Engineering & Research Center",
            period: "August 2020 - April 2023",
            location: {
                city: "Bhubaneswar",
                state: "Odisha",
                zip: "752115",
                country: "India"
            },
            fieldOfStudy: "Civil Engineering"
        },
        {
            degree: "Diploma",
            institution: "Bhubanananda Odisha School of Engineering",
            period: "July 2015 - November 2019",
            location: {
                city: "Cuttack",
                state: "Odisha",
                zip: "753001",
                country: "India"
            },
            fieldOfStudy: "Civil Engineering"
        },
        {
            degree: "10th",
            institution: "B.B High School",
            period: "July 2014 - April 2015",
            location: {
                city: "Rajkanika, Kendrapara",
                state: "Odisha",
                zip: "754220",
                country: "India"
            },
            fieldOfStudy: null
        }
    ],
    skills: [
        { name: "JavaScript", mastered: 90 },
        { name: "Node.js", mastered: 90 },
        { name: "PHP", mastered: 80 },
        { name: "Python", mastered: 60 },
        { name: "Core Java", mastered: 40 },
        { name: "Express.Js", mastered: 90 },
        { name: "Next.js", mastered: 60 },
        { name: "React", mastered: 60 },
        { name: "Angular", mastered: 40 },
        { name: "CodeIgniter", mastered: 65 },
        { name: "Django", mastered: 30 },
        { name: "HTML", mastered: 100 },
        { name: "CSS", mastered: 60 },
        { name: "Bootstrap", mastered: 75 },
        { name: "Tailwind CSS", mastered: 50 },
        { name: "Material UI", mastered: 50 },
        { name: "jQuery", mastered: 95 },
        { name: "MongoDB", mastered: 75 },
        { name: "MySQL", mastered: 75 },
        { name: "PostgreSQL", mastered: 75 },
        { name: "Postman", mastered: 80 },
        { name: "Git", mastered: 70 },
        { name: "GitHub", mastered: 70 },
        { name: "Linux", mastered: 50 },
    ],
    projects: [
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Backend Developer",
            link: null,
            title: "Network Management System",
            description: "A comprehensive Network Management System designed to monitor, manage, and optimize network performance and security within an organization.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "Python",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Backend Developer",
            link: null,
            title: "Meta Page Lead SDK",
            description: "A software development kit (SDK) designed to retrieve leads from Meta (formerly Facebook) pages. This SDK is built using a core PHP class and provides an efficient and reliable way to integrate lead retrieval functionality into various PHP applications.",
            technologies: [
                "PHP",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Backend Developer",
            link: null,
            title: "WhatsApp Cloud API PHP SDK",
            description: "A PHP-based software development kit (SDK) designed to communicate with the WhatsApp Cloud API. This kit allows for seamless integration with WhatsApp services, enabling applications to send and receive messages, templates, attachments and interact with the WhatsApp platform programmatically.",
            technologies: [
                "PHP",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Full Stack Developer",
            link: null,
            title: "ERP System",
            description: "An Enterprise Resource Planning (ERP) system built to streamline and integrate various business processes, including finance, human resources, inventory management, and customer relationship management.",
            technologies: [
                "JavaScript",
                "PHP",
                "CodeIgniter",
                "MySQL",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Full Stack Developer",
            link: null,
            title: "Professional Panel",
            description: "A professional panel designed to manage customer inquiries about projects, generate requirements/tasks based on these inquiries, and facilitate project management for professionals, freelancers, and contract employees.",
            technologies: [
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Backend Developer",
            link: null,
            title: "WhatsApp Chat Box",
            description: "A chat application designed to facilitate seamless communication between business owners and their customers through WhatsApp Business accounts, it was developed for a specific client.",
            technologies: [
                "React",
                "PHP",
                "CodeIgniter",
                "Firebase",
            ],
        },
        {
            category: "Zolute Technology and Consulting Private Limited",
            role: "Full Stack Developer",
            link: null,
            title: "Tiffin/Meal Service Management Application",
            description: "A tiffin/meal service management application with a user panel for booking meals and viewing payment receipts, and an admin panel for managing meal bookings, generating reports, and handling payments and menus.",
            technologies: [
                "JavaScript",
                "PHP",
                "CodeIgniter",
                "MySQL",
            ],
        },
        {
            category: "iKontel Solutions Pvt.Ltd",
            role: "Backend Developer",
            link: null,
            title: "Jan Aadhaar API Communication",
            description: "A series of APIs designed to communicate with the Jan Aadhaar APIs provided by the Rajasthan government. These APIs offer various services and functionalities related to citizen services, government schemes, and administrative processes.",
            technologies: [
                "PHP",
            ],
        },
        {
            category: "iKontel Solutions Pvt.Ltd",
            role: "Full Stack Developer",
            link: null,
            title: "Healthcare Clinic Management Application",
            description: "An application designed for managing appointment booking, diagnosis management, prescription generation, facilitating doctor-patient interactions and other related functionalities.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
            ],
        },
        {
            category: "iKontel Solutions Pvt.Ltd",
            role: "Full Stack Developer",
            link: null,
            title: "Organization Website Admin Panel",
            description: "An admin panel designed to manage the content of a organization's website. It allows administrators to update, edit, and delete various website content such as text, images, and other media.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
            ],
        },
        {
            category: "iKontel Solutions Pvt.Ltd",
            role: "Full Stack Developer",
            link: null,
            title: "Healthcare Lab Management Application",
            description: "A healthcare lab management application designed to streamline various laboratory processes such as patient registration, sample collection, test scheduling, result reporting, inventory management, payments and receipts management.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "PHP",
                "MySQL",
            ],
        },
        {
            category: "iKontel Solutions Pvt.Ltd",
            role: "Full Stack Developer",
            link: null,
            title: "Healthcare Hospital Website",
            description: "A dynamic website for a healthcare hospital where all the content is driven from a MySQL database. The frontend is built using React, and the backend is powered by Node.js with Express.js.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MySQL",
            ],
        },
        ...PROJECTS.map(item => {
            return {
                category: item.category,
                role: item.role,
                link: item.link,
                title: item.title,
                description: item.description,
                technologies: item.technologies,
            }
        }),
    ],
    languages: [
        { name: "English", proficiency: "Professional Working Proficiency" },
        { name: "Hindi", proficiency: "Professional Working Proficiency" },
        { name: "Odia", proficiency: "Native or Bilingual Proficiency" }
    ],
    interests: [
        "Learning new programing languages and frameworks",
        "Coding/Programming in free time",
        "Participating in hackathons",
        "Listening Music",
        "Traveling",
    ],
};

export default RESUME_DETAILS;