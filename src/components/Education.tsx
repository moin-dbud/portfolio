import React, { useState } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const education = [
    {
      title: "Bachelor of Engineering",
      institution: "Wainganga College of Engineering and Management ",
      period: "September 2024 - Present",
      description: "Currently pursuing B.E. with focus on Computer Science and AI/ML technologies."
    },
    {
      title: "Higher Secondary School",
      institution: "Somayya Career Institute",
      period: "July 2023 - April 2024"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Machine Learning: AI/ML Services",
      issuer: "Infosys Springboard",
      date: "2024",
      imageUrl: "https://www.dropbox.com/scl/fi/7zlqaitqqksmsjrd2gujz/Screenshot-2025-02-01-110847.png?rlkey=s2iiqpvoroj47f1pxzgaksmfj&st=vbwqmhvc&dl=1"
    },
    {
      title: "The Complete Web Development Training Courses | Web Design Courses",
      issuer: "Infosys",
      date: "2024",
      imageUrl: "https://www.dropbox.com/scl/fi/tezuad9z9r8q60d8uep0f/Screenshot-2025-02-06-185539.png?rlkey=c18e9hwdbn2lm6ed1go9jxm4x&st=3tx0cdjg&dl=1"
    },
    {
      title: "Introduction to Generative AI on Azure",
      issuer: "Infosys",
      date: "2024",
      imageUrl: "https://www.dropbox.com/scl/fi/65eoi9nguapgxwvdrjydh/Screenshot-2025-02-01-111420.png?rlkey=r3zaprwuxf6s3hu5e5efy4eov&st=gemeay2c&dl=1"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="mt-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
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

export default Education;