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

import { experience, projects } from "@/lib/data"

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
