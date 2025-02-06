import React, { useState } from 'react';
import { Briefcase, Calendar, Trophy, Users } from 'lucide-react';

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const experiences = [
    {
      title: "AI Intern",
      company: "CodSoft",
      period: "Nov 2024 - Dec 2024",
      description: "Developed a Rule-Based Chatbot system as part of the internship program.",
      icon: Briefcase,
      certificate: {
        title: "CodSoft Internship Certificate",
        imageUrl: "https://www.dropbox.com/scl/fi/cc8njsvs3awfru24ri3uy/Screenshot-2025-02-01-110800.png?rlkey=oyv9suslrtf85dmbdc6xrvqee&st=7dgaqgzq&dl=1"
      }
    },
    {
      title: "AI Workshop Participant",
      company: "NxtWave",
      period: "Jan 2025",
      description: "Created multiple projects utilizing OpenAI API and modern AI technologies.",
      icon: Users,
      certificate: {
        title: "NxtWave Workshop Certificate",
        imageUrl: "https://www.dropbox.com/scl/fi/9t24afzskzhmtmixbztfw/Screenshot-2025-02-01-111238.png?rlkey=gf20yu3b4u8c756m3t1z24mxk&st=tw26agx8&dl=1"
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-10 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800" />
              )}
              
              <div className="relative">
                <div className="absolute -left-8 mt-1.5 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <exp.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-3">
                    {exp.description}
                  </p>
                  {exp.certificate && (
                    <button
                      onClick={() => setSelectedCert(exp.certificate)}
                      className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedCert.title}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ×
              </button>
            </div>
            <img
              src={selectedCert.imageUrl}
              alt={selectedCert.title}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;