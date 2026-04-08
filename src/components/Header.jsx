import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Code, User, MessageSquare } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home', icon: Home },
    { title: 'Projects', href: '#projects', icon: Briefcase },
    { title: 'Experience', href: '#experience', icon: User },
    { title: 'Skills', href: '#skills', icon: Code },
    { title: 'Contact', href: '#contact', icon: MessageSquare },
  ];

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
      color: '#a855f7',
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    hover: { 
      scale: 1.05, 
      color: '#a855f7',
      textShadow: "0px 0px 8px rgba(168, 85, 247, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-[#1a0f3f]/80 backdrop-blur-xl shadow-2xl border-b border-white/5"
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
          <span className="text-white font-display font-bold text-3xl tracking-tighter">
            TS
          </span>
        </motion.div>

        {/* Desktop Navigation - Plain text */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.title}
              href={link.href}
              custom={idx}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="text-base font-bold text-white transition-all tracking-wide"
            >
              {link.title}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Toggle with morphing icon */}
        <div className="lg:hidden flex items-center">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white transition-colors"
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
            className="fixed inset-0 lg:hidden bg-[#050310]/98 backdrop-blur-3xl z-[60] flex items-center justify-center"
          >
            {/* Close Button Inside Mobile Menu */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 p-2 text-white"
            >
              <X size={32} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.2 }}
                  className="text-3xl font-extrabold text-white flex items-center justify-center gap-4 group"
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
