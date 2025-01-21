'use client';
import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How to create an account?",
      answer:
        "Interactively procrastinate high-payoff content without backward-compatible data. Quickly to cultivate optimal processes and tactical architectures.",
    },
    {
      question: "Do you provide any support for this kit?",
      answer:
        "Yes, we provide extensive support for our kits. You can reach out to us anytime, and we’ll be happy to assist you.",
    },
    {
      question: "How long do you provide support?",
      answer:
        "We provide lifetime support for our kits, ensuring you get the best experience possible.",
    },
    {
        question: "How long do you provide support?",
        answer:
          "We provide lifetime support for our kits, ensuring you get the best experience possible.",
      },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-start mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions?</h2>
          <p className="text-gray-600">
            FAQ provides quick answers to common inquiries, helping users resolve doubts efficiently.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
