"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const phoneNumber = "+2349161427809";

  const message = "Hello! I would like to know more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, "").replace(/\+/g, "")}?text=${encodeURIComponent(message)}`;

  // Auto-hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip / Quick Message */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 bg-white rounded-lg shadow-lg border border-slate-200 p-4 max-w-[240px] relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 bg-slate-200 rounded-full p-1 hover:bg-slate-300 transition-colors"
            >
              <X className="h-3 w-3 text-slate-600" />
            </button>
            <p className="text-sm text-slate-600">
              👋 Hi there! Chat with us on WhatsApp for quick responses.
            </p>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-slate-200 transform rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Widget */}
      <div className="relative">
        {/* Expandable Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute bottom-20 right-0 bg-white rounded-xl shadow-xl border border-slate-200 w-72 mb-4 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Chat with us</h3>
                    <p className="text-xs text-white/80">
                      Typically replies within 1 hour
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="p-4 border-b border-slate-100">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Quick Questions
                </p>
                <div className="space-y-2">
                  {[
                    "What services do you offer?",
                    "How much does an app cost?",
                    "What's your development timeline?",
                  ].map((question, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        window.open(
                          `https://wa.me/${phoneNumber}?text=${encodeURIComponent(question)}`,
                          "_blank",
                        );
                      }}
                      className="w-full text-left text-sm text-slate-600 hover:text-green-600 hover:bg-green-50 p-2 rounded-lg transition-colors flex items-center justify-between group"
                    >
                      <span>{question}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Start Chat Button */}
              <div className="p-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-all font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  Start WhatsApp Chat
                </a>
                <p className="text-xs text-slate-400 text-center mt-3">
                  Free consultation • No commitment
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="group relative flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple Effect */}
          <motion.div
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0.5, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

          {/* Button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center">
            {isOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.67.15-.23.297-.923.967-1.129 1.171-.206.205-.412.22-.709.066-.297-.15-1.25-.461-2.385-1.475-.882-.788-1.477-1.762-1.653-2.059-.176-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a6.963 6.963 0 00-7.01 6.99c0 1.232.305 2.435.887 3.519l-1.414 5.169 5.3-1.386a6.961 6.961 0 003.237.779h.004c3.837 0 6.959-3.121 6.959-6.959 0-1.857-.786-3.605-2.159-4.817a6.925 6.925 0 00-4.795-1.977M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
              </svg>
            )}
          </div>

          {/* Notification Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white"
          >
            1
          </motion.div>
        </motion.button>
      </div>

      {/* Status Indicator */}
      <div className="absolute bottom-0 right-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-slate-200 text-xs">
        <div className="relative">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-50"
          />
        </div>
        <span className="text-slate-600 font-medium">Online</span>
      </div>
    </div>
  );
}
