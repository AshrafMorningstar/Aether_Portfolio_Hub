/**
 * Copyright (c) 2026 Ashraf Morningstar
 * https://github.com/AshrafMorningstar
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-colors duration-300 shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 h-12 overflow-hidden">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, index) => (
            <span key={index} className="px-2 py-1 bg-slate-700 text-indigo-400 text-xs rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4 mr-1" /> Code
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
