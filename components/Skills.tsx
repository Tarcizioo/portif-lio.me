"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = [
  { name: "Frontend & Web", items: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"] },
  { name: "Hardware & IoT", items: ["ESP32", "Arduino", "Sensors", "Electronics Basics"] },
  { name: "Graphics & Design", items: ["Three.js", "WebGL", "Figma", "Photoshop", "Web Design"] },
  { name: "Tools & Others", items: ["Git", "GitHub", "VS Code", "SQL", "Excel (Dashboards)"] },
]

export default function Skills() {
  return (
    <section className="mb-24">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">Skills & Technologies</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {skills.map((category, idx) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
