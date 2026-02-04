"use client" // Needed for framer-motion context if used at top level or simpler integration, though components are client. 
// Actually components are "use client", page can be server. 
// But passing data to components is fine. keeping page server is better.
// However, I used "use client" in all components.
// If I want to use standard Next.js, page can be server.
// Let's keep page default (Server Component) and import Client Components.

import Hero from "@/components/Hero"
import ExperienceItem from "@/components/ExperienceItem"
import ProjectCard from "@/components/ProjectCard"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"

const experience = [
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
    location: "Belo Horizonte",
    description: [
      "Developed assertive communication and problem-solving skills under pressure (40-50 calls/day).",
      "Used CRM and Excel for lead management and data auditing, praised for organization and clarity."
    ],
    tags: ["Communication", "CRM", "Excel", "Problem Solving"]
  }
]

const projects = [
  {
    title: "Portal de Animes",
    description: "Responsive web app integrating external API (Jikan) for real-time anime data.",
    status: "Live" as const,
    tags: ["React", "CSS Modular", "REST API", "Jikan"],
    link: "https://portal-animes-v2.vercel.app/",
    github: "https://github.com/Tarcizioo/portal-animes-V2",
    image: "/images/portal-animes-v2-home-screen.png"
  },
  {
    title: "Voxel Terrain Engine",
    description: "3D engine focused on performance and optimized rendering using InstancedMesh with procedural terrain generation.",
    status: "Live" as const,
    tags: ["JavaScript", "Three.js", "WebGL"],
    link: "https://tarcizioo.github.io/Voxel-Terrain-Engine/",
    github: "https://github.com/Tarcizioo/Voxel-Terrain-Engine",
    image: "/images/voxel-home-screen.png"
  },
  {
    title: "IoT Crowd Monitoring",
    description: "Hardware prototype to predict crowd levels using ultrasonic sensors and ESP32.",
    status: "Building" as const,
    tags: ["ESP32", "Arduino", "IoT", "API"],
    github: "https://github.com/Tarcizioo"
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-3xl border-x border-dashed border-border/50 relative">
         {/* Grid Background Effect (Optional, kept subtle) */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

        <div className="px-6 md:px-12 py-8">
            <Hero />
            
            <div className="my-12 border-t border-dashed border-border/50" />
            
            <section className="mb-24">
              <h2 className="mb-12 text-3xl font-bold tracking-tight">Work Experience</h2>
              <div className="ml-2">
                 {experience.map((item, index) => (
                   <ExperienceItem key={index} {...item} index={index} />
                 ))}
              </div>
            </section>

             <div className="my-12 border-t border-dashed border-border/50" />

            <section className="mb-24">
              <h2 className="mb-12 text-3xl font-bold tracking-tight">Selected Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} index={index} />
                ))}
              </div>
            </section>

             <div className="my-12 border-t border-dashed border-border/50" />

            <Skills />
            
             <div className="my-12 border-t border-dashed border-border/50" />
            
            <Footer />
        </div>
      </div>
    </main>
  )
}
