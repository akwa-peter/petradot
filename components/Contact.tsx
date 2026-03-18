"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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

    // Simulate API call - replace with your actual endpoint
    setTimeout(() => {
      setSubmitStatus({
        type: "success",
        message:
          "Thank you for reaching out! We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+234 916 142 7809",
      href: "tel:+2349161427809",
      description: "Mon-Fri, 9am-6pm WAT",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "info@petradot.com",
      href: "mailto:info@petradot.com",
      description: "24/7 support available",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      value: "Lagos, Nigeria",
      href: "#",
      description: "Global client base",
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/2349161427809",
      description: "Quick responses",
    },
  ];

  return (
    <Section id="contact" className="relative bg-white">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-blue-100"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Let&apos;s Discuss Your{" "}
            <span className="text-blue-600">Project</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Have a project in mind? We&apos;d love to hear about it. Send us a
            message and we&apos;ll respond within 24 hours.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Send className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-slate-200 bg-white text-slate-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-700"
                      : "bg-red-50 border border-red-200 text-red-700"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  )}
                  <span className="text-sm">{submitStatus.message}</span>
                </div>
              )}

              <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to our privacy policy and terms of
                service.
              </p>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                  >
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <div className="text-blue-600">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500">{info.title}</p>
                      <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {info.value}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {info.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
