import { motion } from 'framer-motion';
import { Download, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const titles = ["Java Enthusiast", "Full Stack Developer"];
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const full = titles[i];
      
      setText(isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 80 : 120);

      if (!isDeleting && text === full) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const codeContent = `// Welcome to my portfolio!
public class AboutMe {
    private String name = "Thamarai Selvan";
    private String role = "Full Stack Developer";
    private String[] skills = {"Java", "Spring Boot",
"Hibernate", "REST APIs"};

    public String greet() {
        return String.format("Hello! I'm %s,%n" +
            "a %s with expertise in%n" +
            "%s development.",
            name, role, String.join(", ", skills));
    }
}`;

  // Simple Highlighting Function
  const highlightCode = (line) => {
    // Single-pass regex for all tokens to avoid double-highlighting
    const patterns = [
      { name: 'comment', regex: /(\/\/.*)/, class: 'text-slate-500 italic' },
      { name: 'string', regex: /(".*?")/, class: 'text-accent' },
      { name: 'keyword', regex: /\b(public|class|private|String|void|return|new|static|final)\b/, class: 'text-secondary font-bold' }
    ];

    const combinedRegex = new RegExp(patterns.map(p => p.regex.source).join('|'), 'g');

    return line.replace(combinedRegex, (match) => {
      if (match.startsWith('//')) return `<span class="text-slate-500 italic">${match}</span>`;
      if (match.startsWith('"')) return `<span class="text-accent">${match}</span>`;
      return `<span class="text-secondary font-bold">${match}</span>`;
    });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #7c3aed 1.2px, transparent 1.2px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-[1250px] mx-auto px-10 lg:px-20 grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        {/* Left Content - Reduced Sizes */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-white leading-tight">
              Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Thamarai Selvan</span>
            </h1>
            
            <div className="h-10 flex items-center">
              <p className="text-xl lg:text-2xl font-display font-semibold text-slate-300">
                {text}
                <span className="w-0.5 h-6 bg-primary ml-1 inline-block animate-pulse"></span>
              </p>
            </div>

            <p className="text-base text-slate-400 max-w-lg leading-relaxed font-medium">
              Entry-level developer recognized for quickly learning new technologies and proactively developing innovative solutions to solve project challenges. I am dedicated to producing reliable, maintainable code.
            </p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button className="group relative px-7 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-bold text-base flex items-center gap-2 overflow-hidden shadow-[0_0_15px_rgba(124,58,237,0.2)] hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all active:scale-95">
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">DOWNLOAD RESUME</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Reduced Coder Size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative group w-full max-w-lg">
            {/* Ambient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0b0817] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
              {/* Toolbar */}
              <div className="bg-white/[0.03] px-5 py-3 flex items-center justify-between border-b border-white/5">
                <div className="flex gap-2 text-slate-400 font-mono text-xs items-center">
                  <div className="flex gap-1.5 mr-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/60 transition-colors group-hover:bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/60 transition-colors group-hover:bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/60 transition-colors group-hover:bg-emerald-500/80"></div>
                  </div>
                  <Terminal size={12} className="opacity-50" />
                  <span className="opacity-80">AboutMe.java</span>
                </div>
              </div>

              {/* Code Area - Reduced Height and Text Size */}
              <div className="p-6 max-h-[340px] overflow-y-auto overflow-x-hidden custom-scrollbar font-mono text-xs xl:text-sm leading-relaxed bg-black/20">
                <pre className="whitespace-pre-wrap break-words">
                  {codeContent.split('\n').map((line, i) => (
                    <div key={i} className="flex gap-4 group/line">
                      <span className="w-4 text-slate-700 text-right select-none group-hover/line:text-slate-500 transition-colors">{i + 1}</span>
                      <code className="text-slate-300" dangerouslySetInnerHTML={{ __html: highlightCode(line) }} />
                    </div>
                  ))}
                </pre>
              </div>

              {/* Bottom Status Bar */}
              <div className="bg-white/[0.03] px-5 py-2 flex items-center justify-between border-t border-white/5 text-[9px] uppercase font-bold tracking-widest text-slate-600">
                <span>UTF-8</span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/10 text-primary/80 border border-primary/10">
                  JAVA
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
