"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Smartphone, Briefcase } from "lucide-react";
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
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    {
      name: "Solutions",
      href: "#",
      submenu: [
        {
          name: "What We Build",
          href: "/ourServices",
          icon: <Smartphone className="h-4 w-4" />,
          description: "iOS, Android, and cross-platform apps",
        },
        {
          name: "Our Portfolio",
          href: "/portfolio",
          icon: <Briefcase className="h-4 w-4" />,
          description: "Explore our successful projects",
        },
      ],
    },
    { name: "Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
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
                      className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px] px-4 py-2 rounded-lg hover:bg-slate-50"
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
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          onMouseLeave={() => setSolutionsOpen(false)}
                          className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl py-2 z-50 border border-slate-200"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="flex items-start gap-3 px-4 py-3 text-slate-700 hover:bg-slate-50 transition-colors duration-200 mx-2 rounded-lg group"
                            >
                              <div className="p-2 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                                {subItem.icon}
                              </div>
                              <div>
                                <div className="font-medium text-slate-900 group-hover:text-blue-600">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">
                                  {subItem.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px] px-4 py-2 rounded-lg hover:bg-slate-50 inline-block relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-[15px] shadow-lg shadow-blue-600/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="py-1">
                      <button
                        onClick={() => {
                          const solutionsItem =
                            document.getElementById("mobile-solutions");
                          if (solutionsItem) {
                            solutionsItem.classList.toggle("hidden");
                          }
                        }}
                        className="flex items-center justify-between w-full py-3 px-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform" />
                      </button>
                      <div
                        id="mobile-solutions"
                        className="hidden ml-4 space-y-2 border-l border-slate-200 pl-4 mt-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 py-2.5 px-3 text-sm text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
                          >
                            <div className="p-1.5 bg-blue-50 rounded-md text-blue-600">
                              {subItem.icon}
                            </div>
                            <div>
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-slate-500">
                                {subItem.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg text-base font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-2 border-t border-slate-200">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
