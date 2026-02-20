"use client"

import * as React from "react"
import {
  Search,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Laptop,
  User,
  Briefcase,
  Code,
  FolderKanban,
  MessageSquare
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { useTheme } from "next-themes"
import { siteConfig } from "@/lib/data"
import { useLanguage } from "@/components/LanguageContext"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()
  const { t } = useLanguage()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

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
    <>
      <p className="fixed bottom-4 left-4 z-50 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md border shadow-sm hidden md:block pointer-events-none">
        Press <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd> or <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl</span>K
        </kbd> to search
      </p>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={t.command.search} />
        <CommandList>
          <CommandEmpty>{t.command.noResults}</CommandEmpty>
          <CommandGroup heading={t.command.navigation}>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("experience"))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>{t.command.goToExperience}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("projects"))}>
              <FolderKanban className="mr-2 h-4 w-4" />
              <span>{t.command.goToProjects}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("skills"))}>
              <Code className="mr-2 h-4 w-4" />
              <span>{t.command.goToSkills}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => scrollToSection("contact"))}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>{t.command.goToContact}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t.command.general}>
            <CommandItem onSelect={() => runCommand(() => window.open(`mailto:${siteConfig.email}`, '_self'))}>
              <Mail className="mr-2 h-4 w-4" />
              <span>{t.command.sendEmail}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open(siteConfig.links.resume, '_blank'))}>
              <User className="mr-2 h-4 w-4" />
              <span>{t.command.downloadCv}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t.command.socials}>
            <CommandItem onSelect={() => runCommand(() => window.open(siteConfig.links.github, '_blank'))}>
              <Github className="mr-2 h-4 w-4" />
              <span>{t.command.viewGithub}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open(siteConfig.links.linkedin, '_blank'))}>
              <Linkedin className="mr-2 h-4 w-4" />
              <span>{t.command.viewLinkedin}</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading={t.command.theme}>
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              <span>{t.command.light}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              <span>{t.command.dark}</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" />
              <span>{t.command.system}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
