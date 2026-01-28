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
import { Clock } from 'lucide-react';
import blogData from '../data/blog.json';
import SEO from '../components/common/SEO';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | Junior Software Developer" 
        description="Articles and tutorials on Web Development, React, and Software Engineering."
        type="website"
        name="@username"
      />
      
      <div className="pt-24 pb-20 bg-slate-900 min-h-screen font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sharing my journey, tutorials, and thoughts on technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-xs text-indigo-400 mb-3 space-x-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-indigo-400 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-white text-sm font-medium hover:text-indigo-400 transition-colors">
                    Read More →
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
