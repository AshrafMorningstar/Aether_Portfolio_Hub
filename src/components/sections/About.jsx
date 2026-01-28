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
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    year: "Current",
    title: "Junior Software Developer",
    company: "Wipro",
    description: "Developing and maintaining enterprise web applications. Collaborating with cross-functional teams to deliver high-quality code.",
    icon: Briefcase
  },
  {
    year: "2023",
    title: "Software Engineering Intern",
    company: "Tech Solutions Inc.",
    description: "Assisted in frontend development using React. Implemented responsive designs and fixed bugs.",
    icon: Briefcase
  },
  {
    year: "2019 - 2023",
    title: "B.Tech in Computer Science",
    company: "University of Technology",
    description: "Graduated with First Class Distinction. Focused on Data Structures, Algorithms, and Web Development.",
    icon: GraduationCap
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate developer with a strong foundation in computer science principles. 
              My journey began in college where I discovered my love for problem-solving through code.
              Currently at Wipro, I apply my skills to real-world challenges, constantly learning and evolving.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <span className="block text-3xl font-bold text-indigo-500">2+</span>
                <span className="text-sm text-gray-500">Years Exp</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-indigo-500">50+</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-indigo-500">24/7</span>
                <span className="text-sm text-gray-500">Commitment</span>
              </div>
            </div>
          </motion.div>

          <div className="relative border-l border-slate-700 ml-3 md:ml-0 space-y-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute -left-[20px] top-0 p-2 bg-slate-900 border border-slate-700 rounded-full">
                  <item.icon className="w-4 h-4 text-indigo-500" />
                </div>
                <span className="text-sm text-indigo-400 font-mono mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-md text-gray-400 mb-2">{item.company}</h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
