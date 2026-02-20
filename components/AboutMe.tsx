"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/LanguageContext"

export default function AboutMe() {
  const { t } = useLanguage()

  return (
    <section id="about" className="mb-24 scroll-mt-20">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">{t.about.title}</h2>

      <div className="space-y-8">
        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg leading-relaxed text-muted-foreground"
        >
          {t.about.bio}
        </motion.p>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="w-4 h-4" />
            {t.about.interests.title}
          </div>
          <div className="flex flex-wrap gap-2">
            {t.about.interests.items.map((item, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="px-3 py-1.5 text-sm cursor-default transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
