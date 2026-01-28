/**
 * Copyright (c) 2026 Ashraf Morningstar
 * https://github.com/AshrafMorningstar
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
            Available for Freelance & Full-time
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 tracking-tight">
            Building Digital <br/>
            <span className="text-indigo-500">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Hi, I'm a Junior Software Developer at Wipro. I build accessible, 
            pixel-perfect, and performant web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center"
            >
              View Projects <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all border border-slate-700 flex items-center"
            >
              Download CV <Download className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
