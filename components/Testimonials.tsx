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
        "Petradot helped us build Batimus mobile app, our habit development app and supported us during the deployment and after launch. It was a joy working with the team.",
      author: "Eze Sunday Eze",
      position: "Founder/CEO",
      rating: 5,
      company: "Batimus",
      logo: <Building className="h-6 w-6" />,

      imageColor: "bg-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      quote:
        "Their team demonstrated exceptional speed, technical expertise, and a deep understanding of our vision. What impressed us most was not just how fast they worked, but how committed they were to delivering a complete, reliable solution. They took ownership of the project, resolved long-standing issues, and successfully brought StableDoc to launch.",
      author: "Dr. Isaac",
      position: "Founder & CEO",
      rating: 5,
      company: "StableDoc",
      logo: <Globe className="h-6 w-6" />,

      imageColor: "bg-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      quote:
        "What truly stood out to me was Petradot’s ownership of the project, driving regular standups, keeping us informed, and ensuring consistent progress at every stage. I sincerely appreciate their commitment and reliability throughout this implementation. Their partnership has given us confidence in our platform’s future, and I look forward to continuing to work with them to maintain and grow the application.",
      author: "Obiajulu Nkwonta",
      position: "Founder & CEO",
      rating: 5,
      company: "JuluPay",
      logo: <Award className="h-6 w-6" />,

      imageColor: "bg-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      quote:
        "Partnering with Petradot to build Chooya from the ground up has been one of our best strategic decisions. Their team became true partners, successfully delivering all Chooya products, including LindaSales Pro, with strong professionalism and technical expertise. Their reliability and commitment have helped us scale faster and serve our users better. I value this partnership and look forward to continuing to work together as we grow in the years ahead.",
      author: "Igwe Uguru",
      position: "Founder & CEO/Co-founder, RAD5 Tech Hub",
      rating: 5,
      company: "Chooya",
      logo: <Shield className="h-6 w-6" />,

      imageColor: "bg-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
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
