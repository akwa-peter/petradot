"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building,
  Globe,
  Award,
  TrendingUp,
  Users,
  Shield,
} from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "Petradot transformed our complex business requirements into a seamless mobile experience. Their technical expertise and attention to detail exceeded our expectations. The app has driven a 40% increase in user engagement and become our primary revenue channel.",
      author: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      rating: 5,
      company: "TechSolutions Inc.",
      logo: <Building className="h-6 w-6" />,
      metrics: "Revenue +65%",
      metricLabel: "ROI Increase",
      imageColor: "bg-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      quote:
        "Working with Petradot was a game-changer for our startup. They delivered a polished MVP in just 8 weeks that impressed our investors. Their agile approach and transparent communication made the entire process smooth and efficient.",
      author: "Michael Chen",
      position: "Founder & CTO, InnovateStart",
      rating: 5,
      company: "InnovateStart",
      logo: <Globe className="h-6 w-6" />,
      metrics: "Time to Market -50%",
      metricLabel: "Faster Launch",
      imageColor: "bg-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      quote:
        "The team at Petradot demonstrated exceptional professionalism from discovery to deployment. Their solution architecture was robust, scalable, and future-proof. Post-launch support has been outstanding with 99.9% uptime guaranteed.",
      author: "David Rodriguez",
      position: "Digital Transformation Lead, GlobalCorp",
      rating: 5,
      company: "GlobalCorp",
      logo: <Award className="h-6 w-6" />,
      metrics: "99.9% Uptime",
      metricLabel: "Enterprise SLA",
      imageColor: "bg-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      quote:
        "As a healthcare provider, we needed a HIPAA-compliant solution with strict security requirements. Petradot delivered beyond expectations with meticulous attention to compliance and security protocols, earning us complete confidence from our patients.",
      author: "Dr. Emily Watson",
      position: "Medical Director, HealthFirst Systems",
      rating: 5,
      company: "HealthFirst Systems",
      logo: <Shield className="h-6 w-6" />,
      metrics: "100% Compliance",
      metricLabel: "HIPAA Certified",
      imageColor: "bg-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
    {
      quote:
        "The mobile app developed by Petradot has revolutionized our e-commerce operations. Their understanding of user behavior and conversion optimization resulted in a 35% increase in conversion rate within the first three months.",
      author: "James Wilson",
      position: "E-commerce Director, RetailPro",
      rating: 5,
      company: "RetailPro",
      logo: <TrendingUp className="h-6 w-6" />,
      metrics: "Conversion +35%",
      metricLabel: "Revenue Growth",
      imageColor: "bg-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoplay, currentIndex, nextTestimonial]);

  return (
    <Section className="relative overflow-hidden bg-white">
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
            <Users className="h-4 w-4" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Trusted by Industry <span className="text-blue-600">Leaders</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            See how we&apos;ve helped businesses transform their digital
            presence and achieve measurable results through exceptional mobile
            experiences.
          </motion.p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Testimonial Content */}
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <Quote className="h-10 w-10 text-slate-300 mb-6" />
                  <p className="text-xl text-slate-700 leading-relaxed">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 ${testimonials[currentIndex].imageColor} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                    >
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-slate-500">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonials[currentIndex].rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-500">
                      5.0 out of 5
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Visual Stats */}
              <div className="bg-linear-to-br from-slate-50 to-white p-8 md:p-12 border-l border-slate-200">
                <div className="h-full flex flex-col justify-between">
                  {/* Company Logo/Icon */}
                  <div className="mb-8">
                    <div
                      className={`w-16 h-16 ${testimonials[currentIndex].bgColor} rounded-2xl flex items-center justify-center mb-4`}
                    >
                      <div
                        className={`h-8 w-8 ${testimonials[currentIndex].textColor}`}
                      >
                        {testimonials[currentIndex].logo}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {testimonials[currentIndex].company}
                    </h3>
                    <p className="text-slate-500">Enterprise Client</p>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-12 bg-blue-600 rounded-full"></div>
                      <div>
                        <div className="text-3xl font-bold text-slate-900">
                          {testimonials[currentIndex].metrics}
                        </div>
                        <div className="text-sm text-slate-500">
                          {testimonials[currentIndex].metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="h-5 w-5 text-slate-600" />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
            >
              <ChevronRight className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
