"use client";

import { motion, useAnimation } from "framer-motion";
import {
  ArrowRight,
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f610,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#8b5cf610,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            {/* Left Content - Professional Tech Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
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
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-200 rounded-full mx-auto"
                        style={{ width: "auto", maxWidth: "100%" }}
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
                className="mt-8 text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto"
              >
                We engineer high-performance mobile applications for Fortune 500
                companies and high-growth startups. From concept to scale, we
                deliver robust, secure, and user-centric solutions that drive
                ROI.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-8 flex flex-wrap gap-6 justify-center"
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
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg shadow-blue-600/20 w-full sm:w-auto"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/case-studies">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg bg-white w-full sm:w-auto"
                  >
                    Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400">Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-blue-600 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
