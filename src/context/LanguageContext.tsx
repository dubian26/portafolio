import { createContext, useContext, useEffect, useState, ReactNode } from "react"

export type Language = "es" | "en"

interface LanguageContextType {
   language: Language
   toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
   const [language, setLanguage] = useState<Language>(() => {
      if (typeof window !== "undefined") {
         const stored = localStorage.getItem("language") as Language | null
         return stored || "es"
      }
      return "es"
   })

   useEffect(() => {
      if (typeof window !== "undefined") {
         localStorage.setItem("language", language)
         document.documentElement.lang = language
      }
   }, [language])

   const toggleLanguage = () => {
      setLanguage((prev) => (prev === "es" ? "en" : "es"))
   }

   return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
         {children}
      </LanguageContext.Provider>
   )
}

export const useLanguage = () => {
   const context = useContext(LanguageContext)
   if (context === undefined) {
      throw new Error("useLanguage must be used within a LanguageProvider")
   }
   return context
}
