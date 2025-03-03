import React from "react";
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "../data";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            className="mb-10 flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => {
              const Icon = () => {
                switch (link.icon) {
                  case "github":
                    return <Github size={22} />;
                  case "linkedin":
                    return <Linkedin size={22} />;
                  case "twitter":
                    return <Twitter size={22} />;
                  case "mail":
                    return <Mail size={22} />;
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
                  className="text-gray-300 hover:text-white transition-colors p-2 bg-primary-800/50 rounded-full hover:bg-primary-700/50"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Icon />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="h-px w-12 bg-primary-700"></div>
              <p className="mx-4 text-primary-300 font-medium">Priyanshu Raj</p>
              <div className="h-px w-12 bg-primary-700"></div>
            </div>
            <p className="text-gray-300 mb-2 max-w-md mx-auto">
              Creating exceptional digital experiences with modern web
              technologies.
            </p>
            <p className="text-gray-400 text-sm flex items-center justify-center">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm flex items-center justify-center mb-6">
              Made with <Heart size={14} className="mx-1 text-red-500" />
            </p>

            <motion.button
              onClick={scrollToTop}
              className="bg-primary-800 p-3 rounded-full hover:bg-primary-700 transition-colors shadow-lg"
              aria-label="Scroll to top"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
