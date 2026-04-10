import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        {/* All other sections will follow */}
      </main>
      
      <Footer />
    </div>
  )
}

export default App
