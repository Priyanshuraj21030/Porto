import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setSubmitError("Please complete the reCAPTCHA verification");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        "service_qqxvxwp",
        "template_t05eb2c",
        formRef.current!,
        "Yx3C1jtOFE_YCwh_v"
      );

      if (result.text === "OK") {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        recaptchaRef.current?.reset();

        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
      console.error("Email send error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-50 rounded-tr-full opacity-50"></div>

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
              Contact Me
            </motion.span>
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-heading mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let's{" "}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text">
                Get In Touch
              </span>
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              animate={inView ? { width: 80 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-card border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <MessageSquare size={24} className="text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Contact Information
                </h3>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Feel free to reach out to me for any inquiries, project
                discussions, or just to say hello. I'm always open to new
                opportunities and collaborations.
              </p>

              <div className="space-y-8">
                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary-100 p-3 rounded-lg mr-4 shadow-sm">
                    <Mail size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      priyanshuraj21030@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary-100 p-3 rounded-lg mr-4 shadow-sm">
                    <Phone size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      +91 9303515830
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-primary-100 p-3 rounded-lg mr-4 shadow-sm">
                    <MapPin size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">Bhopal,(M.P) INDIA</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Availability
                </h4>
                <p className="text-gray-600">
                  Currently available for freelance work and full-time
                  opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
              >
                {submitSuccess && (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">
                        Thank you for your message! I'll get back to you soon.
                      </span>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{submitError}</span>
                    </div>
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Hello, I'd like to discuss a project..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LePpOgqAAAAAB03v-2a2ymSB7sadp_TewEvwg8r"
                    className="transform scale-90 -ml-5"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium rounded-lg transition-all shadow-button hover:shadow-lg flex items-center justify-center"
                  whileHover={{ translateY: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
