const PROJECTS = {
  scentifymath: {
    image: "assets/scientyffy.jpg",
    type: "RECOMMENDATION SYSTEM · 2026",
    title: "ScentifyMath",
    overview:
      "An individual thesis project: a web-based perfume recommendation system that provides five personalized fragrance recommendations based on each user's preferences through an interactive questionnaire. The system uses Sentence-BERT and Cosine Similarity to identify perfumes with the closest semantic preferences.",
    role: [
      "Independently designed and developed the full-stack web application using React.js and FastAPI",
      "Collected 4,125 perfume records through web scraping from Fragrantica and various perfume brand websites",
      "Performed data cleaning and stored the processed dataset in MongoDB",
      "Developed the Content-Based Filtering recommendation engine using Sentence-BERT and Cosine Similarity",
      "Implemented an 11-attribute preference questionnaire and personalized top-five recommendation results",
      "Conducted recommendation system evaluation using Mean Average Precision (MAP)",
    ],
    outcome: [
      "Completed as an individual undergraduate thesis project",
      "Processed a dataset of 4,125 perfumes",
      "Generated five personalized perfume recommendations for each user",
      "Achieved a MAP score of 0.7778 (77.78%) based on evaluations from 10 users",
    ],
    tags: ["React.js", "Python", "FastAPI", "MongoDB"],
    workflow: [
      {
        step: "01",
        title: "Preference Questionnaire",
        description:
          "Users complete a questionnaire covering 11 perfume preference attributes.",
      },
      {
        step: "02",
        title: "Preference Processing",
        description:
          "User preferences are processed and converted into semantic embeddings using Sentence-BERT.",
      },
      {
        step: "03",
        title: "Perfume Data Retrieval",
        description:
          "The system retrieves cleaned perfume data from MongoDB, containing 4,125 perfume records.",
      },
      {
        step: "04",
        title: "Similarity Calculation",
        description:
          "Cosine Similarity calculates semantic similarity between user preferences and perfume attributes.",
      },
      {
        step: "05",
        title: "Recommendation Ranking",
        description:
          "Perfumes are ranked based on their similarity scores, from highest to lowest.",
      },
      {
        step: "06",
        title: "Top 5 Recommendations",
        description:
          "The system displays the five perfumes with the highest similarity scores.",
      },
    ],
    links: [],
  },

  rumtika: {
    image: "assets/rumtika.jpg",
    type: "LEARNING MANAGEMENT SYSTEM · 2025",
    title: "Rumtika (Rumah Teknologi Pendidikan)",
    overview:
      "A web-based Learning Management System (LMS) designed to help teachers learn, explore, and utilize creative digital applications to support more engaging and innovative teaching and learning experiences.",
    role: [
      "Collaborated with a team of six developers to design and develop a web-based Learning Management System",
      "Contributed to full-stack web development using Vue.js, Node.js, Express.js, and MongoDB",
      "Developed user interfaces and interactive features using Vue.js and Tailwind CSS",
      "Implemented dashboard features for administrators and teachers to manage users and learning materials",
      "Developed features to support the management and presentation of teachers' creative digital works",
      "Contributed to building a platform that helps teachers explore and apply creative digital tools in teaching activities",
    ],
    outcome: [
      "Successfully developed a web-based Learning Management System for Rumah Teknologi Pendidikan",
      "Provided a digital learning platform for teachers to explore creative digital applications",
      "Implemented administrator and teacher dashboards for managing users, learning materials, and creative works",
      "Supported teachers in integrating creative digital tools into teaching and learning activities",
    ],
    tags: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    workflow: [
      {
        step: "01",
        title: "User Access",
        description:
          "Administrators and teachers access the platform through their respective accounts and dashboards.",
      },
      {
        step: "02",
        title: "Learning Materials",
        description:
          "Teachers explore available learning materials about creative digital applications.",
      },
      {
        step: "03",
        title: "Digital Application Learning",
        description:
          "The platform provides learning resources to help teachers understand and utilize creative digital tools.",
      },
      {
        step: "04",
        title: "Creative Work Management",
        description:
          "Teachers can manage and showcase creative works developed using digital applications.",
      },
      {
        step: "05",
        title: "Administrative Management",
        description:
          "Administrators manage user accounts, learning materials, and creative content through the dashboard.",
      },
    ],
    links: [],
  },

  suxesstories: {
    image: "assets/suxestories.jpg",
    type: "EVENT MANAGEMENT SYSTEM · 2024",
    title: "SuxesStories",
    overview:
      "A web-based Event Management System developed to support event administration and Job Fair participant registration. The platform provides event management features, QR Code-based participant registration and verification, and transaction management to streamline event operations.",

    role: [
      "Collaborated with a team of nine developers to develop a web-based Event Management System",
      "Developed the Success Stories feature using Vue.js and Bootstrap",
      "Implemented event management features for administrators to manage event information, schedules, and participant data",
      "Developed Job Fair participant registration with QR Code generation for registration identification and verification",
      "Implemented transaction management features to support participant registration payments",
      "Contributed to developing an administrative dashboard to monitor event activities and registration records",
    ],

    outcome: [
      "Successfully developed an Event Management System to support event administration",
      "Provided QR Code-based registration to simplify participant identification and verification",
      "Streamlined Job Fair participant registration and payment management",
      "Improved administrative management of event information and participant records",
    ],

    tags: [
      "Vue.js",
      "Bootstrap",
      "Laravel",
      "MySQL",
      "QR Code",
      "Event Management",
    ],

    workflow: [
      {
        step: "01",
        title: "Event Management",
        description:
          "Administrators manage event information, schedules, and registration details through the dashboard.",
      },
      {
        step: "02",
        title: "Participant Registration",
        description:
          "Participants register for Job Fair events by submitting their required information through the website.",
      },
      {
        step: "03",
        title: "QR Code Generation",
        description:
          "The system generates a QR Code for registered participants to support identification and registration verification.",
      },
      {
        step: "04",
        title: "Transaction Management",
        description:
          "The system supports the management of participant registration transactions and payment records.",
      },
      {
        step: "05",
        title: "Registration Verification",
        description:
          "Administrators use participant registration data and QR Codes to support the verification process.",
      },
    ],

links: [
  {
    label: "GITHUB ↗",
    href: "https://github.com/agissukmayadi/suxesstories",
  },
],  },

  laporpak: {
    image: "assets/laporpak.jpg",
    type: "PUBLIC COMPLAINT SYSTEM · 2024",
    title: "LaporPak",
    overview:
      "A web-based public complaint system designed to facilitate the reporting of fire emergencies, medical emergencies, and theft incidents, with administrative features for report verification and management.",

    role: [
      "Collaborated with a team of nine developers to design and develop a web-based public complaint system",
      "Developed the front-end and back-end features using Laravel and MySQL",
      "Implemented a user dashboard for submitting and monitoring public complaints",
      "Developed complaint reporting features for fire, medical emergencies, and theft incidents",
      "Implemented an administrative dashboard to verify, manage, and monitor submitted reports",
      "Contributed to organizing report information for relevant authorities, including fire departments, police, and medical services",
    ],

    outcome: [
      "Successfully developed a web-based public complaint system",
      "Provided a centralized platform for reporting fire, medical, and theft incidents",
      "Enabled administrators to verify and manage incoming public complaints",
      "Supported the distribution of reports to relevant authorities for further response",
    ],

    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Web Development"],

    workflow: [
      {
        step: "01",
        title: "User Access",
        description:
          "Users access the website to submit public complaints through the reporting platform.",
      },
      {
        step: "02",
        title: "Complaint Submission",
        description:
          "Users submit reports by selecting the incident category, including fire, medical emergencies, or theft.",
      },
      {
        step: "03",
        title: "Report Verification",
        description:
          "Administrators review and verify submitted complaints through the administrative dashboard.",
      },
      {
        step: "04",
        title: "Report Management",
        description:
          "Administrators manage verified reports and organize complaint information based on incident categories.",
      },
      {
        step: "05",
        title: "Authority Coordination",
        description:
          "Verified reports are directed to relevant authorities, including fire departments, police, and medical services.",
      },
    ],

    links: [
      {
        label: "LIVE DEMO ↗",
        href: "https://lapor.freedev.app/",
      },
    ],
  },

  leuwimalang: {
    image: "assets/leuwimalang.png",
    type: "VILLAGE PROFILE WEBSITE · 2024",
    title: "Desa Leuwimalang",
    overview:
      "A web-based village profile and tourism information system designed to introduce Desa Leuwimalang, showcase its local potential, and provide accessible information about tourist destinations, community activities, and village development.",

    role: [
      "Collaborated with a team of three developers to design and develop a village profile website during a hackathon",
      "Contributed to UI/UX design and website development",
      "Designed responsive user interfaces for village profile and tourism information pages",
      "Implemented front-end features using React.js and Tailwind CSS",
      "Developed website sections to present village information, local tourism, and community activities",
      "Organized information to help visitors explore the village's potential and tourist destinations",
    ],

    outcome: [
      "Successfully developed a responsive village profile and tourism website",
      "Provided accessible information about village profiles and local potential",
      "Presented tourist destinations and community activities through a digital platform",
      "Participated in a national-level hackathon project",
    ],

    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX Design",
      "Responsive Web Design",
    ],

    workflow: [
      {
        step: "01",
        title: "Village Introduction",
        description:
          "Visitors explore general information about Desa Leuwimalang, including its profile and background.",
      },
      {
        step: "02",
        title: "Local Potential",
        description:
          "The website presents the village's local potential and community resources.",
      },
      {
        step: "03",
        title: "Tourism Information",
        description:
          "Visitors discover tourist destinations and attractions available in the village.",
      },
      {
        step: "04",
        title: "Community Activities",
        description:
          "The platform provides information about village activities and community initiatives.",
      },
    ],

    links: [
      {
        label: "LIVE DEMO ↗",
        href: "https://desa-leuwimalang.vercel.app/",
      },
    ],
  },

  polresTapin: {
    image: "assets/redesain.jpg",
    type: "WEBSITE REDESIGN · 2023",
    title: "Polres Tapin Website Redesign",
    overview:
      "A website redesign project developed as part of a Human-Computer Interaction course, focusing on improving the usability, navigation, information architecture, and visual consistency of the Polres Tapin website.",

    role: [
      "Worked on a website redesign project as part of a team during the third semester",
      "Analyzed the existing Polres Tapin website to identify usability and navigation issues",
      "Applied User-Centered Design principles to improve the website's user experience",
      "Designed website layouts and user interfaces using HTML and CSS",
      "Implemented interactive website elements using JavaScript",
      "Improved information hierarchy, navigation structure, and responsive layouts",
    ],

    outcome: [
      "Developed a redesigned Polres Tapin website using HTML, CSS, and JavaScript",
      "Improved website navigation and information accessibility",
      "Created a more consistent and user-friendly interface",
      "Applied Human-Computer Interaction principles in a practical website redesign project",
    ],

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX Design",
      "User-Centered Design",
      "Responsive Web Design",
    ],

    workflow: [
      {
        step: "01",
        title: "Website Analysis",
        description:
          "Reviewed the existing Polres Tapin website to identify usability, navigation, and layout issues.",
      },
      {
        step: "02",
        title: "User Interface Planning",
        description:
          "Planned the website structure, information hierarchy, and navigation to improve user experience.",
      },
      {
        step: "03",
        title: "Interface Development",
        description:
          "Implemented the redesigned website interface using HTML and CSS.",
      },
      {
        step: "04",
        title: "Interactive Features",
        description:
          "Used JavaScript to implement interactive elements and improve website functionality.",
      },
      {
        step: "05",
        title: "Evaluation",
        description:
          "Reviewed the redesigned interface to assess usability, consistency, and navigation.",
      },
    ],


    links: [
      {
        label: "LIVE DEMO ↗",
        href: "https://selinadita.github.io/RedesainWebsite/",
      },
    ],  },
};
