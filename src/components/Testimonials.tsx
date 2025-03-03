import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30 dark:opacity-10"></div>

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
              className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Testimonials
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading mb-4 dark:text-white"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              What{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Clients Say
              </span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-card dark:shadow-2xl relative"
              >
                <div className="absolute top-6 left-6 text-primary-200 dark:text-primary-800 opacity-30">
                  <Quote size={80} />
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                  <motion.div
                    className="md:w-1/3 flex-shrink-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-md">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className="text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-6">
                      <h4 className="font-bold text-gray-800 dark:text-white text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[currentIndex].role},{" "}
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="md:w-2/3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 leading-relaxed">
                      "{testimonials[currentIndex].testimonial}"
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-10 space-x-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft
                  size={20}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.button>
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentIndex === index
                        ? "bg-gradient-to-r from-primary-500 to-secondary-500"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors border border-gray-100 dark:border-gray-700"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight
                  size={20}
                  className="text-primary-600 dark:text-primary-400"
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
