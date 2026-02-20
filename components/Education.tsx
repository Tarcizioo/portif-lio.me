"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/LanguageContext"
import Image from "next/image"

export default function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="mb-24 scroll-mt-20">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">{t.section.education}</h2>

      <div className="space-y-10">
        {/* Degree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <GraduationCap className="w-4 h-4" />
            {t.education.labels.degree}
          </div>
          <div className="flex items-start gap-4 rounded-lg border border-border p-5 bg-card/50 transition-colors hover:bg-muted/30">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md border border-border bg-white dark:bg-black">
              <Image src="/images/facens-logo.png" alt="Facens" fill className="object-contain p-1" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{t.education.degree.title}</h3>
              <p className="text-sm text-foreground font-medium">{t.education.degree.institution}</p>
              <p className="text-sm text-muted-foreground mt-1">{t.education.degree.period}</p>
              <Badge variant="secondary" className="mt-2 text-xs">{t.education.degree.status}</Badge>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Award className="w-4 h-4" />
            {t.education.labels.certifications}
          </div>
          <div className="space-y-3">
            {t.education.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-border p-4 bg-card/50 transition-colors hover:bg-muted/30"
              >
                <div>
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <Badge variant="outline" className="text-xs shrink-0 ml-4">{cert.date}</Badge>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            <Globe className="w-4 h-4" />
            {t.education.labels.languages}
          </div>
          <div className="flex flex-wrap gap-3">
            {t.education.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 bg-card/50 transition-colors hover:bg-muted/30"
              >
                <span className="font-medium text-sm">{lang.name}</span>
                <span className="text-xs text-muted-foreground">• {lang.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
