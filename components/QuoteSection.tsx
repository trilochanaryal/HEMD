"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const quotes = [
  {
    text: "Every block of stone has a statue inside it and it is the task of the sculptor to discover it.",
    author: "Michelangelo",
  },
  {
    text: "Research is to see what everybody else has seen, and to think what nobody else has thought.",
    author: "Albert Szent-Györgyi",
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    author: "Albert Einstein",
  },
];

export function QuoteSection() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <blockquote className="text-center">
          <p className="text-xl md:text-2xl font-serif italic text-gray-900 dark:text-white mb-4">
            "{randomQuote.text}"
          </p>
          <footer className="text-gray-600 dark:text-gray-400">
            — <cite>{randomQuote.author}</cite>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
