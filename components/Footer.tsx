"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  Smartphone,
  Palette,
  Server,
  Cloud,
  Rocket,
} from "lucide-react";

const Footer = () => {
  const services = [
    {
      name: "Mobile App Development",
      icon: <Smartphone className="h-4 w-4" />,
    },
    { name: "UI/UX Design", icon: <Palette className="h-4 w-4" /> },
    { name: "Backend Engineering", icon: <Server className="h-4 w-4" /> },
    { name: "Cloud Infrastructure", icon: <Cloud className="h-4 w-4" /> },
    { name: "MVP Development", icon: <Rocket className="h-4 w-4" /> },
  ];

  const quickLinks = [
    { name: "Home", href: "/#home" },
    { name: "About Us", href: "/#about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "NDA Template", href: "/nda" },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/petradot",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/petradot",
      label: "Twitter",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/petradot",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info - 2 columns */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Link href="/#home" className="inline-block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                  <span className="text-xl font-bold text-slate-900">
                    Petradot
                  </span>
                </div>
              </Link>

              <p className="text-slate-600 leading-relaxed max-w-sm">
                Building powerful, scalable, and user-friendly mobile
                applications that solve real business problems and drive growth.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a
                    href="mailto:info@petradot.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    info@petradot.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <a
                    href="tel:+2349161427809"
                    className="hover:text-blue-600 transition-colors"
                  >
                    +234 916 142 7809
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              {/* <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div> */}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-slate-900 mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-slate-600 flex items-center gap-2"
                  >
                    <span className="text-blue-600">{service.icon}</span>
                    {service.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-slate-200 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Petradot. All rights reserved.
            </p>

            {/* Trust Badge */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-slate-500">Enterprise Ready</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
