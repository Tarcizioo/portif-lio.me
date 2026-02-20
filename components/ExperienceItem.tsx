"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"

interface ExperienceItemProps {
  title: string
  company: string
  logo?: string
  period: string
  location: string
  description: string[]
  tags: string[]
  index: number
}

export default function ExperienceItem({
  title,
  company,
  logo,
  period,
  location,
  description,
  tags,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative border-l border-border pl-6 pb-12 last:pb-0"
    >
      <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary animate-timeline-pulse" />
      
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
         <div className="flex items-start gap-4">
            {logo && (
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-white dark:bg-black">
                 <Image src={logo} alt={company} fill className="object-contain p-1" />
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <span className="text-base font-medium text-foreground block">{company}</span>
            </div>
         </div>
         <div className="text-sm text-muted-foreground mt-1 sm:mt-0 text-right">
            <span className="block">{period}</span>
            <span className="block">{location}</span>
         </div>
      </div>


      <ul className="mb-4 list-disc pl-4 text-muted-foreground space-y-1">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-md">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}
