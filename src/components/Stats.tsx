import React from 'react';
import { Code2, Award, BookOpen, Briefcase } from 'lucide-react';

const Stats = () => {
  const stats = [
    { icon: Code2, label: 'Projects', value: '15+' },
    { icon: Briefcase, label: 'Internships', value: '1 and Ongoing' },
    { icon: Award, label: 'Certifications', value: '5+' },
    { icon: BookOpen, label: 'Technologies', value: '10+' },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <Icon className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;