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
  FileText,
  Target,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business goals, user needs, and technical requirements to create a comprehensive roadmap for success.",
      details: [
        "Initial consultation & requirements gathering",
        "Market research & competitor analysis",
        "Technical feasibility assessment",
        "Project roadmap & timeline creation",
        "Budget planning & resource allocation",
      ],
      duration: "1-2 weeks",
      deliverable: "Project Strategy Document",
      number: "01",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: "Design & Prototyping",
      description:
        "Creating intuitive user experiences and visually compelling interfaces through an iterative design process with your feedback.",
      details: [
        "User journey mapping & wireframing",
        "UI/UX design & interactive prototypes",
        "Design system creation",
        "User testing & feedback integration",
        "Accessibility compliance review",
      ],
      duration: "2-4 weeks",
      deliverable: "Interactive Prototype",
      number: "02",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Development",
      description:
        "Agile development with continuous integration, daily updates, and transparent progress tracking throughout the build phase.",
      details: [
        "Sprint planning & task breakdown",
        "Frontend & backend development",
        "API integrations & third-party services",
        "Code reviews & quality assurance",
        "Performance optimization",
      ],
      duration: "4-12 weeks",
      deliverable: "Production-Ready Codebase",
      number: "03",
      iconColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Testing & QA",
      description:
        "Rigorous testing protocols to ensure your app is secure, performant, and delivers an exceptional user experience.",
      details: [
        "Unit, integration, and E2E testing",
        "Performance optimization & load testing",
        "Security audit & vulnerability assessment",
        "User acceptance testing (UAT)",
        "Cross-device compatibility testing",
      ],
      duration: "1-2 weeks",
      deliverable: "QA Report & Testing Suite",
      number: "04",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Launch & Deployment",
      description:
        "Smooth, coordinated deployment to production with comprehensive infrastructure setup and monitoring.",
      details: [
        "App store submission (iOS & Android)",
        "Server deployment & infrastructure setup",
        "Performance monitoring implementation",
        "Launch checklist & deployment plan",
        "Post-launch support setup",
      ],
      duration: "1 week",
      deliverable: "Live Application",
      number: "05",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Support & Growth",
      description:
        "Ongoing maintenance, feature updates, and strategic guidance to ensure long-term success and user engagement.",
      details: [
        "24/7 monitoring & technical support",
        "Regular updates & feature releases",
        "Performance analytics & optimization",
        "Quarterly roadmap planning",
        "User feedback implementation",
      ],
      duration: "Ongoing",
      deliverable: "Growth Strategy Plan",
      number: "06",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const processMetrics = [
    {
      value: "95%",
      label: "On-Time Delivery",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      value: "100%",
      label: "Transparency",
      icon: <Target className="h-5 w-5" />,
    },
    {
      value: "Agile",
      label: "Methodology",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      value: "Daily",
      label: "Progress Updates",
      icon: <TrendingUp className="h-5 w-5" />,
    },
  ];

  return (
    <Section id="process" className="relative overflow-hidden bg-white">
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
            <span>Our Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            A Transparent, <span className="text-blue-600">Results-Driven</span>{" "}
            Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            From concept to launch and beyond, we follow a proven methodology
            that ensures quality, transparency, and successful outcomes for
            every project.
          </motion.p>
        </div>

        {/* Process Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {processMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-blue-600">{metric.icon}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-500">{metric.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Desktop Process Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-purple-200 to-indigo-200 transform -translate-x-1/2"></div>

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
                    className={`bg-white rounded-2xl p-8 border shadow-lg transition-all duration-300 ${
                      activeStep === index
                        ? "border-blue-200 shadow-xl shadow-blue-100"
                        : "border-slate-200 hover:border-blue-200"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-xl ${step.bgColor}`}>
                        <div className={step.iconColor}>{step.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-3xl font-bold text-slate-200">
                            {step.number}
                          </span>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                              {step.title}
                            </h3>
                            <div className="flex items-center gap-4">
                              <span className="text-sm font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                {step.duration}
                              </span>
                              <span className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                                {step.deliverable}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-slate-600 mb-6">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-slate-600">
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
                    className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                      activeStep === index
                        ? "bg-blue-600 scale-125"
                        : "bg-slate-300"
                    }`}
                  ></div>
                  {activeStep === index && (
                    <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-30"></div>
                  )}
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
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-linear-to-b from-blue-200 to-purple-200 -translate-y-6"></div>
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="relative shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 relative shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${step.bgColor}`}>
                        <div className={step.iconColor}>{step.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                            {step.duration}
                          </span>
                          <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                            {step.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">{step.description}</p>

                    <div className="space-y-2">
                      {step.details.slice(0, 3).map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                          <span className="text-sm text-slate-600">
                            {detail}
                          </span>
                        </div>
                      ))}
                      {step.details.length > 3 && (
                        <div className="text-sm text-blue-600 font-medium mt-2">
                          +{step.details.length - 3} more activities
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-slate-200 rounded-2xl px-8 py-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Rocket className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900">
                    Ready to Start Your Project?
                  </div>
                  <div className="text-sm text-slate-500">
                    Get a detailed project roadmap and timeline
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-600/20">
                Schedule Discovery Call
              </button>
            </div>
          </motion.div>
        </Link>
      </div>
    </Section>
  );
};

export default Process;
