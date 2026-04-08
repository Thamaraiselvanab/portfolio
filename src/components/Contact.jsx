import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
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

  return (
    <section id="contact" className="relative pt-32 pb-24 overflow-hidden font-sans">
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
            Get In Touch
            <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-10 md:pt-10"
          >
            {/* Email */}
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-secondary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">Email</h3>
                <a href="mailto:thamaraiselvanab@gmail.com" className="text-slate-400 text-[15px] font-medium hover:text-primary transition-colors">
                  thamaraiselvanab@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-5 group">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-secondary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">Phone</h3>
                <a href="tel:+917639529193" className="text-slate-400 text-[15px] font-medium hover:text-primary transition-colors">
                  +91 7639529193
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-[#1e1b2e]/60 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* FormSubmit Config */}
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="flex flex-col gap-1.5">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <input 
                  type="text" 
                  name="_subject"
                  placeholder="Subject" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-3.5 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-primary/60 focus:bg-white/10 transition-all resize-none custom-scrollbar"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-max px-8 py-3.5 rounded-full bg-secondary hover:bg-primary text-white font-bold text-sm tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(139,92,246,0.2)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm mt-1 font-medium tracking-wide">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm mt-1 font-medium tracking-wide">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
