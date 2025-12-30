"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "For MVPs",
      price: "From ₦450,000",
      features: [
        "Basic features",
        "Prototype development",
        "Fast delivery",
        "Basic UI/UX",
        "App Store submission",
        "1-month support",
      ],
      notIncluded: [
        "Custom backend",
        "Advanced integrations",
        "Long-term support",
      ],
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Growth",
      description: "For SMEs",
      price: "₦1M – ₦3.5M",
      features: [
        "Custom features",
        "Backend integration",
        "Better scalability",
        "Advanced UI/UX",
        "Third-party APIs",
        "3-month support",
        "Performance optimization",
        "Technical documentation",
      ],
      notIncluded: ["Enterprise security", "Dedicated team", "24/7 monitoring"],
      color: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom Solutions",
      price: "Custom Pricing",
      features: [
        "Advanced systems",
        "Complex integrations",
        "Long-term development",
        "Dedicated team",
        "Enterprise security",
        "24/7 monitoring",
        "Custom SLAs",
        "White-label solutions",
        "Ongoing maintenance",
      ],
      notIncluded: [],
      color: "border-gray-700",
      buttonColor: "bg-gray-700 hover:bg-gray-600",
    },
  ];

  return (
    <Section
      id="pricing"
      className="bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Pricing Plans</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Flexible pricing to fit different stages of your business
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative bg-gray-800 rounded-2xl shadow-xl border-t-4 ${
              plan.color
            } ${plan.popular ? "transform md:scale-105" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-gray-400 mt-2">{plan.description}</p>

              <div className="my-6">
                <div className="text-3xl font-bold text-white">
                  {plan.price}
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  Prices vary based on project complexity
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-white">Includes:</h4>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}

                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-white mt-6">
                      Not Included:
                    </h4>
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg font-semibold transition-colors`}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-400">
          Need a custom solution?{" "}
          <a
            href="#contact"
            className="text-blue-400 font-semibold hover:underline"
          >
            Contact us
          </a>{" "}
          for a personalized quote.
        </p>
      </div>
    </Section>
  );
};

export default Pricing;
