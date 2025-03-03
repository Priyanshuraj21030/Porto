import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "../data";
import {
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Palette,
  Cloud,
  GitBranch,
  Send,
} from "lucide-react";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skillIcons: Record<string, React.ReactNode> = {
    "React.js": <Layers size={20} />,
    TypeScript: <Code size={20} />,
    "Next.js": <Layers size={20} />,
    Python: <Code size={20} />,
    "Node.js": <Cpu size={20} />,
    MongoDB: <Database size={20} />,
    Firebase: <Database size={20} />,
    GitHub: <GitBranch size={20} />,
    "Tailwind CSS": <Palette size={20} />,
    Postman: <Send size={20} />,
    AWS: <Cloud size={20} />,
    "HTML/CSS": <Globe size={20} />,
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-50 rounded-tr-full opacity-50"></div>

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
              About Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              My Journey &{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Expertise
              </span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
                  <span className="bg-primary-100 p-2 rounded-lg mr-3">
                    <Code size={20} className="text-primary-600" />
                  </span>
                  Who I Am
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate Frontend Developer with expertise in building modern, scalable web applications. I specialize in React.js, Next.js, TypeScript, Node.js, and Python, crafting seamless and user-friendly digital experiences.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                My journey in web development started when I built my first project at 16. Since then, I've worked on various college and personal projects, honing my skills in JavaScript and Python technologies to develop high-performance applications.
                </p>
                <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me playing Valorant, watching football, or exploring new tech trends. I'm always eager to learn, innovate, and grow as a developer.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-card border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center">
                <span className="bg-primary-100 p-2 rounded-lg mr-3">
                  <Layers size={20} className="text-primary-600" />
                </span>
                My Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium flex items-center">
                        <span className="mr-2 text-primary-600">
                          {skillIcons[skill.name] || <Code size={20} />}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-gray-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
