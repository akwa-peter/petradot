"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Smartphone,
  Globe,
  Server,
  Palette,
  Cloud,
  Cpu,
  Zap,
  Shield,
  Code,
  Database,
  Layout,
  GitBranch,
  BarChart,
  Users,
  Clock,
  CheckCircle,
  Terminal,
  FileText,
  PenTool,
  Rocket,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "development", label: "Development" },
    { id: "design", label: "Design" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "consulting", label: "Consulting" },
  ];

  const whatWeBuild = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Apps",
      desc: "Native & cross-platform solutions for iOS and Android",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
      category: "development",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Systems",
      desc: "Robust APIs and server-side architecture",
      features: ["Node.js", "Python", "GraphQL", "Microservices"],
      category: "development",
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      desc: "User-centered design systems and prototypes",
      features: ["Figma", "Design Systems", "User Testing", "Prototyping"],
      category: "design",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Solutions",
      desc: "Scalable cloud infrastructure and deployment",
      features: ["AWS", "Azure", "Google Cloud", "Docker"],
      category: "cloud",
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-900/30",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "DevOps & CI/CD",
      desc: "Automated deployment and infrastructure management",
      features: ["Kubernetes", "Jenkins", "Terraform", "Monitoring"],
      category: "cloud",
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-900/30",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "MVP Development",
      desc: "Rapid prototyping to validate your business idea",
      features: ["Lean Development", "User Feedback", "Iterative Design"],
      category: "consulting",
      iconColor: "text-teal-400",
      bgColor: "bg-teal-900/30",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Solutions",
      desc: "Custom software for large-scale business operations",
      features: ["Security", "Scalability", "Compliance", "Integration"],
      category: "consulting",
      iconColor: "text-gray-300",
      bgColor: "bg-gray-800",
    },
  ];

  const stats = [
    {
      value: "300+",
      label: "Projects Delivered",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      value: "99%",
      label: "Client Satisfaction",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      value: "40+",
      label: "Team Experts",
      icon: <Users className="h-5 w-5" />,
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const filteredServices = whatWeBuild.filter(
    (service) => activeCategory === "all" || service.category === activeCategory
  );

  return (
    <>
      <Section
        id="what-we-build"
        className="relative bg-gradient-to-b from-gray-900 to-gray-800"
      >
        {/* Manually add title with white text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            End-to-end software development solutions designed to transform your
            vision into reality with precision and excellence.
          </p>
        </div>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-900/30 p-3 rounded-lg">
                  <div className="text-blue-400">{stat.icon}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <div className="relative z-10 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {filteredServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-800 rounded-2xl p-6 border border-gray-700 group-hover:border-blue-500/50 group-hover:shadow-xl transition-all duration-300 h-full">
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${item.bgColor}`}
                >
                  <div className={item.iconColor}>{item.icon}</div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Services;
