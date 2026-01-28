/**
 * Copyright (c) 2026 Ashraf Morningstar
 * https://github.com/AshrafMorningstar
 * 
 * These are personal recreations of existing projects, developed for learning.
 * Original project concepts remain the intellectual property of their creators.
 * 
 * Licensed under the MIT License.
 */

import SEO from '../components/common/SEO';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import BlogPreview from '../components/sections/BlogPreview';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <SEO 
        title="Portfolio | Junior Software Developer"
        description="Portfolio of a Junior Software Developer at Wipro specializing in React and Modern Web Technologies."
        name="Ashraf" // Assuming User name or placeholder
        type="website"
      />
      
      <Hero />
      <Projects />
      <Skills />
      <About />
      <BlogPreview />
      <Contact />
    </>
  );
};

export default Home;
