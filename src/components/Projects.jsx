import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';


const GithubIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    title: "Portfolio Website",
    description: "Architected and developed a high-end portfolio using React and Vite. Implemented responsive design patterns, glassmorphic UI modules, and optimized animations. Focused on performance, modern CSS architecture, and clean component modularity.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    live: "#",
    github: "#"
  },
  {
    title: "Food Delivery Application",
    description: "Developed a Java-based Food Delivery Application using Servlets, JSP, JDBC, and MySQL following MVC architecture. Features restaurant listing, menu display, and session-based cart management. Engineered relational database schemas and server-side logic for performant data retrieval.",
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "MVC"],
    image: "/food-delivery-app.png",
    live: "#",
    github: "https://github.com/Thamaraiselvanab/FoodDeliveryApplication.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #7c3aed 1.2px, transparent 1.2px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-6xl mx-auto px-10 lg:px-20 relative z-10 font-sans">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white inline-block relative"
          >
            My Projects
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#1e1b2e]/50 rounded-2xl border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative aspect-[2.4/1] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1b2e] to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm font-normal leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white/5 rounded-full text-[12px] font-medium text-slate-300 border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-6 pt-3 border-t border-white/5">
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-xs font-medium text-primary hover:text-accent transition-colors group/link"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                    <span className="block translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group/link"
                  >
                    <GithubIcon size={14} />
                    <span>View Code</span>
                    <span className="block translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
