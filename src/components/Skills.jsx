import { motion } from 'framer-motion';
import { 
  FileCode2, 
  Palette, 
  Code2, 
  Atom, 
  Coffee, 
  Database, 
  Plug, 
  Server, 
  Cloud, 
  GitBranch,
  Terminal,
  Blocks
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FileCode2 },
      { name: 'CSS3', icon: Palette },
      { name: 'JavaScript', icon: Code2 },
      { name: 'React', icon: Atom },
      { name: 'Tailwind CSS', icon: Palette },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java', icon: Coffee },
      { name: 'MySQL', icon: Database },
      { name: 'JDBC', icon: Plug },
      { name: 'Spring Boot', icon: Server },
      { name: 'REST APIs', icon: Blocks },
    ]
  },
  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', icon: Cloud },
      { name: 'Git / GitHub', icon: GitBranch },
      { name: 'Linux', icon: Terminal },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative pt-32 pb-20 overflow-hidden font-sans">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #7c3aed 1.2px, transparent 1.2px)', 
             backgroundSize: '32px 32px' 
           }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-extrabold text-white inline-block relative"
          >
            Technical Skills
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#1e1b2e]/50 rounded-2xl border border-white/5 p-7 shadow-xl hover:border-primary/50 transition-colors duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                <div className="w-12 h-0.5 bg-secondary"></div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3.5 py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                    >
                      <Icon size={16} className="text-secondary" />
                      <span className="text-[13px] font-medium text-slate-200">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
