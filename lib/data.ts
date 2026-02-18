import { Github, Linkedin } from "lucide-react"

export const siteConfig = {
  name: "Tarcizio Pereira Neto",
  role: "Front-end Developer",
  description: "Computer Engineering Student (5th Sem) focused on Front-end Development and Web Design. I create modern interfaces and explore IoT solutions.",
  email: "tarcizioneto10@gmail.com",
  links: {
    github: "https://github.com/Tarcizioo",
    linkedin: "https://www.linkedin.com/in/tarcizio-pereira-neto-135299279",
    resume: "/resume.pdf"
  }
}

export const socialLinks = [
  { icon: Github, href: siteConfig.links.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
]

export const experience = [
  {
    title: "Intern - Laboratório de Elétrica",
    company: "Centro Universitário Facens",
    logo: "/images/facens-logo.png",
    period: "08/2024 - Present",
    location: "Sorocaba/SP",
    description: [
      "Technical support in assembling electrical and physics experiments, assisting professors and students.",
      "Inventory management and material control using Excel to ensure resource availability for practical classes.",
      "Standardization of experiment guides to improve internal organization."
    ],
    tags: ["Lab Support", "Excel", "Organization", "Teaching"]
  },
  {
    title: "Telemarketing Operator",
    company: "Instituto Cultural Newton Paiva Ferreira",
    logo: "/images/newton-logo.jpg",
    period: "04/2023 - 09/2023",
    location: "Belo Horizonte/MG",
    description: [
      "Developed assertive communication and problem-solving skills under pressure (40-50 calls/day).",
      "Used CRM and Excel for lead management and data auditing, praised for organization and clarity."
    ],
    tags: ["Communication", "CRM", "Excel", "Problem Solving"]
  }
]

export const projects = [
  {
    title: "Portal de Animes",
    description: "Responsive web app integrating external API (Jikan) for real-time anime data.",
    longDescription: "A comprehensive anime discovery platform built with React and Next.js. Users can search for their favorite anime, view detailed information including synopsis, characters, and episodes, and see top-rated series. The application features a responsive design, ensuring a seamless experience across desktop and mobile devices.",
    features: [
      "Real-time data fetching using Jikan API",
      "Dynamic search and filtering capabilities",
      "Responsive grid layout with CSS Modules",
      "Detailed anime profile pages",
      "optimized image loading"
    ],
    status: "Live" as const,
    tags: ["React", "CSS Modular", "REST API", "Jikan"],
    link: "https://portal-animes-v2.vercel.app/",
    github: "https://github.com/Tarcizioo/portal-animes-V2",
    image: "/images/portal-animes-v2-home-screen.png"
  },
  {
    title: "Voxel Terrain Engine",
    description: "3D engine focused on performance and optimized rendering using InstancedMesh with procedural terrain generation.",
    longDescription: "A high-performance 3D voxel engine running in the browser. It leverages Three.js and WebGL to render vast procedural terrains. The engine uses InstancedMesh for efficient rendering of blocks and implements culling techniques to maintain high frame rates. It supports basic physics and block interaction.",
    features: [
      "Procedural terrain generation using Perlin Noise",
      "Optimized rendering with InstancedMesh",
      "First-person camera controls",
      "Dynamic chunk loading and unloading",
      "Browser-based 3D graphics with WebGL"
    ],
    status: "Live" as const,
    tags: ["JavaScript", "Three.js", "WebGL"],
    link: "https://tarcizioo.github.io/Voxel-Terrain-Engine/",
    github: "https://github.com/Tarcizioo/Voxel-Terrain-Engine",
    image: "/images/voxel-home-screen.png"
  },
  {
    title: "IoT Crowd Monitoring",
    description: "Hardware prototype to predict crowd levels using ultrasonic sensors and ESP32.",
    longDescription: "An IoT solution designed to monitor and analyze foot traffic in real-time. Using an ESP32 microcontroller and ultrasonic sensors, the system counts people entering and exiting a space. The data is sent to a cloud platform for visualization, allowing for data-driven decisions regarding crowd management and space utilization.",
    features: [
      "Real-time people counting with ultrasonic sensors",
      "ESP32-based Wi-Fi connectivity",
      "REST API integration for data logging",
      "Low-power consumption design",
      "Scalable sensor node architecture"
    ],
    status: "Building" as const,
    tags: ["ESP32", "Arduino", "IoT", "API"],
    github: "https://github.com/Tarcizioo"
  },
  {
    title: "Coming Soon",
    description: "...",
    status: "Coming Soon" as const,
    tags: ["Next.js", "AI", "WebSockets"],
    image: "/images/project-bg.jpg"
  }
]
