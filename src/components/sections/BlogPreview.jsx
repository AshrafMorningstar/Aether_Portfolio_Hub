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
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blog.json';

const BlogPreview = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Articles</h2>
            <p className="text-gray-400">Thoughts, learnings, and insights from my dev journey.</p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="hidden md:flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="flex items-center text-xs text-indigo-400 mb-2 space-x-2">
                <span>{post.date}</span>
                <span>•</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
        
         <div className="mt-8 md:hidden text-center">
            <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
      </div>
    </section>
  );
};

export default BlogPreview;
