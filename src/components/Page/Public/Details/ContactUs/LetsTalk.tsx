import {
  IconMail,
  IconMessage,
  IconPhone,
  IconSend,
  IconUser,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";

const LetsTalk = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    reason: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    // Add your form submission logic here

    setIsSubmitting(false);
    // Reset form or show success message
  };

  const reasons = [
    "General Inquiry",
    "Technical Support",
    "Sales Question",
    "Partnership",
    "Feature Request",
    "Bug Report",
    "Other",
  ];

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 md:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-4 py-2 bg-blue-100 text-[#0A65FC] rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Contact Form
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A65FC] to-blue-600">
              Talk
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions, feedback, or need help getting started? Our team is
            here to support you — just send us a message and we'll get back to
            you as soon as possible.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-blue-100"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-2"
              >
                <label
                  htmlFor="firstName"
                  className="flex items-center text-gray-700 font-semibold"
                >
                  <IconUser className="w-4 h-4 mr-2 text-[#0A65FC]" />
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-2"
              >
                <label
                  htmlFor="lastName"
                  className="flex items-center text-gray-700 font-semibold"
                >
                  <IconUser className="w-4 h-4 mr-2 text-[#0A65FC]" />
                  Last Name{" "}
                  <span className="text-gray-400 ml-1">(optional)</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Contact Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-2"
              >
                <label
                  htmlFor="contactNumber"
                  className="flex items-center text-gray-700 font-semibold"
                >
                  <IconPhone className="w-4 h-4 mr-2 text-[#0A65FC]" />
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="+94 XX XXX XXXX"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-2"
              >
                <label
                  htmlFor="email"
                  className="flex items-center text-gray-700 font-semibold"
                >
                  <IconMail className="w-4 h-4 mr-2 text-[#0A65FC]" />
                  Email <span className="text-gray-400 ml-1">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* Reason Field */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="space-y-2"
            >
              <label
                htmlFor="reason"
                className="flex items-center text-gray-700 font-semibold"
              >
                <IconMessage className="w-4 h-4 mr-2 text-[#0A65FC]" />
                Reason for Contact
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300"
              >
                <option value="">Select a reason</option>
                {reasons.map((reason) => (
                  <option key={reason} value={reason}>
                    {reason}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="space-y-2"
            >
              <label
                htmlFor="message"
                className="flex items-center text-gray-700 font-semibold"
              >
                <IconMessage className="w-4 h-4 mr-2 text-[#0A65FC]" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us more about your inquiry..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-xl border-2 border-blue-100 bg-white p-4 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A65FC] focus:border-transparent transition-all duration-300 resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex justify-center pt-4"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#0A65FC] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <IconSend className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default LetsTalk;
