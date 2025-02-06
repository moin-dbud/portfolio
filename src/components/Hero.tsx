import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Download, Send } from 'lucide-react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['AI Engineer', 'ML Enthusiast', 'Web Developer', 'Problem Solver'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-10 dark:opacity-20" />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-8 rounded-full overflow-hidden ring-4 ring-blue-600 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 shadow-xl">
            <img
              src="https://i.postimg.cc/nzW9Cq2Z/1738347034887.jpg"
              alt="Moin Sheikh"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Moin Sheikh
          </h1>
          
          <div className="h-8 mb-6">
            <span ref={el} className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300" />
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about building intelligent systems and scalable web solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.dropbox.com/scl/fi/bgekq4ofdx1z9w0toshon/Moin_Sheikh_Resume.pdf?rlkey=lnayc3rdjn14t3czei0id6x04&st=9vqx2dmx&dl=1"
              target="_blank"
              className="px-8 py-3 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Send size={20} />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;