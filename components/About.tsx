"use client";

import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  Shield,
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
            <Sparkles className="h-4 w-4" />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Company Story & Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Company Story */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Our Story</h3>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2016, we started with a simple mission: build
                exceptional mobile experiences that solve real problems. Today,
                we&apos;re a team of 50+ passionate developers, designers, and
                strategists working with clients from early-stage startups to
                Fortune 500 companies.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe in the power of mobile technology to transform
                businesses. Whether it&apos;s a consumer app reaching millions
                or an enterprise solution streamlining operations, we approach
                every project with the same level of dedication and technical
                excellence.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Our Core Values
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${value.bgColor}`}>
                        <div className={value.iconColor}>{value.icon}</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">
                          {value.title}
                        </h4>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-4">
                Industries We Serve
              </h4>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white text-slate-600 text-sm rounded-lg border border-slate-200"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Technical Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Technical Expertise */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Technical Expertise
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Our core competencies
                  </p>
                </div>
                <div className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1.5 rounded-lg">
                  Industry Leading
                </div>
              </div>

              <div className="space-y-5">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-1.5 rounded-md ${skill.bgColor}`}>
                          <div className={skill.iconColor}>{skill.icon}</div>
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden ml-8">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full ${skill.bgColor} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Our Development Process
              </h3>
              <div className="space-y-4">
                {[
                  {
                    step: "Discovery & Strategy",
                    desc: "Understanding your business goals and user needs",
                  },
                  {
                    step: "Design & Prototyping",
                    desc: "Creating intuitive, engaging user experiences",
                  },
                  {
                    step: "Development & Testing",
                    desc: "Building with quality and scalability in mind",
                  },
                  {
                    step: "Deployment & Support",
                    desc: "Launch and ongoing optimization",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.step}
                      </h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
