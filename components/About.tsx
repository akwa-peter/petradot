"use client";

import { motion } from "framer-motion";
import {
  Users,
  Sparkles,
  Shield,
  Server,
  Globe,
  Rocket,
  Heart,
  Lightbulb,
  Star,
  Code,
  Palette,
  Cloud,
  GitBranch,
  CheckCircle,
} from "lucide-react";
import Section from "./Section";

const About = () => {
  const coreValues = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Mission-Driven",
      description:
        "Build technology that solves real problems and delivers measurable value.",
      number: "01",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Focused",
      description: "Leveraging cutting-edge technologies for maximum impact.",
      number: "02",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-900/30",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We partner, not just deliver.",
      number: "03",
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Excellence",
      description:
        "Enterprise-grade solutions with meticulous attention to detail.",
      number: "04",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
  ];

  const expertise = [
    {
      icon: <Code className="h-5 w-5" />,
      name: "Mobile Development",
      level: 95,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      name: "UI/UX Design",
      level: 90,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-900/30",
    },
    {
      icon: <Server className="h-5 w-5" />,
      name: "Backend Engineering",
      level: 88,
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      name: "Cloud Infrastructure",
      level: 92,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
    {
      icon: <GitBranch className="h-5 w-5" />,
      name: "DevOps & CI/CD",
      level: 85,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-900/30",
    },
  ];

  return (
    <Section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Crafting Digital Excellence
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We transform ideas into powerful, scalable digital solutions that
          drive business growth and deliver exceptional user experiences.
        </p>
      </div>

      {/* Header with Badge */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-800"
        >
          <Sparkles className="h-4 w-4" />
          <span>Trusted by Industry Leaders</span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          We Build <span className="text-blue-400">Future-Ready</span> Solutions
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          With years of experience delivering native and cross-platform
          products, we combine design, engineering, and product strategy to help
          businesses thrive in the digital era.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Core Values */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Our Philosophy</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in creating technology that not only looks great but
              performs exceptionally. Every project is an opportunity to push
              boundaries and deliver excellence.
            </p>
          </div>

          {/* Core Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3">
                  <div className="bg-blue-500 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {value.number}
                  </div>
                </div>
                <div
                  className={`mb-4 inline-flex p-3 rounded-xl ${value.bgColor}`}
                >
                  <div className={value.iconColor}>{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-white border border-gray-700"
          >
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-white">150+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-white">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2 text-white">24/7</div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Expertise & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Expertise Section */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-white">Our Expertise</h3>
              <div className="text-sm text-blue-400 font-medium bg-blue-900/30 px-3 py-1 rounded-full">
                Industry Leading
              </div>
            </div>

            <div className="space-y-6">
              {expertise.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${skill.bgColor}`}>
                        <div className={skill.iconColor}>{skill.icon}</div>
                      </div>
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden ml-11">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${skill.bgColor} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
