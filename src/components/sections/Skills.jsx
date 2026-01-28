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

const skills = {
  "Frontend": ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Redux", "Next.js"],
  "Backend": ["Node.js", "Express", "Python", "Java", "MongoDB", "SQL"],
  "Tools": ["Git/GitHub", "VS Code", "Docker", "Postman", "Figma", "Jira"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-400">My technical toolkit for building scalable applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-indigo-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-600 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-700 text-gray-200 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
