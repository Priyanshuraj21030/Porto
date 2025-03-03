import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { experiences } from '../data';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-50 rounded-tr-full opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              My Journey
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold font-heading mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Professional <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">Experience</span>
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-300 via-secondary-300 to-accent-300"
              initial={{ height: 0 }}
              animate={inView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative mb-16 md:mb-24 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-auto md:mr-0' : 'md:pl-16 md:ml-0 md:mr-auto'
                } md:w-1/2 pl-12 md:pl-0`}
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 md:left-auto md:right-0 top-0 w-10 h-10 bg-white rounded-full border-4 border-primary-500 shadow-md flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <Briefcase size={16} className="text-primary-600" />
                </motion.div>

                {/* Content */}
                <motion.div 
                  className="bg-white p-6 md:p-8 rounded-xl shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                  
                  <div className={`flex items-center mb-4 text-gray-600 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <Building size={14} className="mr-1" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  
                  <ul className={`text-gray-600 mb-5 space-y-3 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;