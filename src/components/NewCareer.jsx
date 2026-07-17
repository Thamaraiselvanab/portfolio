import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Sliders, Cpu, Workflow, Wrench, 
  CheckCircle, Zap, BookOpen, GraduationCap, 
  Award, Activity, Compass, Info, Mail, Phone, Send
} from 'lucide-react';

const NewCareer = () => {
  const [valvePower, setValvePower] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://formsubmit.co/ajax/thamaraiselvanab@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });
      const data = await res.json();
      
      if (data.success === "true" || data.success === true || res.ok) {
        setSubmitStatus("success");
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Technical Skills Data
  const industrialProducts = [
    'ASCO Solenoid Valves',
    'Pneumatic Components',
    'Valve Spare Kits',
    'Industrial Valve Testing'
  ];

  const engineeringSkills = [
    'Product Testing',
    'Mechanical Assembly',
    'Troubleshooting',
    'Root Cause Analysis (RCA)',
    'Technical Documentation'
  ];

  // Emerson Primary Responsibilities
  const responsibilities = [
    'Testing ASCO solenoid valves for optimal pressure and sealing parameters.',
    'Precision assembly and reassembly of complex electromagnetic valves.',
    'Replacement of valve spare kits and structural calibration.',
    'Root Cause Analysis (RCA) on failed field products to find design/manufacturing flaws.',
    'Preparation of detailed technical service documentation and quality inspection logs.',
    'Comprehensive product inspection and safety verification prior to shipping.'
  ];

  // Training Data
  const trainingCourses = [
    { title: 'Site Classification Basics', desc: 'Understanding hazardous areas, environmental ratings, and safety zones for industrial settings.' },
    { title: 'Customer Interaction & Professional Communication', desc: 'Developing technical support skills and articulating engineering details to clients.' },
    { title: 'Product Catalog Number Codification', desc: 'Mastering the decoding of complex ASCO product identifiers to verify product attributes.' },
    { title: 'Product Selection based on Customer Requirements', desc: 'Mapping process conditions (fluid, pressure, temperature) to correct valve models.' }
  ];

  // Articles in Learning Journey
  const learningArticles = [
    {
      title: 'Solenoid Valve Dynamics & Troubleshooting',
      category: 'Product Insights',
      desc: 'An in-depth look at how electromagnetic coils actuate plungers, common fail-modes like coil burn-outs, debris clogging, and how to calibrate fluid flow.'
    },
    {
      title: 'Root Cause Analysis (RCA) in Emerson Systems',
      category: 'Methodology',
      desc: 'Using the 5-Whys framework and fishbone diagrams to trace leakage, pressure drops, and electrical failures back to specific physical phenomena.'
    },
    {
      title: 'Site Classification & Hazardous Environments',
      category: 'Industrial Standards',
      desc: 'Decoding ATEX, IECEx, and NEMA classification codes to select correct enclosure types for solenoid valves in explosive or corrosive atmospheres.'
    }
  ];

  return (
    <div id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden font-sans bg-slate-50 text-slate-800">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
             backgroundSize: '24px 24px' 
           }}>
      </div>

      {/* Floating Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16 relative z-10 space-y-16">
        
        {/* ================= HERO SECTION ================= */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-semibold tracking-wide mb-4">
                <Sparkles size={16} className="text-blue-500" />
                <span>SERVICE ENGINEER @ EMERSON</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 leading-tight">
                Thamarai Selvan
              </h1>
              <p className="text-xl lg:text-2xl font-semibold text-blue-600 mt-2">
                Electronics & Instrumentation Engineer
              </p>
              <p className="text-base lg:text-lg text-slate-600 max-w-xl mt-4 leading-relaxed font-medium">
                Specializing in **ASCO Solenoid Valve Products**. Experienced in product testing, troubleshooting, root cause analysis, and mechanical assemblies in high-precision industrial automation settings.
              </p>
            </motion.div>
          </div>

          {/* Interactive Valve Simulator Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-slate-200 shadow-xl rounded-3xl p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                  <Activity size={16} className="text-blue-500" />
                  ASCO Solenoid Valve Simulation
                </h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Calibration Bench Unit</p>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${valvePower ? 'bg-emerald-500 animate-ping' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {valvePower ? 'Coil Energized' : 'De-energized'}
                </span>
              </div>
            </div>

            {/* Valve Graphic Display */}
            <div className="h-44 bg-slate-900 rounded-2xl relative overflow-hidden border border-slate-950 flex flex-col justify-center items-center shadow-inner">
              
              {/* Particle flow */}
              <div className="absolute left-0 right-0 h-4 bg-blue-950 border-y border-blue-900/50 flex items-center overflow-hidden" style={{ top: '65%' }}>
                {/* Background flow pipe */}
                <div className="w-full h-full bg-blue-950/40 relative">
                  {/* Flow arrows */}
                  {valvePower && [0, 1, 2, 3, 4, 5].map((idx) => (
                    <motion.div
                      key={idx}
                      className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      animate={{
                        x: [-10, 420],
                        opacity: [0, 1, 1, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        delay: idx * 0.25,
                        ease: "linear"
                      }}
                      style={{ top: '20%' }}
                    />
                  ))}
                  {!valvePower && (
                    <div className="text-[9px] font-bold text-slate-600 w-full text-center py-0.5 uppercase tracking-widest">
                      Flow Blocked
                    </div>
                  )}
                </div>
              </div>

              {/* Solenoid Coil Body */}
              <div className="w-20 h-16 bg-slate-700 rounded-md border border-slate-600 flex flex-col justify-center items-center relative z-10 -translate-y-4">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">ASCO COIL</span>
                {/* Magnetic field rings when energized */}
                {valvePower ? (
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute inset-0 bg-blue-500/20 rounded-md border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  />
                ) : null}
                <div className={`w-3 h-3 rounded-full mt-1.5 flex items-center justify-center ${valvePower ? 'bg-blue-400 text-slate-900 shadow-glow' : 'bg-slate-500 text-slate-300'}`}>
                  <Zap size={8} className="fill-current" />
                </div>
              </div>

              {/* Solenoid Plunger (Moving armature) */}
              <motion.div 
                animate={valvePower ? { y: -16 } : { y: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-4 h-12 bg-slate-400 border border-slate-500 rounded-b-sm absolute z-10"
                style={{ top: '33%' }}
              />

              {/* Valve Body Chamber */}
              <div className="w-28 h-10 bg-slate-800 border border-slate-700 rounded-sm absolute z-0" style={{ top: '56%' }} />
              {/* Inlet/Outlet connections */}
              <div className="w-36 h-6 bg-slate-800 border-y border-slate-700 absolute z-0" style={{ top: '61%' }} />
            </div>

            {/* Controls and Gauges */}
            <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-slate-100 text-center">
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Voltage</span>
                <span className={`text-xs font-extrabold transition-colors duration-300 ${valvePower ? 'text-blue-600' : 'text-slate-500'}`}>
                  {valvePower ? '24 VDC' : '0.0 V'}
                </span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Inlet Pressure</span>
                <span className="text-xs font-extrabold text-slate-700">4.5 Bar</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-xl">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">Flow Rate</span>
                <span className={`text-xs font-extrabold transition-colors duration-300 ${valvePower ? 'text-blue-600' : 'text-slate-500'}`}>
                  {valvePower ? '128 LPM' : '0.0 LPM'}
                </span>
              </div>
            </div>

            <button 
              onClick={() => setValvePower(!valvePower)}
              className={`w-full mt-4 py-2.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 ${
                valvePower 
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-200' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
              }`}
            >
              <Zap size={16} />
              {valvePower ? 'DE-ENERGIZE COIL' : 'ENERGIZE COIL (24V)'}
            </button>
          </motion.div>
        </div>

        {/* ================= ABOUT ME & CAREER VISION ================= */}
        <div id="about" className="grid md:grid-cols-2 gap-8 scroll-mt-28">
          {/* About Me Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <GraduationCap className="text-blue-600" />
              About Me
            </h3>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
            <p className="text-slate-600 leading-relaxed font-medium">
              I am an Electronics and Instrumentation Engineer currently working as a <strong>Service Engineer with Emerson</strong>, specializing in ASCO solenoid valve products. My role focuses on product testing, assembly, troubleshooting, documentation, and root cause analysis for industrial automation applications.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mt-4">
              I am passionate about industrial instrumentation and continuously expand my technical knowledge through hands-on experience, product training, and self-learning. My goal is to build expertise in industrial automation while progressing toward advanced engineering roles.
            </p>
          </motion.div>

          {/* Career Vision Card */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md hover:shadow-lg transition-all text-left"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Compass className="text-blue-600" />
              Career Vision
            </h3>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-4"></div>
            <p className="text-slate-600 leading-relaxed font-medium">
              My long-term objective is to become a highly skilled instrumentation professional with expertise in industrial automation and process control, creating value through technical problem-solving and engineering solutions.
            </p>
            <p className="text-slate-600 leading-relaxed font-medium mt-4">
              I am particularly interested in career opportunities that combine strong technical knowledge with customer-focused engineering, such as:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                <span className="text-xs font-extrabold text-blue-600 uppercase block tracking-wide">Application</span>
                <span className="text-[10px] font-bold text-slate-500">Engineering</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                <span className="text-xs font-extrabold text-blue-600 uppercase block tracking-wide">Technical Sales</span>
                <span className="text-[10px] font-bold text-slate-500">Engineering</span>
              </div>
              <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                <span className="text-xs font-extrabold text-blue-600 uppercase block tracking-wide">Commissioning</span>
                <span className="text-[10px] font-bold text-slate-500">Engineering</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= EMERSON ROLE & TRAINING ================= */}
        <div id="experience" className="grid lg:grid-cols-12 gap-8 text-left scroll-mt-28">
          
          {/* Current Role Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-extrabold text-blue-600 tracking-widest uppercase">Current Role</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Service Engineer</h3>
              </div>
              <div className="px-3 py-1.5 bg-slate-900 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Emerson (ASCO Products)
              </div>
            </div>

            <h4 className="text-sm font-extrabold text-slate-400 uppercase tracking-widest mb-4">Primary Responsibilities</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {responsibilities.map((resp, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-3 bg-slate-50/50 p-4 rounded-xl border border-slate-100"
                >
                  <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">{resp}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emerson Internal Training */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-8 shadow-md flex flex-col justify-between">
            <div>
              <div className="mb-6 border-b border-slate-100 pb-5">
                <span className="text-xs font-extrabold text-blue-600 tracking-widest uppercase">Internal Qualifications</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1 flex items-center gap-2">
                  <Award className="text-blue-600" />
                  Professional Training
                </h3>
              </div>

              <div className="space-y-4">
                {trainingCourses.map((course, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 font-display">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{course.title}</h4>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed">{course.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-[11px] font-bold text-blue-700/80 leading-relaxed flex items-start gap-2.5">
              <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
              <span>Certified under Emerson Quality Assurance standards for solenoid valve diagnostics, customer coordination, and industrial classification frameworks.</span>
            </div>
          </div>

        </div>

        {/* ================= TECHNICAL SKILLS ================= */}
        <div id="skills" className="space-y-6 text-left scroll-mt-28">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-900 inline-block relative">
              Technical Core Skills
              <div className="absolute -bottom-2.5 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-4">
            {/* Industrial Products */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sliders className="text-blue-600" size={18} />
                Industrial Products
              </h4>
              <div className="w-8 h-0.5 bg-blue-500 rounded-full mb-6" />

              <div className="grid sm:grid-cols-2 gap-3">
                {industrialProducts.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Engineering Skills */}
            <motion.div 
              whileHover={{ y: -2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-md"
            >
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Wrench className="text-blue-600" size={18} />
                Engineering Skills
              </h4>
              <div className="w-8 h-0.5 bg-blue-500 rounded-full mb-6" />

              <div className="grid sm:grid-cols-2 gap-3">
                {engineeringSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-bold text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ================= LEARNING JOURNEY ================= */}
        <div id="learning" className="space-y-6 scroll-mt-28">
          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-slate-900 inline-block relative">
              Learning Journey
              <div className="absolute -bottom-2.5 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
            </h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">Continuous Professional Development</p>
          </div>

          <p className="text-slate-600 max-w-2xl mx-auto text-center leading-relaxed font-medium">
            This section documents my continuous learning as I gain experience in industrial instrumentation. Each entry summarizes a concept, product, troubleshooting method, or engineering lesson learned during my professional development.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4 text-left">
            {learningArticles.map((article, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-widest px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100">
                      {article.category}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400">ARTICLE #{idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-800 mb-2 leading-snug">{article.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{article.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-bold text-blue-600 uppercase tracking-wider cursor-pointer hover:text-blue-700 transition-colors">
                  <BookOpen size={12} />
                  <span>Read Article summary</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="relative pt-12 pb-16 overflow-hidden font-sans scroll-mt-28">
          {/* Background Dots - Light Theme */}
          <div className="absolute inset-0 z-0 opacity-5" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle, #3b82f6 1.2px, transparent 1.2px)', 
                 backgroundSize: '32px 32px' 
               }}>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-extrabold text-slate-900 inline-block relative">
                Get In Touch
                <div className="absolute -bottom-2.5 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-start text-left">
              {/* Left Side - Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col gap-8 md:pt-6"
              >
                {/* Email */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1 tracking-wide">Email</h4>
                    <a href="mailto:thamaraiselvanab@gmail.com" className="text-slate-600 text-sm font-semibold hover:text-blue-600 transition-colors">
                      thamaraiselvanab@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-blue-600 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1 tracking-wide">Phone</h4>
                    <a href="tel:+917639529193" className="text-slate-600 text-sm font-semibold hover:text-blue-600 transition-colors">
                      +91 7639529193
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Form */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg"
              >
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-4">
                  {/* FormSubmit Config */}
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="flex flex-col gap-1">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 text-xs font-bold placeholder:text-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 text-xs font-bold placeholder:text-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <input 
                      type="text" 
                      name="_subject"
                      placeholder="Subject" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 text-xs font-bold placeholder:text-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1 mb-2">
                    <textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3.5 text-slate-800 text-xs font-bold placeholder:text-slate-400 focus:outline-none focus:border-blue-500/60 focus:bg-white transition-all resize-none custom-scrollbar"
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-max px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_12px_rgba(37,99,235,0.2)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                  </button>

                  {submitStatus === 'success' && (
                    <p className="text-emerald-600 text-xs mt-1 font-bold tracking-wide">
                      Message sent successfully!
                    </p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-rose-600 text-xs mt-1 font-bold tracking-wide">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default NewCareer;
