/**
 * Copyright (c) 2026 Ashraf Morningstar
 * https://github.com/AshrafMorningstar
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">DevPortfolio</span>
            <p className="text-gray-400 text-sm mt-1">
              Building digital experiences with code.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Software Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
