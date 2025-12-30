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
} from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "finance", label: "Finance" },
    { id: "health", label: "HealthTech" },
    { id: "realestate", label: "Real Estate" },
    { id: "productivity", label: "Productivity" },
    { id: "entertainment", label: "Entertainment" },
  ];

  const projects = [
    {
      id: 1,
      title: "Ucee MFB Bank App",
      category: "finance",
      description:
        "Modern microfinance banking application for seamless digital banking access",
      overview:
        "Ucee MFB is a modern microfinance banking application built to give customers seamless access to digital banking. Petradot designed and developed a secure, intuitive, and high-performance app that meets the strict standards of financial services.",
      rating: 4.2,
      downloads: "5,000+",
      link: "https://play.google.com/store/apps/details?id=com.mfb.unitedcapital",
      icon: <Building className="h-8 w-8" />,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
      features: [
        "Fast and secure user onboarding (KYC integrated)",
        "Smooth fund transfers and account management",
        "In-app card services and transaction history",
        "Scalable infrastructure for real-time banking operations",
      ],
      impact:
        "The app has gained over 5,000+ users with a strong 4.2-star rating, showing high user trust and consistent performance. Ucee MFB successfully moved more of its banking operations into digital channels, increasing customer engagement and retention.",
      stats: [
        {
          label: "User Growth",
          value: "5,000+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "App Rating",
          value: "4.2",
          icon: <Star className="h-4 w-4" />,
        },
        {
          label: "Engagement",
          value: "High",
          icon: <TrendingUp className="h-4 w-4" />,
        },
      ],
    },
    {
      id: 2,
      title: "StableDoc",
      category: "health",
      description:
        "Telemedicine platform for fast, convenient healthcare access",
      overview:
        "StableDoc is a telemedicine and medical concierge platform for fast, convenient healthcare access. Petradot helped the startup bring its idea to life with a smooth, user-friendly mobile experience.",
      rating: 5.0,
      downloads: "500+",
      link: "https://play.google.com/store/search?q=stabledoc&c=apps",
      icon: <Heart className="h-8 w-8" />,
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
      features: [
        "Video consultation and telemedicine modules",
        "Online booking & doctor discovery",
        "Medical record management",
        "Secure in-app payments",
      ],
      impact:
        "With a perfect 5.0-star rating, the app stands out for reliability, simplicity, and excellent user experience — helping StableDoc gain early traction and strong customer satisfaction.",
      stats: [
        {
          label: "Perfect Rating",
          value: "5.0",
          icon: <Star className="h-4 w-4" />,
        },
        {
          label: "Medical Users",
          value: "500+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Satisfaction",
          value: "100%",
          icon: <CheckCircle className="h-4 w-4" />,
        },
      ],
    },
    {
      id: 3,
      title: "LindaSalesPro",
      category: "realestate",
      description:
        "Property sales and management platform for real estate agents",
      overview:
        "LindaSalesPro is a property sales and property management app enabling agents to organize listings, track leads, and manage real estate operations digitally.",
      rating: 5.0,
      downloads: "50+",
      link: "https://play.google.com/store/apps/details?id=online.priceplan",
      icon: <Home className="h-8 w-8" />,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-900/30",
      features: [
        "Property listing and management system",
        "Customer lead tracking",
        "Offline-first architecture for field agents",
        "Clean UI optimized for real estate workflows",
      ],
      impact:
        "Highly rated at 5.0 stars, the app has empowered agents to work more efficiently and close deals faster, helping LindaSalesPro modernize their sales operations.",
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
    },
    {
      id: 4,
      title: "Batimus",
      category: "productivity",
      description:
        "Personal habit assistant for building consistency and motivation",
      overview:
        "Batimus is a personal habit assistant designed to help users build consistency and stay motivated. Petradot built an elegant and lightweight app that encourages productivity and personal growth.",
      rating: null,
      downloads: "100+",
      link: "https://play.google.com/store/apps/details?id=com.batimus.batimus",
      icon: <TrendingUp className="h-8 w-8" />,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
      features: [
        "Habit creation & daily routine planning",
        "Progress tracking with analytics",
        "Reminders & motivational prompts",
        "Minimalistic, clean, and distraction-free design",
      ],
      impact:
        "Since launch, Batimus has achieved 100+ organic downloads, building a growing community of users improving their lifestyle through better habits.",
      stats: [
        {
          label: "Organic Users",
          value: "100+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "Habit Streaks",
          value: "Daily",
          icon: <TrendingUp className="h-4 w-4" />,
        },
        {
          label: "Community",
          value: "Growing",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
    },
    {
      id: 5,
      title: "JuluPay",
      category: "finance",
      description: "Digital card issuing and purchasing platform (Coming Soon)",
      overview:
        "JuluPay is a digital card issuing and purchasing platform that makes buying prepaid and virtual cards fast and convenient. Petradot handled the full mobile app development to ensure speed, security, and a frictionless checkout experience.",
      rating: null,
      downloads: "Coming Soon",
      link: "#",
      icon: <CreditCard className="h-8 w-8" />,
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-900/30",
      features: [
        "Virtual card purchase workflow",
        "Secure transactions & wallet features",
        "Smooth onboarding & identity verification",
        "Modern UI/UX optimized for financial transactions",
      ],
      impact:
        "The app is fully ready for release and positioned to serve a growing digital payments market with a fresh, secure, and customer-focused experience.",
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
          value: "Fintech",
          icon: <TrendingUp className="h-4 w-4" />,
        },
      ],
    },
    {
      id: 6,
      title: "MagicFM Aba",
      category: "entertainment",
      description:
        "Radio streaming platform connecting listeners to live radio worldwide",
      overview:
        "MagicFM Aba is a radio streaming platform that connects listeners to live radio, news, and programs from anywhere in the world. Petradot created a smooth streaming experience with excellent audio quality.",
      rating: 4.4,
      downloads: "1,000+",
      link: "https://play.google.com/store/apps/details?id=ng.com.rad5.magicfmaba",
      icon: <Radio className="h-8 w-8" />,
      iconColor: "text-red-400",
      bgColor: "bg-red-900/30",
      features: [
        "High-quality live radio streaming",
        "Program schedules & updates",
        "In-app notifications for shows",
        "Lightweight build for low data usage",
      ],
      impact:
        "With 1k+ downloads and a strong 4.4-star rating, the app has expanded MagicFM's reach, offering listeners a reliable digital radio experience.",
      stats: [
        {
          label: "Listeners",
          value: "1,000+",
          icon: <Users className="h-4 w-4" />,
        },
        {
          label: "App Rating",
          value: "4.4",
          icon: <Star className="h-4 w-4" />,
        },
        {
          label: "Reach",
          value: "Global",
          icon: <Globe className="h-4 w-4" />,
        },
      ],
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  const statsOverview = [
    { value: "6+", label: "Projects Delivered", color: "text-blue-400" },
    { value: "4.5+", label: "Avg. Rating", color: "text-yellow-400" },
    { value: "6,650+", label: "Total Downloads", color: "text-green-400" },
    { value: "100%", label: "Client Satisfaction", color: "text-purple-400" },
  ];

  return (
    <Section
      id="portfolio"
      className="relative bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Manually add title with white text */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Portfolio</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Explore our diverse portfolio of mobile applications that have
          transformed businesses and delighted users across various industries.
        </p>
      </div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10"
      >
        {statsOverview.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center"
          >
            <div className={`text-3xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Category Filter */}
      <div className="relative z-10 mb-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500 hover:text-blue-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 h-full">
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${project.bgColor}`}>
                    <div className={project.iconColor}>{project.icon}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.rating && (
                      <div className="flex items-center gap-1 bg-gray-900/50 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-white">
                          {project.rating}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 bg-gray-900/50 px-3 py-1 rounded-full">
                      <Download className="h-4 w-4 text-gray-300" />
                      <span className="text-sm font-medium text-gray-300">
                        {project.downloads}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Category Badge */}
                <div className="mb-6">
                  <span className="text-xs font-medium bg-gray-900 text-gray-300 px-3 py-1 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <div className="text-gray-400">{stat.icon}</div>
                        <div className="text-sm font-semibold text-white">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features Preview */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 2 && (
                    <div className="text-sm text-blue-400 font-medium">
                      +{project.features.length - 2} more features
                    </div>
                  )}
                </div>
              </div>

              {/* Footer with CTA */}
              <div className="px-6 py-4 bg-gray-900/50 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {project.id} of {filteredProjects.length} projects
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      project.link === "#"
                        ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {project.link === "#" ? "Coming Soon" : "View Project"}
                    {project.link !== "#" && (
                      <ExternalLink className="h-4 w-4" />
                    )}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
