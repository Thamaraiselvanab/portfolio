import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Code, User, MessageSquare, Sparkles } from 'lucide-react';

const Header = ({ activeCareer, setActiveCareer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isJava = activeCareer === 'java';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer if career switches
  useEffect(() => {
    setIsOpen(false);
  }, [activeCareer]);

  const javaLinks = [
    { title: 'Home', href: '#home', icon: Home },
    { title: 'Projects', href: '#projects', icon: Briefcase },
    { title: 'Experience', href: '#experience', icon: User },
    { title: 'Skills', href: '#skills', icon: Code },
    { title: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  const instLinks = [
    { title: 'Home', href: '#home', icon: Home },
    { title: 'About', href: '#about', icon: User },
    { title: 'Experience', href: '#experience', icon: Briefcase },
    { title: 'Skills', href: '#skills', icon: Code },
    { title: 'Learning', href: '#learning', icon: Sparkles },
    { title: 'Contact', href: '#contact', icon: MessageSquare },
  ];

  const currentLinks = isJava ? javaLinks : instLinks;

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1 * i + 0.3, duration: 0.5, ease: "easeOut" }
    }),
    hover: { 
      scale: 1.05, 
      color: isJava ? '#a855f7' : '#2563eb',
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    hover: { 
      scale: 1.05, 
      color: isJava ? '#a855f7' : '#2563eb', // purple for Java, blue for Instrumentation
      textShadow: isJava ? "0px 0px 8px rgba(168, 85, 247, 0.6)" : "0px 0px 8px rgba(37, 99, 235, 0.4)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isJava 
          ? 'bg-[#1a0f3f]/80 border-b border-white/5 shadow-2xl' 
          : 'bg-white/80 border-b border-slate-200/60 shadow-md'
      } backdrop-blur-xl`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-16 lg:px-24">
        {/* Logo - Plain TS */}
        <motion.div 
          variants={logoVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="flex items-center cursor-pointer"
        >
          <span className={`font-display font-bold text-3xl tracking-tighter transition-colors duration-300 ${
            isJava ? 'text-white' : 'text-blue-600'
          }`}>
            TS
          </span>
        </motion.div>

        {/* Desktop Navigation - Plain text & Switcher */}
        <nav className="hidden lg:flex items-center gap-10">
          {currentLinks.map((link, idx) => (
            <motion.a
              key={link.title}
              href={link.href}
              custom={idx}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className={`text-base font-bold transition-all tracking-wide ${
                isJava ? 'text-white' : 'text-slate-700'
              }`}
            >
              {link.title}
            </motion.a>
          ))}

          {/* Desktop Switcher */}
          <div className={`relative rounded-full p-1 flex items-center gap-1 transition-all duration-300 isolate ${
            isJava ? 'bg-[#0b0817]/80 border border-purple-500/20 shadow-inner' : 'bg-blue-50/80 border border-blue-200/80 shadow-inner'
          }`}>
            <button 
              onClick={() => setActiveCareer('java')}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer select-none ${
                isJava ? 'text-white' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {isJava && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10 shadow-[0_0_12px_rgba(168,85,247,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-1.5"><Code size={14} /> Java Dev</span>
            </button>
            <button 
              onClick={() => setActiveCareer('instrumentation')}
              className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer select-none ${
                !isJava ? 'text-white' : 'text-purple-300/70 hover:text-purple-100'
              }`}
            >
              {!isJava && (
                <motion.div 
                  layoutId="activeTab" 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -z-10 shadow-[0_0_12px_rgba(37,99,235,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-1.5"><Sparkles size={14} /> Instrumentation</span>
            </button>
          </div>
        </nav>

        {/* Mobile Toggle and Switcher */}
        <div className="lg:hidden flex items-center gap-4">
          {/* Mobile Switcher */}
          <div className={`relative rounded-full p-0.5 flex items-center gap-0.5 transition-all duration-300 isolate ${
            isJava ? 'bg-[#0b0817]/80 border border-purple-500/20' : 'bg-blue-50/80 border border-blue-200/80'
          }`}>
            <button 
              onClick={() => setActiveCareer('java')}
              className={`relative px-3 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer select-none ${
                isJava ? 'text-white' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {isJava && (
                <motion.div 
                  layoutId="activeTabMobile" 
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-1"><Code size={11} /> Java</span>
            </button>
            <button 
              onClick={() => setActiveCareer('instrumentation')}
              className={`relative px-3 py-1 rounded-full text-[10px] font-bold transition-colors cursor-pointer select-none ${
                !isJava ? 'text-white' : 'text-purple-300/70 hover:text-purple-100'
              }`}
            >
              {!isJava && (
                <motion.div 
                  layoutId="activeTabMobile" 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="flex items-center gap-1"><Sparkles size={11} /> Inst.</span>
            </button>
          </div>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 transition-colors ${isJava ? 'text-white' : 'text-slate-800'}`}
          >
             <AnimatePresence mode="wait">
               {isOpen ? (
                 <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                   <X size={32} strokeWidth={2.5} />
                 </motion.div>
               ) : (
                 <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                   <Menu size={32} strokeWidth={2.5} />
                 </motion.div>
               )}
             </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu - Smooth Slide from Right */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed inset-0 lg:hidden z-[60] flex items-center justify-center ${
              isJava ? 'bg-[#050310]/98 backdrop-blur-3xl' : 'bg-slate-50/98 backdrop-blur-3xl'
            }`}
          >
            {/* Close Button Inside Mobile Menu */}
            <button 
              onClick={() => setIsOpen(false)}
              className={`absolute top-8 right-8 p-2 ${isJava ? 'text-white' : 'text-slate-800'}`}
            >
              <X size={32} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {currentLinks.map((link, idx) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                  className={`text-3xl font-extrabold flex items-center justify-center gap-4 group ${
                    isJava ? 'text-white hover:text-purple-400' : 'text-slate-800 hover:text-blue-600'
                  }`}
                >
                  <span className="group-hover:scale-125 transition-transform">
                    {link.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
