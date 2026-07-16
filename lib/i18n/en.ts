export const en = {
  hero: {
    role: "Frontend Developer",
    description: "I build complete web applications with React, TypeScript, GraphQL, and Firebase, combining product thinking, user experience, and engineering.",
    cta: "Contact Me",
    resume: "Download Resume",
    socials: "Find me online",
    roles: ["Frontend Developer", "React & TypeScript", "Firebase & GraphQL", "Process Automation"]
  },
  about: {
    title: "About Me",
    bio: "I am a Computer Engineering student and frontend developer focused on React, TypeScript, and complete digital products. At Veolia/ChemFeed, I support technical initiatives and build internal web applications and automations with Google Apps Script, JavaScript, HTML, and CSS while respecting corporate confidentiality. In my own work, I built Portal Animes V2, a social PWA with GraphQL, Firebase, and 47 automated tests, as well as a browser-based 3D voxel engine with Three.js and WebGL.",
    interests: {
      title: "Focus areas",
      items: ["Frontend Architecture", "UI/UX & Accessibility", "Process Automation", "Quality & Testing", "Computer Graphics", "IoT"]
    }
  },
  section: {
    experience: "Work Experience",
    projects: "Selected Projects",
    skills: "Skills & Technologies",
    education: "Education & Certifications",
    contact: "Let's Talk",
    about: "About Me"
  },
  skills: {
    categories: [
      { name: "Frontend & Product", items: ["TypeScript", "JavaScript", "React", "Next.js", "React Router", "Tailwind CSS"] },
      { name: "Data & Backend", items: ["Firebase Auth", "Cloud Firestore", "GraphQL", "REST APIs", "TanStack Query", "SQL", "Google Apps Script", "Google Workspace"] },
      { name: "Quality & Delivery", items: ["Vitest", "Testing Library", "GitHub Actions", "PWA", "Accessibility", "Responsive Design"] },
      { name: "Engineering & Design", items: ["Three.js", "WebGL", "Figma", "ESP32", "Arduino", "Git & GitHub"] },
    ]
  },
  education: {
    degree: {
      title: "Computer Engineering",
      institution: "Centro Universitário Facens",
      period: "Feb/2024 — Nov/2028 (expected)",
      status: "Degree in progress",
    },
    certifications: [
      {
        name: "Scrum Fundamentals Certified (SFC)",
        issuer: "SCRUMstudy",
        date: "Nov/2025",
      },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate" },
      { name: "Spanish", level: "Basic" },
    ],
    labels: {
      degree: "Degree",
      certifications: "Certifications",
      languages: "Languages",
    }
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with",
    nav: {
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    }
  },
  experience: {
    items: [
      {
        title: "ChemFeed Intern",
        company: "Veolia | ChemFeed",
        period: "Mar/2026 — present",
        location: "Sorocaba/SP · On-site",
        description: [
          "Provide cross-functional support for technical, administrative, and technology initiatives within the ChemFeed team.",
          "Create and maintain technical documentation and process flowcharts for commercial and operational routines.",
          "Track maintenance, equipment quotations, delivery reports, suppliers, and material tests.",
          "Build internal web applications and automations with Google Apps Script, JavaScript, HTML, and CSS, with attention to access, reliability, and confidentiality."
        ],
        tags: ["Google Apps Script", "JavaScript", "Google Workspace", "Process Automation", "SAP ERP"]
      },
      {
        title: "Electrical Laboratory Intern",
        company: "Centro Universitário Facens",
        period: "Aug/2024 — Mar/2026",
        location: "Sorocaba/SP",
        description: [
          "Provided technical support for practical electrical and physics activities with professors and students.",
          "Managed inventory and materials in Excel, keeping laboratory classes supplied.",
          "Standardized experiment guides and internal documentation."
        ],
        tags: ["Technical Support", "Excel", "Documentation", "Organization"]
      },
      {
        title: "Telemarketing Operator",
        company: "Instituto Cultural Newton Paiva Ferreira",
        period: "Apr/2023 — Sep/2023",
        location: "Belo Horizonte/MG",
        description: [
          "Handled 40-50 calls per day, developing assertive communication and problem solving under pressure.",
          "Used CRM and Excel for lead management and data auditing."
        ],
        tags: ["Communication", "CRM", "Excel", "Problem Solving"]
      }
    ]
  },
  contact: {
    title: "Get in touch",
    description: "Have an opportunity, project, or idea to discuss? Send me a message.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully!",
    successDesc: "Thanks for reaching out. I'll get back to you soon.",
    validation: {
      nameMin: "Name must be at least 2 characters.",
      emailInvalid: "Please enter a valid email address.",
      messageMin: "Message must be at least 10 characters."
    }
  },
  command: {
    search: "Type a command or search...",
    noResults: "No results found.",
    general: "General",
    socials: "Socials",
    theme: "Theme",
    navigation: "Navigation",
    sendEmail: "Send Email",
    downloadCv: "Download Resume",
    viewGithub: "View GitHub",
    viewLinkedin: "View LinkedIn",
    light: "Light",
    dark: "Dark",
    system: "System",
    goToExperience: "Go to Experience",
    goToProjects: "Go to Projects",
    goToSkills: "Go to Skills",
    goToEducation: "Go to Education",
    goToContact: "Go to Contact"
  },
  project: {
    view: "View Project",
    source: "Source Code",
    details: "View Details",
    features: "Technical highlights",
    technologies: "Technologies",
    status: {
      live: "Live",
      building: "In development",
      comingSoon: "Coming Soon"
    },
    items: [
      {
        title: "Portal Animes V2",
        description: "Social PWA built with React 19, AniList GraphQL, Firebase, and an automated quality pipeline.",
        longDescription: "A complete platform for discovering, tracking, and organizing anime. It combines React 19, AniList GraphQL, Firebase Authentication and Firestore, persistent caching, real-time interactions, accessibility, PWA capabilities, and automated validation.",
        features: [
          "Catalog, search, calendar, and detail pages powered by AniList GraphQL",
          "Library, statistics, recommendations, profiles, comments, and social connections",
          "Google authentication and real-time persistence with Firebase",
          "Installable PWA, 24-hour cache, lazy-loaded routes, and accessible interactions",
          "47 automated tests plus lint and production build checks in GitHub Actions"
        ]
      },
      {
        title: "Voxel Terrain Engine",
        description: "Browser-based voxel engine with procedural terrain and GPU-efficient InstancedMesh rendering.",
        longDescription: "A real-time voxel rendering experiment built with Three.js and WebGL. It explores procedural generation, efficient GPU instancing, first-person controls, basic physics, raycasting, and block interaction.",
        features: [
          "Procedural terrain generated from a mathematical height function",
          "Thousands of blocks rendered with THREE.InstancedMesh",
          "WASD, jumping, gravity, pointer-lock camera, and ground collision",
          "Raycasting for block detection and visual destruction",
          "Browser-based 3D graphics with JavaScript, Three.js, and WebGL"
        ]
      },
      {
        title: "IoT Occupancy Monitor",
        description: "Academic ESP32 prototype using ultrasonic sensors and a dashboard to monitor people flow.",
        longDescription: "An academic IoT prototype that detects entry and exit events with an ESP32 and ultrasonic sensors. It explores embedded programming, sensor integration, Wi-Fi communication, and occupancy data visualization.",
        features: [
          "Bidirectional event detection with ultrasonic sensors",
          "ESP32-based Wi-Fi connectivity",
          "REST integration for data logging",
          "Dashboard-oriented occupancy visualization",
          "Prototype architecture prepared for iterative validation"
        ]
      }
    ]
  }
}
