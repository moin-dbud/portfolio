import React from 'react';
import { FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="AI Developer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As an AI and ML student with a passion for web development, I'm dedicated to pushing the boundaries of what's possible in technology. My journey combines the analytical depth of artificial intelligence with the creative aspects of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I thrive on solving complex problems and working collaboratively in team environments. My approach combines technical expertise with creative problem-solving, always aiming to deliver innovative solutions that make a real impact.
            </p>
            <a
              href="https://www.dropbox.com/scl/fi/bgekq4ofdx1z9w0toshon/Moin_Sheikh_Resume.pdf?rlkey=lnayc3rdjn14t3czei0id6x04&dl=1"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;