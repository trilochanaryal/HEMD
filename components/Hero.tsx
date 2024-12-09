"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
];

const getRandomImage = () => images[Math.floor(Math.random() * images.length)];

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Optional background grid */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}} 
          className="text-center motion-reduce:transition-none"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Pioneering High-Frequency Engineering
            <br />
            and Metasurface Design
          </h1>
          <p className="text-xl sm:text-2xl lg:text-xl mb-8 text-gray-600 dark:text-gray-300">
            Advancing the frontiers of RF technology and electromagnetic innovation
          </p>
          <Link href="/research">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-blue-500"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Random Image between Research Highlights */}
        <div className="mt-12">
          <img
            src={getRandomImage()}
            alt="Random Research Image"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
