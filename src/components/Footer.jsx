import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 relative z-10 font-sans">
      <div className="max-w-6xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-slate-400 text-sm font-medium tracking-wide">
          © {currentYear} Thamaraiselvan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Thamaraiselvanab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-[#0A66C2] hover:-translate-y-1 transition-all duration-300"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:thamaraiselvanab@gmail.com" 
            className="text-slate-400 hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
