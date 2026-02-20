"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/LanguageContext"

const sections = ["about", "experience", "projects", "skills", "education", "contact"]

export function Navbar() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const isScrollingRef = useRef(false)

  const sectionLabels: Record<string, string> = {
    about: t.section.about,
    experience: t.section.experience,
    projects: t.section.projects,
    skills: t.section.skills,
    education: t.section.education,
    contact: t.section.contact,
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)

      // Skip scroll spy while programmatic scroll is happening
      if (isScrollingRef.current) return

      // Scroll spy: determine which section is currently in view
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // If scrolled to near bottom, activate last section
      if (scrollY + viewportHeight >= docHeight - 50) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      let current = ""
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            current = sectionId
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    // Lock scroll spy and set active section immediately
    isScrollingRef.current = true
    setActiveSection(id)

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
      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      } else {
        // Re-enable scroll spy after animation completes
        isScrollingRef.current = false
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
        >
          <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/80 px-2 py-1.5 shadow-lg backdrop-blur-md">
            {sections.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {sectionLabels[id]}
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
