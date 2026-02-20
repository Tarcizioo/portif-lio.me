"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { useLanguage } from "@/components/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  const navLinks = [
    { label: t.footer.nav.about, id: "about" },
    { label: t.footer.nav.experience, id: "experience" },
    { label: t.footer.nav.projects, id: "projects" },
    { label: t.footer.nav.skills, id: "skills" },
    { label: t.footer.nav.education, id: "education" },
    { label: t.footer.nav.contact, id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const targetPosition = el.getBoundingClientRect().top + window.scrollY - 80
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 800
    let start: number | null = null

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress))
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
  }

  return (
    <footer className="mt-24 border-t border-border pb-8 pt-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="flex items-center justify-center gap-4"
        >
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-muted hover:scale-110"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-muted hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${siteConfig.email}`}
            className="rounded-full p-2.5 text-muted-foreground transition-all duration-300 hover:text-foreground hover:bg-muted hover:scale-110"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </motion.div>

        {/* Copyright & Built with */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-xs text-muted-foreground/60">
            {t.footer.builtWith} Next.js <Heart className="inline h-3 w-3 text-red-500 fill-red-500 mx-0.5" /> & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

