"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Search,
  Layout,
  Code,
  TestTube,
  Rocket,
  Headphones,
  Zap,
  CheckCircle,
  Users,
  BarChart,
  Calendar,
  FileText,
  Target,
} from "lucide-react";
import { useState } from "react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discovery & Strategy",
      description:
        "Deep dive into your business goals, user needs, and technical requirements to create a comprehensive roadmap.",
      details: [
        "Initial consultation & requirements gathering",
        "Market research & competitor analysis",
        "Technical feasibility assessment",
        "Project roadmap & timeline creation",
      ],
      duration: "1-2 weeks",
      deliverable: "Project Strategy Document",
      number: "01",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Design & Prototyping",
      description:
        "Crafting intuitive user experiences and visually stunning interfaces through iterative design.",
      details: [
        "User journey mapping & wireframing",
        "UI/UX design & interactive prototypes",
        "Design system creation",
        "User testing & feedback integration",
      ],
      duration: "2-4 weeks",
      deliverable: "Interactive Prototype",
      number: "02",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-900/30",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description:
        "Agile development process with continuous integration and transparent progress updates.",
      details: [
        "Sprint planning & task breakdown",
        "Frontend & backend development",
        "API integrations & third-party services",
        "Code reviews & quality assurance",
      ],
      duration: "4-12 weeks",
      deliverable: "Production-Ready Codebase",
      number: "03",
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing & Quality Assurance",
      description:
        "Comprehensive testing to ensure performance, security, and exceptional user experience.",
      details: [
        "Unit, integration, and end-to-end testing",
        "Performance optimization & load testing",
        "Security audit & vulnerability assessment",
        "User acceptance testing (UAT)",
      ],
      duration: "1-2 weeks",
      deliverable: "QA Report & Testing Suite",
      number: "04",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Deployment",
      description:
        "Seamless deployment to production environments with complete infrastructure setup.",
      details: [
        "App store submission (iOS & Android)",
        "Server deployment & infrastructure setup",
        "Performance monitoring implementation",
        "Launch checklist & deployment plan",
      ],
      duration: "1 week",
      deliverable: "Live Application",
      number: "05",
      iconColor: "text-red-400",
      bgColor: "bg-red-900/30",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Support & Growth",
      description:
        "Ongoing maintenance, feature updates, and performance optimization for long-term success.",
      details: [
        "24/7 monitoring & technical support",
        "Regular updates & feature releases",
        "Performance analytics & optimization",
        "Quarterly roadmap planning",
      ],
      duration: "Ongoing",
      deliverable: "Growth Strategy Plan",
      number: "06",
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-900/30",
    },
  ];

  const processMetrics = [
    {
      value: "95%",
      label: "On-Time Delivery",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      value: "100%",
      label: "Transparency",
      icon: <Target className="h-5 w-5" />,
    },
    {
      value: "Agile",
      label: "Development Method",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      value: "Weekly",
      label: "Progress Updates",
      icon: <BarChart className="h-5 w-5" />,
    },
  ];

  return (
    <Section
      id="process"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Our Proven Development Process
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A transparent, collaborative workflow designed to deliver exceptional
          results while keeping you informed every step of the way.
        </p>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      {/* Process Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10"
      >
        {processMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-900/30 p-3 rounded-lg">
                <div className="text-blue-400">{metric.icon}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-300">{metric.label}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Desktop Process Timeline */}
      <div className="hidden lg:block relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transform -translate-x-1/2"></div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActiveStep(index)}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                <div
                  className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 ${
                    activeStep === index ? "border-blue-500/50 shadow-lg" : ""
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-xl ${step.bgColor}`}>
                      <div className={step.iconColor}>{step.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-gray-500">
                          {step.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                              {step.duration}
                            </span>
                            <span className="text-sm font-medium bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                              {step.deliverable}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">{step.description}</p>

                      <div className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span className="text-sm text-gray-300">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <div
                  className={`w-6 h-6 rounded-full border-4 border-gray-900 shadow-lg transition-all duration-300 ${
                    activeStep === index
                      ? "bg-blue-500 scale-125"
                      : "bg-blue-600"
                  }`}
                ></div>
                <div
                  className={`absolute inset-0 rounded-full ${
                    activeStep === index
                      ? "bg-blue-500 animate-ping opacity-30"
                      : ""
                  }`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Process Steps */}
      <div className="lg:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Mobile Timeline Line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 -translate-y-6"></div>
            )}

            <div className="flex gap-6">
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative">
                  {step.number}
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-sm mb-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${step.bgColor}`}>
                      <div className={step.iconColor}>{step.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs font-medium bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                        <span className="text-xs font-medium bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full">
                          {step.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{step.description}</p>

                  <div className="space-y-2">
                    {step.details.slice(0, 2).map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="text-sm text-gray-300">{detail}</span>
                      </div>
                    ))}
                    {step.details.length > 2 && (
                      <div className="text-sm text-blue-400 font-medium">
                        +{step.details.length - 2} more activities
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Principles */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 relative z-10"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-2xl shadow-sm mb-6 border border-gray-700">
              <Users className="h-8 w-8 text-blue-400" />
            </div>
            <h4 className="font-bold text-white mb-3">
              Collaborative Approach
            </h4>
            <p className="text-gray-300 text-sm">
              Regular sync-ups and transparent communication ensure you're
              always in the loop
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-2xl shadow-sm mb-6 border border-gray-700">
              <FileText className="h-8 w-8 text-purple-400" />
            </div>
            <h4 className="font-bold text-white mb-3">Documentation Driven</h4>
            <p className="text-gray-300 text-sm">
              Comprehensive documentation at every stage for complete project
              clarity
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-2xl shadow-sm mb-6 border border-gray-700">
              <Zap className="h-8 w-8 text-green-400" />
            </div>
            <h4 className="font-bold text-white mb-3">Agile Methodology</h4>
            <p className="text-gray-300 text-sm">
              Flexible sprints and iterative development for adapting to
              changing requirements
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-center relative z-10"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gray-800 border border-gray-700 rounded-2xl px-8 py-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-900/30 p-3 rounded-xl">
              <Rocket className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">
                Ready to Start Your Project?
              </div>
              <div className="text-sm text-gray-300">
                Get a detailed project roadmap and timeline
              </div>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all font-semibold">
            Schedule Discovery Call
          </button>
        </div>
      </motion.div>
    </Section>
  );
};

export default Process;
