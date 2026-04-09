import { motion } from 'framer-motion';

const timelineData = [
  {
    title: 'Software Developer',
    subtitle: 'Kanavu Startup Village',
    date: '2026-present',
    description: 'Developing web applications and modern web technologies.',
  },
  {
    title: 'Education',
    subtitle: "UG - Bachelor's Degree in Electronic and Instrumentation Engineering",
    company: 'Kumaraguru College of Technology,Coimbatore',
    university: 'Anna University',
    date: 'Graduated: 2025',
  },
  {
    title: 'Higher Secondary Education',
    subtitle: 'Computer Science',
    company: 'CBSE',
    university: 'Percentage-84%',
    date: 'Graduated: 2021',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative pt-32 pb-20 overflow-hidden font-sans">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #7c3aed 1.2px, transparent 1.2px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white inline-block relative"
          >
            Experience & Education
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto py-4">
          {/* The Center Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-1/2 z-0 hidden sm:block"></div>

          <div className="flex flex-col gap-12 md:gap-16 relative z-10">
            {timelineData.map((item, index) => {
              // Alternating placement: right, left, right...
              const isLeft = index % 2 !== 0; 
              
              return (
                <div key={index} className={`flex w-full ${isLeft ? 'sm:justify-start' : 'sm:justify-end'} justify-end relative`}>
                  
                  {/* The Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden sm:block absolute left-[30px] sm:left-1/2 top-10 w-4 h-4 rounded-full bg-secondary sm:-translate-x-1/2 -translate-x-1/2 shadow-[0_0_12px_rgba(139,92,246,0.8)] z-20"
                  ></motion.div>

                  {/* Card Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`w-full sm:w-[calc(100%-80px)] md:w-[calc(50%-48px)] group bg-[#1e1b2e]/50 rounded-2xl border border-white/5 p-5 md:p-6 shadow-xl hover:border-primary/50 transition-all duration-300 relative`}
                  >
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                    
                    <p className="text-slate-300 text-[14px] font-medium mb-1.5">{item.subtitle}</p>
                    
                    {item.company && (
                      <p className="text-slate-400 text-[13px] mb-0.5">{item.company}</p>
                    )}
                    
                    {item.university && (
                      <p className="text-slate-400 text-[13px] mb-1.5">{item.university}</p>
                    )}
                    
                    <p className="text-slate-400 text-[13px] mb-3 font-normal">{item.date}</p>
                    
                    {item.description && (
                      <p className="text-slate-400 text-[14px] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
