import { ContactCTA } from "./components/ContactCTA"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export const App = () => {
   return (
      <div className="min-h-screen">
         <Header />
         <main className="pt-20">
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <ContactCTA />
         </main>
         <Footer />
      </div>
   )
}
