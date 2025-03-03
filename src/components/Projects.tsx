import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Code, Layers } from "lucide-react";
import { projects, mainTags } from "../data";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<string>("all");

  // Filter projects based on selected tag
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              My Work
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Projects
              </span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mb-8"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>

            {/* Filter buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === "all"
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Projects
              </button>
              {mainTags.map((tag) => (
                <button
                  key={tag.name}
                  onClick={() => setFilter(tag.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    filter === tag.name
                      ? "bg-primary-600 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 group"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex justify-end space-x-3">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-2 rounded-full hover:bg-primary-50 transition-colors shadow-md"
                              aria-label="View GitHub repository"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={20} className="text-primary-600" />
                            </motion.a>
                          )}
                          {project.link && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-white p-2 rounded-full hover:bg-primary-50 transition-colors shadow-md"
                              aria-label="Visit live site"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink
                                size={20}
                                className="text-primary-600"
                              />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary-100 rounded-lg mr-3">
                        <Code size={18} className="text-primary-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/Priyanshuraj21030?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              <Github size={20} className="mr-2" />
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
