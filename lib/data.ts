import { Github, Linkedin } from "lucide-react"

export const siteConfig = {
  name: "Tarcizio Pereira Neto",
  role: "Frontend Developer",
  description: "Desenvolvedor frontend e estudante de Engenharia da Computação. Crio produtos web com React, TypeScript, GraphQL e Firebase, com foco em experiência, qualidade e performance.",
  email: "tarcizioneto10@gmail.com",
  links: {
    portfolio: "https://portif-liome.vercel.app",
    github: "https://github.com/Tarcizioo",
    linkedin: "https://www.linkedin.com/in/tarcizio-pereira-neto-135299279",
    resume: "/resume-pt.pdf",
    resumePt: "/resume-pt.pdf",
    resumeEn: "/resume-en.pdf"
  }
}

export const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
]

export const experience = [
  {
    title: "ChemFeed Intern",
    company: "Veolia | ChemFeed",
    logo: "/images/veolia-logo.jpg",
    period: "03/2026 - Present",
    location: "Sorocaba/SP · On-site",
    description: [
      "Support technical, administrative, and technology initiatives for the ChemFeed team.",
      "Create and maintain technical documentation and process flowcharts for commercial and operational routines.",
      "Track maintenance, equipment quotations, delivery reports, suppliers, and material tests.",
      "Build internal web applications and automations with Google Apps Script, JavaScript, HTML, and CSS while respecting corporate access and confidentiality requirements."
    ],
    tags: ["Google Apps Script", "JavaScript", "Google Workspace", "Process Automation", "SAP ERP"]
  },
  {
    title: "Electrical Laboratory Intern",
    company: "Centro Universitário Facens",
    logo: "/images/facens-logo.png",
    period: "08/2024 - 03/2026",
    location: "Sorocaba/SP",
    description: [
      "Provided technical support in electrical and physics laboratory activities for professors and students.",
      "Managed inventory and materials in Excel to keep practical classes supplied.",
      "Standardized experiment guides and internal documentation."
    ],
    tags: ["Laboratory Support", "Excel", "Documentation", "Organization"]
  },
  {
    title: "Telemarketing Operator",
    company: "Instituto Cultural Newton Paiva Ferreira",
    logo: "/images/newton-logo.jpg",
    period: "04/2023 - 09/2023",
    location: "Belo Horizonte/MG",
    description: [
      "Handled 40-50 calls per day, developing assertive communication and problem solving under pressure.",
      "Used CRM and Excel for lead management and data auditing."
    ],
    tags: ["Communication", "CRM", "Excel", "Problem Solving"]
  }
]

export const projects = [
  {
    title: "Portal Animes V2",
    description: "Social anime PWA built with React 19, AniList GraphQL, Firebase, and a production-focused quality pipeline.",
    longDescription: "A complete social platform for discovering, tracking, and organizing anime. It combines React 19, AniList GraphQL, Firebase Authentication and Firestore, persistent server-state caching, real-time interactions, accessibility, PWA support, and automated quality checks.",
    features: [
      "Advanced catalog, search, calendar, and detail pages powered by AniList GraphQL",
      "Personal library, statistics, recommendations, profiles, comments, and social connections",
      "Google authentication and real-time persistence with Firebase",
      "Installable PWA with persistent cache, lazy-loaded routes, and accessible interactions",
      "47 automated tests plus lint and production build checks in GitHub Actions"
    ],
    status: "Live" as const,
    tags: ["React 19", "GraphQL", "Firebase", "TanStack Query", "PWA", "Vitest"],
    link: "https://portal-animes-v2.vercel.app/",
    github: "https://github.com/Tarcizioo/portal-animes-V2",
    image: "/images/portal-animes-v2-home-screen.png"
  },
  {
    title: "Voxel Terrain Engine",
    description: "Browser-based 3D engine with procedural terrain and GPU-efficient rendering through InstancedMesh.",
    longDescription: "A real-time voxel rendering experiment that runs entirely in the browser. It uses Three.js and WebGL to study procedural generation, GPU-efficient instancing, first-person controls, basic physics, raycasting, and block interaction.",
    features: [
      "Procedural terrain generated from a mathematical height function",
      "Thousands of blocks rendered efficiently with THREE.InstancedMesh",
      "WASD, jumping, gravity, pointer-lock camera, and ground collision",
      "Raycasting for block detection and visual destruction",
      "Browser-based 3D graphics with JavaScript, Three.js, and WebGL"
    ],
    status: "Live" as const,
    tags: ["JavaScript", "Three.js", "WebGL"],
    link: "https://tarcizioo.github.io/Voxel-Terrain-Engine/",
    github: "https://github.com/Tarcizioo/Voxel-Terrain-Engine",
    image: "/images/voxel-home-screen.png"
  },
  {
    title: "IoT Occupancy Monitor",
    description: "Academic ESP32 prototype for monitoring people flow with ultrasonic sensors and a data dashboard.",
    longDescription: "An academic IoT prototype designed to monitor entry and exit events with an ESP32 and ultrasonic sensors. The project explores embedded programming, sensor integration, Wi-Fi communication, and the visualization of occupancy data.",
    features: [
      "Bidirectional event detection with ultrasonic sensors",
      "ESP32-based Wi-Fi connectivity",
      "REST API integration for data logging",
      "Dashboard-oriented occupancy visualization",
      "Prototype architecture prepared for iterative validation"
    ],
    status: "Building" as const,
    tags: ["ESP32", "Arduino", "IoT", "REST API"],
    github: "https://github.com/Tarcizioo"
  }
]

export const techStack = [
  { name: "React", icon: "react" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript (ES6+)", icon: "javascript" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Firebase", icon: "firebase" },
  { name: "GraphQL", icon: "graphql" },
  { name: "TanStack Query", icon: "tanstack-query" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Three.js", icon: "threejs" },
  { name: "Git & GitHub", icon: "git" },
  { name: "Google Apps Script", icon: "google-apps-script" },
]
