"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { en } from "@/lib/i18n/en"
import { pt } from "@/lib/i18n/pt"

type Language = "en" | "pt"
type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language
    const browserLang = navigator.language.startsWith("pt") ? "pt" : "en"
    const nextLanguage = savedLang === "pt" || savedLang === "en" ? savedLang : browserLang
    const frame = window.requestAnimationFrame(() => setLanguage(nextLanguage))

    return () => window.cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en"
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: language === "pt" ? pt : en
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
