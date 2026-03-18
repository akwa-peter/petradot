"use client";

import { motion } from "framer-motion";
import {
  Users,
  Server,
  Heart,
  Lightbulb,
  Code,
  Cloud,
  GitBranch,
  Target,
  TrendingUp,
  Award,
  Layers,
  Smartphone,
  Calendar,
} from "lucide-react";
import Section from "./Section";

const About = () => {
  const coreValues = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission-Driven",
      description:
        "We build technology that solves real business problems and delivers measurable ROI for our clients.",
      number: "01",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Focused",
      description:
        "Leveraging cutting-edge technologies to give you a competitive advantage in your market.",
      number: "02",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build long-term partnerships, not just deliver projects.",
      number: "03",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Excellence",
      description:
        "Enterprise-grade solutions with rigorous testing and meticulous attention to detail.",
      number: "04",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const expertise = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      name: "iOS & Android Development",
      level: 95,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Code className="h-5 w-5" />,
      name: "Cross-Platform (React Native, Flutter)",
      level: 92,
      iconColor: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: <Server className="h-5 w-5" />,
      name: "Backend Engineering",
      level: 90,
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      name: "Cloud Infrastructure (AWS, GCP)",
      level: 88,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      name: "UI/UX Design",
      level: 85,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      name: "DevOps & CI/CD",
      level: 87,
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const achievements = [
    { value: "8+", label: "Years in Business", icon: Calendar },
    { value: "150+", label: "Apps Delivered", icon: Smartphone },
    { value: "50+", label: "Team Members", icon: Users },
    { value: "98%", label: "Client Retention", icon: TrendingUp },
  ];

  const industries = [
    "FinTech",
    "Healthcare",
    "E-Commerce",
    "Education",
    "Real Estate",
    "Logistics",
    "Entertainment",
    "Enterprise",
  ];

  return (
    <Section id="about" className="relative bg-white">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-blue-100"
          >
            <span>About Our Company</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            We Build Mobile Apps That{" "}
            <span className="text-blue-600">Drive Business Growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            With over 8 years of experience in mobile development, we&apos;ve
            helped startups and enterprises launch successful apps that users
            love. Our team combines technical expertise with strategic thinking
            to deliver solutions that make a difference.
          </motion.p>
        </div>

        {/* Key Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
            >
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
