import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ activeCareer }) => {
  const currentYear = new Date().getFullYear();
  const isJava = activeCareer === 'java';

  return (
    <footer className={`py-8 border-t relative z-10 font-sans transition-colors duration-300 ${
      isJava ? 'border-white/5 bg-transparent' : 'border-slate-200/80 bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
          isJava ? 'text-slate-400' : 'text-slate-500'
        }`}>
          © {currentYear} Thamaraiselvan. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Thamaraiselvanab" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 hover:-translate-y-1 ${
              isJava ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`transition-all duration-300 hover:-translate-y-1 ${
              isJava ? 'text-slate-400 hover:text-[#0A66C2]' : 'text-slate-500 hover:text-[#0A66C2]'
            }`}
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="mailto:thamaraiselvanab@gmail.com" 
            className={`transition-all duration-300 hover:-translate-y-1 ${
              isJava ? 'text-slate-400 hover:text-primary' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
