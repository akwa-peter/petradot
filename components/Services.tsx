"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Smartphone,
  Server,
  Palette,
  Cloud,
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
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

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
      title: "Mobile App Development",
      desc: "Native and cross-platform applications for iOS and Android with exceptional performance.",
      features: ["React Native", "Flutter", "Swift", "Kotlin"],
      category: "development",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
      href: "/services/mobile-development",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Web Development",
      desc: "Responsive web applications and PWAs built with modern frameworks and best practices.",
      features: ["React", "Next.js", "TypeScript", "Node.js"],
      category: "development",
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
      href: "/services/web-development",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend Systems",
      desc: "Robust, scalable APIs and server-side architecture for high-performance applications.",
      features: ["Node.js", "Python", "GraphQL", "Microservices"],
      category: "development",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
      href: "/services/backend",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      desc: "User-centered design systems and interactive prototypes that delight users.",
      features: ["Figma", "Design Systems", "User Testing", "Prototyping"],
      category: "design",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      href: "/services/design",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Product Design",
      desc: "End-to-end product design strategy from concept to pixel-perfect interfaces.",
      features: ["Wireframing", "User Flows", "Visual Design", "Design Tokens"],
      category: "design",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      href: "/services/product-design",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Infrastructure",
      desc: "Scalable and secure cloud architecture for modern applications.",
      features: ["AWS", "Azure", "Google Cloud", "Serverless"],
      category: "cloud",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
      href: "/services/cloud",
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "DevOps & CI/CD",
      desc: "Automated deployment pipelines and infrastructure as code.",
      features: ["Kubernetes", "Docker", "Jenkins", "Terraform"],
      category: "cloud",
      iconColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
      href: "/services/devops",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "MVP Development",
      desc: "Rapid prototyping and lean development to validate your business ideas.",
      features: ["Lean Development", "User Feedback", "Iterative Design"],
      category: "consulting",
      iconColor: "text-teal-600",
      bgColor: "bg-teal-50",
      href: "/services/mvp",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Solutions",
      desc: "Custom software for large-scale business operations with enterprise-grade security.",
      features: ["Security", "Scalability", "Compliance", "Integration"],
      category: "consulting",
      iconColor: "text-gray-600",
      bgColor: "bg-gray-50",
      href: "/services/enterprise",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Architecture",
      desc: "Optimized database design and management for high-performance applications.",
      features: ["PostgreSQL", "MongoDB", "Redis", "Data Modeling"],
      category: "development",
      iconColor: "text-pink-600",
      bgColor: "bg-pink-50",
      href: "/services/database",
    },
  ];

  const stats = [
    {
      value: "150+",
      label: "Projects Delivered",
      icon: <CheckCircle className="h-5 w-5" />,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      value: "50+",
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
    (service) =>
      activeCategory === "all" || service.category === activeCategory,
  );

  return (
    <Section id="services" className="relative bg-white">
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
            <Zap className="h-4 w-4" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Comprehensive <span className="text-blue-600">Development</span>{" "}
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            End-to-end software development services designed to transform your
            vision into powerful, scalable, and user-friendly digital solutions.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link href={item.href}>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${item.bgColor}`}>
                      <div className={item.iconColor}>{item.icon}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-slate-50 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Not sure which service you need?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation with our technical experts to discuss
              your project requirements and get recommendations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-600/20"
            >
              Schedule Free Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;
