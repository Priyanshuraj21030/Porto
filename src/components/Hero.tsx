import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
  ChevronRight,
} from "lucide-react";
import { socialLinks } from "../data";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 bg-hero-pattern pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="text-left max-w-2xl md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frontend Developer | Full Stack Enthusiast
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
              Scalable & Performance-Driven
            </span>{" "}
            Web Applications
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I craft high-performance, user-friendly, and accessible digital
            experiences with modern web technologies. Specialized in React.js,
            Next.js, TypeScript, Tailwind CSS, and Node.js, I focus on creating
            scalable and maintainable applications that enhance user engagement.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-primary-600 font-medium mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Let's build something amazing together.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300 flex items-center"
            >
              Get in Touch
              <ChevronRight size={18} className="ml-1" />
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-200 hover:border-primary-300 hover:bg-primary-50 transition-all shadow-button hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = () => {
                switch (link.icon) {
                  case "github":
                    return <Github size={20} />;
                  case "linkedin":
                    return <Linkedin size={20} />;
                  case "twitter":
                    return <Twitter size={20} />;
                  case "mail":
                    return <Mail size={20} />;
                  default:
                    return null;
                }
              };

              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors p-2 bg-white rounded-full shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.4, 0.7],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2,
              }}
            />

            {/* Profile image with animated container */}
            <motion.div
              className="relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500 p-1 rounded-full shadow-lg"
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
                <img
                  src="image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
        >
          <a
            href="#about"
            className="text-primary-500 hover:text-primary-600 transition-colors p-2 bg-white rounded-full shadow-md"
          >
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
