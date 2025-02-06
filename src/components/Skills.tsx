import React from 'react';
import { Code2, Database, Terminal, Wrench, Megaphone, Users, Palette, PenTool as Tool } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "C"],
      level: 90
    },
    {
      icon: Database,
      title: "AI/ML Frameworks",
      skills: ["OpenAI API", "Langflow", "DataStax"],
      level: 85
    },
    {
      icon: Terminal,
      title: "Web Technologies",
      skills: ["React.js", "HTML", "CSS", "JavaScript"],
      level: 88
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["AWS", "Azure", "GitHub"],
      level: 82
    }
  ];

  const specialSkills = [
    {
      icon: Megaphone,
      title: "Public Speaking",
      description: "University-level magazine competition and ideathon participation"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experience with Entrepreneur-cell IIT Kharagpur"
    },
    {
      icon: Code2,
      title: "Problem Solving",
      description: "Effective problem-solving with innovative, practical solutions."
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="relative pt-1">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${category.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Skills */}
        <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Special Skills
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {specialSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;