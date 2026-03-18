"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import {
  Smartphone,
  Building,
  Heart,
  Home,
  CreditCard,
  Radio,
  Star,
  Download,
  ExternalLink,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Globe,
  CheckCircle,
  Briefcase,
  Award,
  Clock,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "finance", label: "FinTech" },
    { id: "health", label: "HealthTech" },
    { id: "realestate", label: "Real Estate" },
    { id: "productivity", label: "Productivity" },
    { id: "entertainment", label: "Entertainment" },
  ];

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
      bgColor: "bg-blue-50",
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
      bgColor: "bg-green-50",
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
    {
      id: 3,
      title: "LindaSalesPro",
      category: "realestate",
      description: "Property management platform for real estate agents",
      overview:
        "A comprehensive property sales and management app enabling agents to organize listings, track leads, and manage real estate operations digitally.",
      rating: 5.0,
      downloads: "50+",
      link: "https://play.google.com/store/apps/details?id=online.priceplan",
      icon: <Home className="h-8 w-8" />,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50",
      features: [
        "Property listing and management system",
        "Customer lead tracking with analytics",
        "Offline-first architecture for field agents",
        "Document management and e-signatures",
      ],
      impact:
        "5-star rated app that has empowered agents to work more efficiently, closing deals 40% faster and modernizing real estate sales operations.",
      stats: [
        {
          label: "Agent Rating",
          value: "5.0",
          icon: <Star className="h-4 w-4" />,
        },
        {
          label: "Properties",
          value: "100+",
          icon: <Home className="h-4 w-4" />,
        },
        {
          label: "Efficiency",
          value: "40%↑",
          icon: <Zap className="h-4 w-4" />,
        },
      ],
      client: "LindaSalesPro",
      year: "2023",
    },
    {
      id: 4,
      title: "Batimus",
      category: "productivity",
      description: "Personal habit assistant for building consistency",
      overview:
        "An elegant habit assistant that helps users build consistency through daily routines, progress tracking, and motivational prompts.",
      rating: null,
      downloads: "100+",
      link: "https://play.google.com/store/apps/details?id=com.batimus.batimus",
      icon: <TrendingUp className="h-8 w-8" />,
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50",
      features: [
        "Habit creation and daily routine planning",
        "Progress tracking with visual analytics",
        "Smart reminders and motivational prompts",
        "Minimalistic, distraction-free design",
      ],
      impact:
        "100+ organic downloads with a growing community of users improving their lifestyle through better habits and daily consistency.",
      stats: [
        {
          label: "Active Users",
          value: "100+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Habits Tracked",
          value: "1k+",
          icon: <TrendingUp className="h-4 w-4" />,
        },
        {
          label: "Retention",
          value: "75%",
          icon: <Award className="h-4 w-4" />,
        },
      ],
      client: "Batimus",
      year: "2024",
    },
    {
      id: 5,
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
      bgColor: "bg-indigo-50",
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
      id: 6,
      title: "MagicFM Aba",
      category: "entertainment",
      description: "Live radio streaming platform",
      overview:
        "A radio streaming platform that connects listeners to live radio, news, and programs from anywhere in the world with excellent audio quality.",
      rating: 4.4,
      downloads: "1,000+",
      link: "https://play.google.com/store/apps/details?id=ng.com.rad5.magicfmaba",
      icon: <Radio className="h-8 w-8" />,
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      features: [
        "High-quality live radio streaming",
        "Program schedules and updates",
        "In-app notifications for shows",
        "Lightweight build for low data usage",
      ],
      impact:
        "1,000+ downloads with a strong 4.4-star rating, expanding MagicFM's reach to a global audience of listeners.",
      stats: [
        {
          label: "Listeners",
          value: "1,000+",
          icon: <Users className="h-4 w-4" />,
        },
        { label: "Rating", value: "4.4", icon: <Star className="h-4 w-4" /> },
        {
          label: "Streams",
          value: "10k+",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
      client: "MagicFM",
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
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
              className="group"
              onMouseEnter={() => setSelectedProject(project.id)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Project Header */}
                <div className="p-6">
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

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-slate-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1 rounded-full capitalize border border-slate-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
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

                  {/* Features Preview */}
                  <div className="space-y-2 mb-4">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                    {project.features.length > 2 && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{project.features.length - 2} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer with CTA */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-slate-400">Client:</div>
                      <div className="text-sm font-medium text-slate-700">
                        {project.client}
                      </div>
                    </div>
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
                      >
                        View Project
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed">
                        Coming Soon
                        <Clock className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
