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
} from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      quote:
        "Petradot transformed our complex business requirements into a seamless mobile experience. Their technical expertise and attention to detail exceeded our expectations. The app has seen a 40% increase in user engagement since launch.",
      author: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      rating: 5,
      company: "Enterprise Client",
      imageColor: "bg-blue-600",
      logo: <Building className="h-6 w-6" />,
      stats: "Revenue +65%",
    },
    {
      quote:
        "Working with Petradot was a game-changer for our startup. They delivered a polished MVP in just 8 weeks that impressed our investors. Their agile approach and transparent communication made the entire process smooth and efficient.",
      author: "Michael Chen",
      position: "Founder & CTO, InnovateStart",
      rating: 5,
      company: "Startup Client",
      imageColor: "bg-purple-600",
      logo: <Globe className="h-6 w-6" />,
      stats: "Time to Market -50%",
    },
    {
      quote:
        "The team at Petradot demonstrated exceptional professionalism from discovery to deployment. Their solution architecture was robust, scalable, and future-proof. Post-launch support has been outstanding with 99.9% uptime.",
      author: "David Rodriguez",
      position: "Digital Transformation Lead, GlobalCorp",
      rating: 5,
      company: "Fortune 500 Client",
      imageColor: "bg-green-600",
      logo: <Award className="h-6 w-6" />,
      stats: "Uptime 99.9%",
    },
    {
      quote:
        "As a healthcare provider, we needed a HIPAA-compliant solution with strict security requirements. Petradot delivered beyond expectations with meticulous attention to compliance and security protocols.",
      author: "Dr. Emily Watson",
      position: "Medical Director, HealthFirst Systems",
      rating: 5,
      company: "Healthcare Client",
      imageColor: "bg-teal-600",
      logo: <Award className="h-6 w-6" />,
      stats: "Compliance 100%",
    },
    {
      quote:
        "The mobile app developed by Petradot has become our primary revenue channel. Their understanding of e-commerce trends and user behavior resulted in a conversion rate increase of 35%.",
      author: "James Wilson",
      position: "E-commerce Director, RetailPro",
      rating: 5,
      company: "Retail Client",
      imageColor: "bg-orange-600",
      logo: <Building className="h-6 w-6" />,
      stats: "Conversion +35%",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <Section className=" overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Client Success Stories
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Trusted by industry leaders who have transformed their digital
          presence with our solutions
        </p>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>

      {/* Main Testimonial Carousel */}
      <div className="relative z-10">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
          className="bg-gray-800 rounded-2xl shadow-xl border border-gray-700 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Testimonial Content */}
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <Quote className="h-12 w-12 text-gray-700 mb-6" />
                <p className="text-xl text-gray-300 leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
              </div>

              <div className="space-y-6">
                {/* Author Info */}
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`w-16 h-16 ${testimonials[currentIndex].imageColor} rounded-full flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[currentIndex].author}
                      </h4>
                      <p className="text-gray-400">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    5.0 Rating
                  </span>
                </div>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-semibold">
                    {testimonials[currentIndex].stats}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div
              className={`${testimonials[currentIndex].imageColor} p-8 md:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-48 -translate-x-48"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold mb-6 opacity-80">"</div>
                <div className="text-3xl font-bold mb-4">Client Success</div>
                <p className="text-white/80 text-lg mb-8">
                  Transforming businesses through innovative technology
                  solutions
                </p>

                <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <div className="text-2xl font-bold">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </div>
                  <div className="h-8 w-0.5 bg-white/50"></div>
                  <div className="text-sm">
                    <span className="font-semibold">Case Study</span>
                    <div>{testimonials[currentIndex].company}</div>
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
            className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-gray-300" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-blue-500 w-8"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all"
          >
            <ChevronRight className="h-5 w-5 text-gray-300" />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
