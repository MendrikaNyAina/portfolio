
export const enContent = {
    lang: "EN",
    fullname: "Randrianarison Mendrika",
    name: "Mendrika",
    lastname: "Randrianarison",
    jobTitle: "Fullstack developer",
    jobTitles: ["Fullstack", "developer"],
    cvPath:"/docs/resume-en.pdf",
    menuItem: {
        archievement: "Archievements",
        contact: "Contacts",
        experience: "Experiences",
        formation: "Formations",
        project: "Projects",
        service: "My services"
    },
    titleItem: {
        archievement: "Archievements",
        contact: "Contacts",
        experience: "Experiences",
        formation: "Academic pathways and training",
        project: "Personal projects",
        service: "My services"
    },
    descriptiveText: "As a fullstack developer for the 2 last year and a half and a graduate of ITUniversity, I create web solutions tailored to the needs of each project. Passionate about web development, I help my clients to realise their online ideas. I design websites and web applications that meet my clients' expectations, mainly using Java Spring Boot, React.js, Node.js and other technologies.",
    downloadCV: "Download my CV",
    experienceInfo: [
        { title: "Ibonia", date: "August 2023 - now", description: ["Design and development of solutions linked to the fintech and catering sectors", "Development of a core banking system tool for developers in Spring boot, ReactJs and Mysql", "Development and maintenance of a money distribution platform, processing bank files, which has helped to increase the number and types of transfers processed by bank branches, in PHP codeIgniter, Java Spring Boot and Mysql", "Development of a tool in Java Spring boot and Nodejs that facilitates development (SpringBoot, Nextjs, Mysql) by automating code generation and offering an efficient work structure." ,"Development of a Java Spring boot and Nodejs tool that facilitates development (SpringBoot, Nextjs, Mysql) by automating code generation and providing an efficient working structure.", "Development of booking and ordering software in the restaurant industry, supporting the maintenance and enhancement of the payment module, including Stripe integration for a smooth and secure transaction experience, as well as delivery, in PHP Symfony, NodeJs and Neo4J.","Complete development of a membership management application, using Spring Boot and NextJS, with chatbot n8n integration", "Participation in the development of a website managing races using Spring Boot and NextJS"] },
        { title: "Freelance", date: "July 2024 - September 2024", description: ["Development from a to z of an interactive training platform with quizzes, tests, documentations and summaries for users, integrating a fun dimension thanks to a gamified approach, all produced with Java Spring Boot and React."] },

    ],
    projectInfo: [
        { 
            title: "Scaffold", 
            definition: "A Java Spring boot tool that facilitates the development of a complete web project in Spring mvc by automating code generation with tags and a common code base and by offering an efficient work structure.", 
            how: "Front-end code generation using components created using tags, development and generation of a common code base facilitating basic CRUD and search operations.", 
            githubLink: "https://github.com/MendrikaNyAina/my-utils",
            technologies:["Java Spring boot", "Javascript"]
        },
        { title: "Computer management", definition: "Web platform for managing the stock and sales of a computer shop with several points of sale", how: "Development of modules linked to stock management, sales, invoicing and financial processing of income, taking into account the multiple dimensions of the different points of sale.", githubLink: "https://github.com/MendrikaNyAina/gestion_ordinateur", technologies:["Java Spring boot", "Postgresql", "Javascript"]},
    ],
    projectLabel: {
        what: "What is it?",
        how: "How was it done?",
        githubLink: "Github link",
        technologies:"Technologies"
    },
    serviceInfo: {
        hardSkill:  ["Java Spring boot","Spring mvc", "ReactJs", "Angular", "NodeJs", "Python", "ReactNative","Php", "Mysql", "Postresql", "Oracle", "Neo4J", "n8n", "Docker"],
        softSkill: ["Agil/Scrum", "Native listening", "Understanding needs", "Team spirit", "Clear writing", "Adaptability", "Problem solving", "Time management"]
    },
    formationInfo: [
        { date: "2024", title: "Master 1", description: "Master 1 in computer science at ITUniversity." },
        { date: "All of 2024", title: "Video games training", description: "At Ony House, learn about the Unreal Engine, video game design and development" },
        { date: "2020 - 2023", title: "License", description: "Bachelor's degree in development from ITUniversity, honorable distinction." },     
        { date: "February 2025", title: "Advanced Redux", description: "at ESTI" },
        { date: "November 2024", title: "Artificial intelligence and machine learning", description: "at Arkeup Academy" },
        { date: "August 2024", title: "Design thinking", description: "at CCFIM" },
        { date: "June 2024", title: "Agil/Scrum", description: "at CCFIM" },

        { date: "2022", title: "Intermediate English", description: "English tutoring madagascar" },
    ],
    archievementInfo: [
        { title: "Hackathon zahgeek", date: "July 2023", description: "Première place, development of an e-commerce platform for the sale of goodies with 3D integration", technologies: ["Ruby", "Angular", "freeJs"] },
        { title: "GamJam 2022", date: "2022", description: "Development of a game called 'Kapoaka' with multiplayer integration", technologies: ["Godot"] },
    ],
    archievementLabel: {
        about: "About"
    },
    contactInfo: [
        { icon: "email", link: "mailto:mendrika.nyainaf@gmail.com", info:"mendrika.nyainaf@gmail.com" },
        { icon: "whatsapp", link: "https://wa.me/261342236379",info:"261342236379" },
        { icon: "linkedin", link: "www.linkedin.com/in/mendrika-randrianarison-497a87272",info:"www.linkedin.com/in/mendrika-randrianarison-497a87272" },
        { icon: "phone", link: "tel:+261342236379", info:"+261342236379" },
    ]
    ,
    contactLabel: {
        form: {
            name: {
                text: "Name",
                placeholder: "Name"
            },
            email: {
                text: "Email",
                placeholder: "Email"
            },
            object: {
                text: "Subject",
                placeholder: "Subject"
            },
            message: {
                text: "Message",
                placeholder: "Message"
            },
            button: "Contact"
        },
        query: ["Do you have a request ?", "Contact me !"],
    },
    copy: "Copied to the paper press",
    error: {
        emailInvalid: "Invalid email",
        toLong: 'Information too long',
        toShort: 'Information too short',
        cantCopy:"The information could not be copied"
    }
}