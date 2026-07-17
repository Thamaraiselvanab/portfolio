import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import NewCareer from './components/NewCareer.jsx'

function App() {
  const [activeCareer, setActiveCareer] = useState('instrumentation'); // 'java' or 'instrumentation'

  useEffect(() => {
    if (activeCareer === 'java') {
      document.body.style.background = 'linear-gradient(135deg, var(--bg-gradient-start), var(--bg-gradient-mid), var(--bg-gradient-end))';
      document.body.style.backgroundAttachment = 'fixed';
    } else {
      document.body.style.background = '#f8fafc'; // slate-50 background
      document.body.style.backgroundAttachment = 'unset';
    }
  }, [activeCareer]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      activeCareer === 'java' 
        ? 'selection:bg-primary/30 selection:text-white text-white' 
        : 'bg-slate-50 text-slate-800 selection:bg-blue-500/20 selection:text-blue-900'
    }`}>
      <Header activeCareer={activeCareer} setActiveCareer={setActiveCareer} />
      
      <main>
        {activeCareer === 'java' ? (
          <>
            <Hero />
            <Projects />
            <Experience />
            <Skills />
            <Contact />
          </>
        ) : (
          <NewCareer />
        )}
      </main>
      
      <Footer activeCareer={activeCareer} />
    </div>
  )
}

export default App
