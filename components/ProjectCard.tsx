"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  status: "Live" | "Building" | "Archived"
  tags: string[]
  link?: string
  github?: string
  image?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  status,
  tags,
  link,
  github,
  image,
  index,
}: ProjectCardProps) {
  const statusColor = 
    status === "Live" ? "bg-green-500" : 
    status === "Building" ? "bg-yellow-500" : "bg-gray-500"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full group flex flex-col overflow-hidden border-border bg-card transition-all hover:border-foreground/20 hover:shadow-lg">
        {/* Project Image Placeholder */}
        <div className="relative h-48 w-full overflow-hidden bg-[#1c1c1c]">
           {/* Background Image (Aurora/Galaxy) - Visible on Hover */}
           <Image 
              src="/images/project-bg.jpg" 
              alt="Background" 
              fill 
              className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              priority
           />
           
           {image ? (
              <Image 
                src={image} 
                alt={`${title} Preview`} 
                fill 
                className="object-cover transition-all duration-500 ease-in-out scale-[0.75] translate-y-4 rounded-lg shadow-lg group-hover:scale-[0.85] group-hover:translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] z-10" 
              />
           ) : (
             <div className="absolute inset-0 flex items-center justify-center z-10 p-6">
                <div className="w-full h-full bg-card rounded-lg flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-[1.02]">
                   <span className="font-semibold text-muted-foreground">{title} Preview</span>
                </div>
             </div>
           )}
        </div>

        <CardContent className="flex flex-1 flex-col p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className={`h-2 w-2 rounded-full ${statusColor} animate-pulse`} />
              {status}
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
          
          <div className="mt-auto flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-default">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
             {link && (
                <Link href={link} target="_blank" className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-blue-500 hover:underline">
                  View Project <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
             )}
             {github && (
                <Link href={github} target="_blank" className="flex items-center text-sm font-medium transition-colors duration-200 hover:text-blue-500 hover:underline">
                   Source Code <Github className="ml-1 h-3 w-3" />
                </Link>
             )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
