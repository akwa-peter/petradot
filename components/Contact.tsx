"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+234 916 142 7809",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "info@petradot.com",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      value: "Lagos, Nigeria",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      value: "Chat with us",
    },
  ];

  return (
    <Section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Contact Us</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Have a project in mind? Let&apos;s build it together.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-700 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-900/30 border border-green-700 text-green-400"
                    : "bg-red-900/30 border border-red-700 text-red-400"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.95 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-700"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <div className="text-blue-400">{info.icon}</div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.title}</p>
                      <p className="font-medium text-white">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-400">
            <p>
              📍 Based in Lagos, Nigeria • 🌐 Working with clients worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
