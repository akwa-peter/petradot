"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <Link
                  href="/#home"
                  className="text-2xl font-bold text-blue-400 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/logo.png"
                    alt="PTD Logo"
                    width={160}
                    height={160}
                    className="h-12 w-auto"
                  />
                </Link>
              </motion.div>
            </h3>
            <p className="text-gray-400">
              Building powerful, scalable, and user-friendly mobile apps that
              solve real problems.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Mobile App Development</li>
              <li>UI/UX Design</li>
              <li>Backend Engineering</li>
              <li>Cloud Infrastructure</li>
              <li>MVP Development</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/#about";
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>NDA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Petradot. All rights reserved.</p>
          <p className="mt-2">
            Lagos, Nigeria • info@petradot.com • +234 916 142 7809
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
