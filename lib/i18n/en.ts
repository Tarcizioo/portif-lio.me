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
        title: "Intern - Laboratório de Elétrica",
        company: "Centro Universitário Facens",
        description: [
          "Technical support in assembling electrical and physics experiments, assisting professors and students.",
          "Inventory management and material control using Excel to ensure resource availability for practical classes.",
          "Standardization of experiment guides to improve internal organization."
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
        description: "Responsive web app integrating external API (Jikan) for real-time anime data.",
        longDescription: "A comprehensive anime discovery platform built with React and Next.js. Users can search for their favorite anime, view detailed information including synopsis, characters, and episodes, and see top-rated series.",
        features: [
          "Real-time data fetching using Jikan API",
          "Dynamic search and filtering capabilities",
          "Responsive grid layout with CSS Modules",
          "Detailed anime profile pages"
        ]
      },
      {
        title: "Voxel Terrain Engine",
        description: "3D engine focused on performance and optimized rendering using InstancedMesh with procedural terrain generation.",
        longDescription: "A high-performance 3D voxel engine running in the browser. It leverages Three.js and WebGL to render vast procedural terrains. The engine uses InstancedMesh for efficient rendering of blocks.",
        features: [
          "Procedural terrain generation using Perlin Noise",
          "Optimized rendering with InstancedMesh",
          "First-person camera controls",
          "Dynamic chunk loading and unloading"
        ]
      },
      {
        title: "IoT Crowd Monitoring",
        description: "Hardware prototype to predict crowd levels using ultrasonic sensors and ESP32.",
        longDescription: "An IoT solution designed to monitor and analyze foot traffic in real-time. Using an ESP32 microcontroller and ultrasonic sensors, the system counts people entering and exiting a space.",
        features: [
          "Real-time people counting with ultrasonic sensors",
          "ESP32-based Wi-Fi connectivity",
          "REST API integration for data logging",
          "Low-power consumption design"
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

