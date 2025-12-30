"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Solutions",
      href: "#",
      submenu: [
        { name: "What We Build", href: "#what-we-build" },
        { name: "Our Portfolio", href: "#portfolio" },
      ],
    },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-lg z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0"
          >
            <Link
              href="#home"
              className="text-2xl font-bold text-blue-400 hover:opacity-90 transition-opacity"
            >
              <Image
                src="/ptd-1.png"
                alt="PTD Logo"
                width={160}
                height={160}
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={item.submenu ? dropdownRef : null}
              >
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => setSolutionsOpen(!solutionsOpen)}
                      onMouseEnter={() => setSolutionsOpen(true)}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-[15px] py-2"
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: solutionsOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="ml-1.5 h-4 w-4" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {solutionsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setSolutionsOpen(false)}
                          className="absolute left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-700"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200 border-l-2 border-transparent hover:border-blue-500 mx-2 rounded-md"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium text-[15px] py-2 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 border-t border-gray-700 shadow-lg"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="py-2">
                      <button
                        onClick={() => {
                          const solutionsItem =
                            document.getElementById("mobile-solutions");
                          if (solutionsItem) {
                            solutionsItem.classList.toggle("hidden");
                          }
                        }}
                        className="flex items-center justify-between w-full py-3 text-gray-300 hover:text-blue-400 text-base font-medium"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform" />
                      </button>
                      <div
                        id="mobile-solutions"
                        className="hidden ml-4 space-y-2 border-l border-gray-700 pl-4 mt-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 text-sm text-gray-400 hover:text-blue-400 hover:bg-gray-700 rounded-lg px-3 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-lg px-3 text-base font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
