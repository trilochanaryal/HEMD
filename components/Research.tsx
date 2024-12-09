import React from 'react';
import Image from 'next/image'; // Don't forget to import the Image component from Next.js
import { research } from '@/consts';

const Research = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Research Highlights</h1>
      {/* Loop through the research array to display each highlight */}
      {research.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-8 mb-8">
          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            width={500} // Define width and height for Next.js Image optimization
            height={300}
            className="w-full md:w-48 h-auto object-cover rounded-lg shadow-md"
          />
          
          {/* Description */}
          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{item.title}</h2>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Research;
