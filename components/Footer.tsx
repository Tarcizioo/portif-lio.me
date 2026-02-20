"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/data"
import { useLanguage } from "@/components/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="mt-24 border-t border-border pb-8 pt-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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

        <div className="flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-sm italic text-muted-foreground">
            {t.footer.quote}
          </p>
        </div>
      </div>
    </footer>
  )
}
