"use client";

import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Link from "next/link";
import {
  Building,
  Heart,
  CreditCard,
  Star,
  Download,
  ExternalLink,
  TrendingUp,
  Shield,
  Users,
  CheckCircle,
  Briefcase,
  Award,
  Clock,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const HomeProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Ucee MFB",
      category: "finance",
      description:
        "Modern microfinance banking application for seamless digital banking access",
      overview:
        "A secure, intuitive microfinance banking app that gives customers seamless access to digital banking services. Built to meet strict financial services standards.",
      rating: 4.2,
      downloads: "5,000+",
      link: "https://play.google.com/store/apps/details?id=com.mfb.unitedcapital",
      icon: <Building className="h-8 w-8" />,
      iconColor: "text-blue-600",
      bgColor: "bg-red-700",
      image: "/ucee.webp", // Add your image paths
      features: [
        "Fast and secure user onboarding with KYC integration",
        "Smooth fund transfers and account management",
        "In-app card services and transaction history",
        "Real-time banking operations with scalable infrastructure",
      ],
      impact:
        "5,000+ active users with a strong 4.2-star rating, demonstrating high user trust and consistent performance. Successfully digitized banking operations, increasing customer engagement and retention.",
      stats: [
        {
          label: "Active Users",
          value: "5,000+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "App Rating",
          value: "4.2",
          icon: <Star className="h-4 w-4" />,
        },
        {
          label: "Transactions",
          value: "10k+",
          icon: <TrendingUp className="h-4 w-4" />,
        },
      ],
      client: "Ucee MFB",
      year: "2023",
    },
    {
      id: 2,
      title: "JuluPay",
      category: "finance",
      description: "Digital card issuing and purchasing platform",
      overview:
        "A digital card issuing platform that makes buying prepaid and virtual cards fast, secure, and convenient with a frictionless checkout experience.",
      rating: null,
      downloads: "Coming Soon",
      link: "#",
      icon: <CreditCard className="h-8 w-8" />,
      iconColor: "text-indigo-600",
      bgColor: "bg-green-700",
      image: "/Julupay.png",
      features: [
        "Virtual card purchase and management",
        "Secure transactions with wallet features",
        "Smooth identity verification (KYC)",
        "Modern UI optimized for financial transactions",
      ],
      impact:
        "Ready for launch in the growing digital payments market, offering a fresh, secure, and customer-focused financial experience.",
      stats: [
        {
          label: "Status",
          value: "Ready",
          icon: <CheckCircle className="h-4 w-4" />,
        },
        {
          label: "Security",
          value: "Bank-Level",
          icon: <Shield className="h-4 w-4" />,
        },
        {
          label: "Market",
          value: "FinTech",
          icon: <TrendingUp className="h-4 w-4" />,
        },
      ],
      client: "JuluPay",
      year: "2024",
    },
    {
      id: 3,
      title: "StableDoc",
      category: "health",
      description:
        "Telemedicine platform connecting patients with doctors instantly",
      overview:
        "A telemedicine and medical concierge platform that provides fast, convenient healthcare access through video consultations and digital health records.",
      rating: 5.0,
      downloads: "500+",
      link: "https://play.google.com/store/search?q=stabledoc&c=apps",
      icon: <Heart className="h-8 w-8" />,
      iconColor: "text-green-600",
      bgColor: "bg-blue-300",
      image: "/stabledoc.webp",
      features: [
        "Video consultation and telemedicine modules",
        "Online booking and doctor discovery",
        "Secure medical record management",
        "HIPAA-compliant in-app payments",
      ],
      impact:
        "Perfect 5.0-star rating with exceptional user satisfaction. Helped StableDoc gain early traction and establish trust in the competitive telemedicine market.",
      stats: [
        { label: "Rating", value: "5.0", icon: <Star className="h-4 w-4" /> },
        {
          label: "Consultations",
          value: "1k+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Satisfaction",
          value: "100%",
          icon: <CheckCircle className="h-4 w-4" />,
        },
      ],
      client: "StableDoc",
      year: "2023",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory,
  );

  const statsOverview = [
    {
      value: "6+",
      label: "Projects Delivered",
      icon: <Briefcase className="h-5 w-5" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      value: "4.5+",
      label: "Avg. Rating",
      icon: <Star className="h-5 w-5" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      value: "7,000+",
      label: "Total Downloads",
      icon: <Download className="h-5 w-5" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      icon: <Award className="h-5 w-5" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <Section id="portfolio" className="relative bg-white">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium mb-6 border border-blue-100"
          >
            <Briefcase className="h-4 w-4" />
            <span>Our Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Featured <span className="text-blue-600">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Explore our diverse portfolio of mobile applications that have
            transformed businesses and delighted users across various
            industries.
          </motion.p>
        </div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {statsOverview.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
                <div>
                  <div className={`text-2xl font-bold text-slate-900`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[500px] rounded-2xl overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Product Image - Always visible */}
              <div className="absolute inset-0 w-full h-full">
                <div
                  className={`w-full h-full ${project.bgColor} flex items-center justify-center`}
                >
                  {/* Placeholder for product image - replace with actual images */}
                  <div className="text-center">
                    <p className="text-slate-400 text-sm">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg"
                      />
                    </p>
                  </div>
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Project Title - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>

              {/* Hover Card - Appears on hover */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-white/95 backdrop-blur-sm p-6 overflow-y-auto z-20"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${project.bgColor}`}>
                        <div className={project.iconColor}>{project.icon}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        {project.rating && (
                          <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium text-slate-700">
                              {project.rating}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                          <Download className="h-4 w-4 text-slate-500" />
                          <span className="text-sm font-medium text-slate-700">
                            {project.downloads}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full capitalize border border-slate-200">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 mb-4">
                      {project.overview}
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {project.stats.map((stat, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 bg-slate-50 rounded-lg"
                        >
                          <div className="flex items-center justify-center gap-1 mb-1">
                            <div className="text-blue-600">{stat.icon}</div>
                            <div className="text-sm font-semibold text-slate-900">
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-xs text-slate-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-2">
                      {project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
                        >
                          View Project
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed">
                          Coming Soon
                          <Clock className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            View More Projects
            <ExternalLink className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default HomeProjects;
