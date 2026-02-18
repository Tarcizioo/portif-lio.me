"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/LanguageContext"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
      className="w-9 px-0 font-bold"
    >
      {language === "en" ? "PT" : "EN"}
      <span className="sr-only">Toggle Language</span>
    </Button>
  )
}
