"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Shield, Globe, Award } from "lucide-react";
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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Professional Grid Pattern - Adjusted for mobile */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:24px_24px]"></div>

      {/* Subtle Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#3b82f610,transparent_70%)] md:bg-[radial-gradient(circle_at_top_right,#3b82f610,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#8b5cf610,transparent_70%)] md:bg-[radial-gradient(circle_at_bottom_left,#8b5cf610,transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl text-center">
            {/* Left Content - Professional Tech Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Professional Heading - Responsive text sizes */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight"
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
                    className="block mt-1 md:mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="relative inline-block">
                      <span className="relative z-10 text-blue-600">
                        That Grow Your Business
                      </span>
                      <motion.span
                        className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-blue-200 rounded-full mx-auto"
                        style={{ width: "auto", maxWidth: "100%" }}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.8, duration: 1 }}
                      />
                    </span>
                  </motion.span>
                </motion.h1>
              </div>

              {/* Professional Value Proposition - Responsive text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-4 sm:mt-6 md:mt-8 text-lg sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
              >
                We design and build scalable mobile applications for startups
                and enterprises, from MVP to full-scale platforms that drive
                user engagement and revenue.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-1 sm:mt-1 md:mt-1 text-sm sm:text-sm md:text-lg lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
              >
                {" "}
                From idea to launch, we handle strategy, design, development,
                and scaling.
              </motion.p>

              {/* Trust Indicators - Responsive grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0"
              >
                {[
                  { text: "ISO 27001 Certified", icon: Shield },
                  { text: "5+ Years Avg Experience", icon: Award },
                  { text: "24/7 Enterprise Support", icon: Globe },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center sm:justify-center gap-2 text-slate-600 bg-slate-50/50 sm:bg-transparent p-2 sm:p-0 rounded-lg"
                  >
                    <item.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Improved mobile stacking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-base sm:text-lg shadow-lg shadow-blue-600/20 w-full"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link href="/portfolio" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group border-2 border-slate-200 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-base sm:text-lg bg-white w-full"
                  >
                    Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-1 md:gap-2">
          <span className="text-[10px] md:text-xs text-slate-400">
            Scroll to explore
          </span>
          <div className="w-4 h-6 md:w-5 md:h-8 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-1.5 md:h-2 bg-blue-600 rounded-full mt-1.5 md:mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
