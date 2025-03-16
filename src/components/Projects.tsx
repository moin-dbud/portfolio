import React from 'react';
import { Bot, Camera, Laptop, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "Rule-Based Chatbot",
      description: "Developed during CodSoft internship, this chatbot uses advanced rule-based algorithms for natural conversations.",
      tags: ["Python", "NLP", "AI"],
      link: "https://github.com/moin-dbud/CodSoft-Intetnship/tree/main/Task1_Chatbot"
    },
    {
      icon: Camera,
      title: "Face Detection and Recognition",
      description: "A Face Detection and Recognition system built using Python, OpenCV, and deep learning frameworks.",
      tags: ["Open CV", "Caffe", "Python"],
      link: "https://github.com/moin-dbud/CodSoft-Intetnship/tree/main/Task_2"
    },
    {
      icon: Laptop,
      title: "Adaptive Learning Platform (In Progress)",
      description: "An innovative platform developed for Innovate India 2025 Ideathon, featuring personalized learning paths.",
      tags: ["React", "AI", "Education"],
      link: "https://adaptivescholar.free.nf/?i=1"
    },
    {
      icon: Cart,
      title: "Tech Gadgets E-Commerce Website",
      description: "This is a fully responsive Tech Gadgets E-Commerce Website built using HTML, Tailwind CSS, and JavaScript. The website offers a modern UI with dynamic product listings and smooth navigation for an enhanced user experience.",
      tags: ["HTML", "Tailwind CSS", "Javascript"],
      link: "https://techgadgetss.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                  <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
