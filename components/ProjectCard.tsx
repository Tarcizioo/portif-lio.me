"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Dialog, 
  DialogContent, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog"
import { motion } from "framer-motion"
import { ExternalLink, Github, Monitor, Server, Wrench } from "lucide-react"
import { useLanguage } from "@/components/LanguageContext"

interface ProjectCardProps {
  title: string
  description: string
  longDescription?: string
  features?: string[]
  status: "Live" | "Building" | "Archived" | "Coming Soon"
  tags: string[]
  link?: string
  github?: string
  image?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  longDescription,
  features,
  status,
  tags,
  link,
  github,
  image,
  index,
}: ProjectCardProps) {
  const { t } = useLanguage()
  const isComingSoon = status === "Coming Soon"
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case "Live": return t.project.status.live;
      case "Building": return t.project.status.building;
      case "Coming Soon": return t.project.status.comingSoon;
      default: return status;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild disabled={isComingSoon}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className={`h-full ${isComingSoon ? "cursor-default" : "cursor-pointer"}`}
        >
          <Card className="h-full group flex flex-col overflow-hidden border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.3)]">
            {/* Project Image Placeholder */}
            <div className="relative h-48 w-full overflow-hidden bg-[#1c1c1c]">
              {/* ... existing image logic ... */}
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
                    className={`object-cover transition-all duration-500 ease-in-out z-10 ${
                        isComingSoon ? "grayscale blur-[2px] scale-100" : "scale-[0.75] translate-y-4 rounded-lg shadow-lg group-hover:scale-[0.85] group-hover:translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)]"
                    }`}
                  />
              ) : (
                // ... existing fallback ...
                <div className="absolute inset-0 flex items-center justify-center z-10 p-6">...</div>
              )}

              {isComingSoon && (
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                      <span className="text-2xl font-black uppercase tracking-widest text-white drop-shadow-md border-4 border-white/80 px-4 py-1">
                          {t.project.status.comingSoon}
                      </span>
                  </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-3 right-3 z-30">
                {(() => {
                   const statusColorClasses = 
                     status === "Live" ? "bg-green-500/90 text-white shadow-[0_0_10px_rgba(34,197,94,0.4)] border-green-400/50" : 
                     status === "Building" ? "bg-yellow-500/90 text-black shadow-[0_0_10px_rgba(234,179,8,0.4)] border-yellow-400/50" : 
                     status === "Coming Soon" ? "bg-blue-500/90 text-white shadow-[0_0_10px_rgba(59,130,246,0.4)] border-blue-400/50" : 
                     "bg-gray-500/90 text-white border-gray-400/50";
                     
                   return (
                     <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide backdrop-blur-md border ${statusColorClasses}`}>
                        {getStatusLabel(status)}
                     </div>
                   );
                })()}
              </div>
            </div>

            <CardContent className={`flex flex-1 flex-col p-6 ${isComingSoon ? "blur-[4px] select-none opacity-50" : ""}`}>
              {/* ... existing content ... */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                {/* ... */}
              </div>
              
              <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
              
              {/* ... tags ... */}
              <div className="mt-auto flex flex-wrap gap-2 mb-6">
                {tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-default">
                    {tag}
                  </Badge>
                ))}
                 {/* ... */}
              </div>

              {/* ... footer ... */}
               <div className="flex gap-4 mt-auto pt-4 border-t border-border/50">
                  <span className="text-sm font-medium text-primary flex items-center gap-1 transition-colors group-hover:underline">
                    {t.project.details} <Monitor className="w-3 h-3" />
                  </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 border-border bg-card">
        <DialogTitle className="sr-only">{title} Details</DialogTitle>
        <DialogDescription className="sr-only">{description}</DialogDescription>
        
        <div className="relative h-64 w-full bg-[#1c1c1c] overflow-hidden">
             {image ? (
                <Image 
                  src={image} 
                  alt={`${title} Cover`} 
                  fill 
                  className="object-cover"
                />
             ) : (
               <div className="flex h-full items-center justify-center bg-muted/20">
                 <Monitor className="h-16 w-16 text-muted-foreground/20" />
               </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
             
             <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                   <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
                   {(() => {
                      const statusColorClasses = 
                        status === "Live" ? "text-green-500 border-green-500/30" : 
                        status === "Building" ? "text-yellow-500 border-yellow-500/30" : 
                        status === "Coming Soon" ? "text-blue-500 border-blue-500/30" : 
                        "text-muted-foreground border-border";
                      return (
                        <div className={`px-2.5 py-0.5 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm border ${statusColorClasses}`}>
                           {getStatusLabel(status)}
                        </div>
                      );
                   })()}
                </div>
             </div>
        </div>

        <div className="p-6 pt-0 space-y-6">
           <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {longDescription || description}
              </p>
           </div>

           {features && features.length > 0 && (
             <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4" /> {t.project.features}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                   {features.map((feature, i) => (
                     <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                     </li>
                   ))}
                </ul>
             </div>
           )}

           <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4" /> {t.project.technologies}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
           </div>

           <div className="flex items-center gap-4 pt-4 border-t border-border">
              {link && (
                 <Button asChild className="flex-1">
                    <Link href={link} target="_blank">
                       <ExternalLink className="mr-2 h-4 w-4" /> {t.project.view}
                    </Link>
                 </Button>
              )}
              {github && (
                 <Button asChild variant="outline" className="flex-1">
                    <Link href={github} target="_blank">
                       <Github className="mr-2 h-4 w-4" /> {t.project.source}
                    </Link>
                 </Button>
              )}
           </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}



