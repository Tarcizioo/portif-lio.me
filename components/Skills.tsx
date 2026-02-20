"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/LanguageContext"

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="mb-24 scroll-mt-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight">{t.section.skills}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {t.skills.categories.map((category, idx) => (
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
                <Badge key={skill} variant="secondary" className="px-3 py-1 skill-glow cursor-default">
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
