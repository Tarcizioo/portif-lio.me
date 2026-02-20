export const en = {
  hero: {
    role: "Front-end Developer",
    description: "Computer Engineering Student (5th Sem) focused on Front-end Development and Web Design.",
    cta: "Contact Me",
    resume: "Download CV",
    socials: "Here are my socials",
    roles: ["Front-end Developer", "UI Designer", "Web Creator", "IoT Explorer"]
  },
  about: {
    title: "About Me",
    bio: "Hey! I'm Tarcizio — a Computer Engineering student with a passion for building beautiful and functional digital experiences. I love turning ideas into reality and I'm always looking to learn new things.",
    interests: {
      title: "What I'm Into",
      items: ["UI/UX Design", "IoT & Embedded Systems", "Continuous Learning", "Coffee & Code", "Drawing", "Games"]
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
      { name: "Frontend & Web", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
      { name: "Hardware & IoT", items: ["ESP32", "Arduino", "Sensors", "Electronics Basics"] },
      { name: "Graphics & Design", items: ["Three.js", "WebGL", "Figma", "Photoshop", "Web Design"] },
      { name: "Tools & Others", items: ["Git", "GitHub", "VS Code", "SQL", "Excel (Dashboards)"] },
    ]
  },
  education: {
    degree: {
      title: "Computer Engineering",
      institution: "Centro Universitário Facens",
      period: "Feb/2024 — Nov/2028 (Expected)",
      status: "Currently in the 5th Semester",
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
        title: "Intern - Electrical Lab",
        company: "Centro Universitário Facens",
        description: [
          "Provided technical support in assembling electrical and physics experiments, assisting professors and students in lab activities.",
          "Managed inventory and material control using Excel spreadsheets, ensuring resource availability for practical classes.",
          "Standardized experiment documentation and guides to improve internal lab organization."
        ]
      },
      {
        title: "Telemarketing Operator",
        company: "Instituto Cultural Newton Paiva Ferreira",
        description: [
          "Developed assertive communication and problem-solving skills under pressure (40-50 calls/day).",
          "Used CRM and Excel for lead management and data auditing, praised for organization and clarity."
        ]
      }
    ]
  },
  contact: {
    title: "Get in touch",
    description: "Have a question or want to work together? Send me a message!",
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
    downloadCv: "Download CV",
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
    features: "Key Features",
    technologies: "Technologies",
    status: {
      live: "Live",
      building: "Building",
      comingSoon: "Coming Soon"
    },
    items: [
      {
        title: "Portal Animes",
        description: "Full-stack responsive web app with real-time anime data via Jikan API, featuring advanced search and filtering.",
        longDescription: "A comprehensive anime discovery platform built with React and Next.js. Provides real-time data fetching, dynamic search with debounced filtering, detailed anime profiles with synopsis, characters and episodes, and a fully responsive grid layout.",
        features: [
          "Real-time data fetching via Jikan REST API",
          "Debounced search with dynamic filtering",
          "Responsive grid layout with CSS Modules",
          "Detailed anime profile pages with lazy-loaded content"
        ]
      },
      {
        title: "Voxel Terrain Engine",
        description: "High-performance browser-based 3D engine with procedural terrain generation and optimized InstancedMesh rendering.",
        longDescription: "A real-time 3D voxel engine running entirely in the browser. Leverages Three.js and WebGL with InstancedMesh for GPU-optimized block rendering, procedural terrain via Perlin Noise, and first-person camera controls.",
        features: [
          "Procedural terrain generation with Perlin Noise",
          "GPU-optimized rendering via InstancedMesh",
          "First-person camera with pointer lock controls",
          "Dynamic chunk loading/unloading for performance"
        ]
      },
      {
        title: "IoT Crowd Monitoring",
        description: "ESP32-based IoT prototype for real-time crowd density prediction using ultrasonic sensors.",
        longDescription: "An IoT solution for real-time foot traffic monitoring and analysis. Uses an ESP32 microcontroller paired with ultrasonic sensors to count people entering and exiting a space, with cloud data logging via REST API.",
        features: [
          "Real-time bidirectional people counting",
          "ESP32 Wi-Fi connectivity for cloud integration",
          "REST API data logging and visualization",
          "Low-power design for extended deployment"
        ]
      },
      {
        title: "Coming Soon",
        description: "...",
        longDescription: "Working on something new and exciting!",
        features: []
      }
    ]
  }
}

