"use client";

import { motion } from "framer-motion";
import { quotes } from "@/consts";

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
