import React from 'react';
import { Brain, Code, Lightbulb, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Development",
      description: "Custom AI solutions, machine learning models, and intelligent systems tailored to your needs."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications using React, Python, and Java with focus on performance and user experience."
    },
    {
      icon: Lightbulb,
      title: "Project-Based Learning",
      description: "Structured learning programs focused on practical implementation and real-world applications."
    },
    {
      icon: PenTool,
      title: "Technical Writing",
      description: "Comprehensive documentation, magazine articles, and research papers on AI and technology."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;