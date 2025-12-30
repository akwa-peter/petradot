"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Shield } from "lucide-react";
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

  const floatingShapes = [
    {
      top: "10%",
      left: "5%",
      size: "w-4 h-4",
      color: "bg-blue-500/20",
      delay: 0,
    },
    {
      top: "20%",
      right: "10%",
      size: "w-6 h-6",
      color: "bg-purple-500/20",
      delay: 0.3,
    },
    {
      bottom: "30%",
      left: "15%",
      size: "w-8 h-8",
      color: "bg-cyan-500/20",
      delay: 0.6,
    },
    {
      bottom: "15%",
      right: "20%",
      size: "w-5 h-5",
      color: "bg-pink-500/20",
      delay: 0.9,
    },
  ];

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-45 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>

      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color} ${shape.size}`}
          style={{
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Pulsing gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
              <span>Trusted by 50+ Leading Companies</span>
            </motion.div>

            {/* Animated Main Heading with Typewriter effect */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Transform Your
                </motion.span>
                <motion.span
                  className="block mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="relative">
                    <motion.span
                      className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        backgroundSize: "200% 200%",
                      }}
                    >
                      Digital Vision
                    </motion.span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                  </span>
                </motion.span>
                <motion.span
                  className="block mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Into Reality
                </motion.span>
              </motion.h1>
            </div>

            {/* Description with fade-in */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              We craft{" "}
              <motion.span
                className="font-semibold text-blue-400"
                animate={{
                  textShadow: [
                    "0 0 0px #60a5fa",
                    "0 0 10px #60a5fa",
                    "0 0 0px #60a5fa",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                high-performance mobile applications
              </motion.span>{" "}
              that drive business growth. From concept to launch, we deliver
              exceptional digital experiences that users love.
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  background: [
                    "linear-gradient(to right, #3b82f6, #2563eb)",
                    "linear-gradient(to right, #2563eb, #1d4ed8)",
                    "linear-gradient(to right, #3b82f6, #2563eb)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <span>Start Free Consultation</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></div>
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  borderColor: "#60a5fa",
                  color: "#60a5fa",
                }}
                whileTap={{ scale: 0.98 }}
                className="group border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 font-semibold text-lg hover:text-blue-400"
              >
                <span className="relative">
                  View Our Work
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content with 3D-like card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card with 3D effect */}
            <motion.div
              className="relative z-10"
              animate={{
                rotateY: [0, 5, 0, -5, 0],
                rotateX: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900/50 rounded-2xl shadow-2xl p-1 border border-gray-700/50 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl p-8">
                  {/* Mockup Header with blinking dots */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-red-400"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-yellow-400"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.3,
                        }}
                      />
                      <motion.div
                        className="w-3 h-3 rounded-full bg-green-400"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.6,
                        }}
                      />
                      <span className="ml-2 text-white/80 text-sm font-medium">
                        App Preview
                      </span>
                    </div>
                    <motion.div
                      className="text-white text-xs bg-white/20 px-3 py-1 rounded-full"
                      animate={{
                        scale: [1, 1.1, 1],
                        background: [
                          "rgba(255,255,255,0.2)",
                          "rgba(255,255,255,0.3)",
                          "rgba(255,255,255,0.2)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      LIVE DEMO
                    </motion.div>
                  </div>

                  {/* Animated Mockup Content */}
                  <div className="space-y-4">
                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      animate={{
                        x: [0, -2, 0, 2, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <span className="text-white font-bold">✓</span>
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            className="h-2 bg-white/20 rounded-full w-3/4 mb-2"
                            animate={{ width: ["75%", "80%", "75%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                      animate={{
                        x: [0, 2, 0, -2, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-white font-bold">⚡</span>
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            className="h-2 bg-white/20 rounded-full w-full mb-2"
                            animate={{ width: ["100%", "95%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <div className="h-2 bg-white/10 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Animated Stats in Mockup */}
                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {[
                        { value: "2.4s", label: "Load Time" },
                        { value: "99.9%", label: "Uptime" },
                        { value: "4.8★", label: "Rating" },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="bg-white/5 rounded-lg p-3 text-center"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          <div className="text-white text-xl font-bold">
                            {stat.value}
                          </div>
                          <div className="text-white/60 text-xs">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-gray-800 rounded-xl shadow-xl p-5 border border-gray-700 max-w-xs"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="bg-blue-900/30 p-2 rounded-lg"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Production Ready
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Fully tested & deployment ready
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -right-6 bg-gray-800 rounded-xl shadow-xl p-5 border border-gray-700 max-w-xs"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    className="bg-purple-900/30 p-2 rounded-lg"
                    animate={{ rotate: [0, -10, 0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  >
                    <Shield className="h-5 w-5 text-purple-400" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Secure by Design
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Enterprise-grade security protocols
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Tech Stack */}
            <motion.div
              className="absolute -bottom-12 right-0 bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-700"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-300">
                  Built With:
                </span>
                <div className="flex gap-3">
                  {[
                    { text: "Flutter", color: "bg-blue-900/30 text-blue-300" },
                    {
                      text: "Node.js",
                      color: "bg-green-900/30 text-green-300",
                    },
                    { text: "Firebase", color: "bg-red-900/30 text-red-300" },
                  ].map((tech, index) => (
                    <motion.span
                      key={index}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${tech.color}`}
                      whileHover={{ scale: 1.1 }}
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      {tech.text}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
