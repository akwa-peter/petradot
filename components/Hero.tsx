"use client";

import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Shield,
  Smartphone,
  Globe,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        scale: [1, 1.02, 1],
        transition: { duration: 2, repeat: Infinity, repeatType: "reverse" },
      });
    };
    sequence();
  }, [controls]);

  const stats = [
    { value: "50+", label: "Apps Delivered", icon: Smartphone },
    { value: "99.9%", label: "Uptime SLA", icon: Award },
    { value: "4.8★", label: "App Store Rating", icon: Zap },
    { value: "10M+", label: "Downloads", icon: Globe },
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-white"
    >
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f610,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#8b5cf610,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content - Professional Tech Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Enterprise Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-8 border border-blue-100"
              whileHover={{ scale: 1.02 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>Enterprise Mobile Development</span>
            </motion.div>

            {/* Professional Heading */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Mobile Apps
                </motion.span>
                <motion.span
                  className="block mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative">
                    <span className="relative z-10 text-blue-600">
                      That Mean Business
                    </span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                  </span>
                </motion.span>
              </motion.h1>
            </div>

            {/* Professional Value Proposition */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              We engineer high-performance mobile applications for Fortune 500
              companies and high-growth startups. From concept to scale, we
              deliver robust, secure, and user-centric solutions that drive ROI.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="mt-8 flex flex-wrap gap-6"
            >
              {[
                { text: "ISO 27001 Certified", icon: Shield },
                { text: "5+ Years Average Experience", icon: Award },
                { text: "24/7 Enterprise Support", icon: Globe },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-slate-600"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons - Professional Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg shadow-blue-600/20"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <Link href="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg bg-white"
                >
                  Portfolio
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional App Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main App Showcase */}
            <div className="relative">
              {/* Device Mockup Frame */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
                {/* Device Header */}
                <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-medium text-slate-500">9:41</div>
                  <div className="w-16"></div>
                </div>

                {/* App Interface Preview */}
                <div className="p-6 bg-linear-to-br from-slate-50 to-white">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        A
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Ucee MFB Bank App
                        </h3>
                        <p className="text-xs text-slate-500">
                          Enterprise Dashboard
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      v2.4.0
                    </div>
                  </div>

                  {/* Analytics Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-2xl font-bold text-slate-900">
                        2.4s
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Load Time
                      </div>
                      <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="text-2xl font-bold text-slate-900">
                        99.9%
                      </div>
                      <div className="text-xs text-slate-500 mt-1">Uptime</div>
                      <div className="mt-2 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-[99.9%] bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-slate-900">
                            Deployment Successful
                          </span>
                          <span className="text-xs text-slate-400">
                            2 min ago
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          Production build v2.4.0 deployed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-slate-900">
                            Performance Update
                          </span>
                          <span className="text-xs text-slate-400">
                            1 hour ago
                          </span>
                        </div>
                        <p className="text-xs text-slate-500">
                          API response time improved by 40%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 border border-slate-200 min-w-[240px]"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-900">
                      15ms
                    </div>
                    <p className="text-sm text-slate-500">
                      Average Response Time
                    </p>
                    <div className="flex items-center gap-1 mt-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-green-600">
                        99th percentile
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Stack Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <div className="flex gap-2">
                    <span className="text-xs font-medium px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg">
                      Flutter
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 bg-green-50 text-green-700 rounded-lg">
                      React Native
                    </span>
                    <span className="text-xs font-medium px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg">
                      AWS
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats Row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
