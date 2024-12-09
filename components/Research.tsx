import React from 'react';
import Image from 'next/image'; // Don't forget to import the Image component from Next.js

// Array of research data
const research = [
  {
    title: 'Advanced Electromagnetic Metamaterials',
    description: ' This research focuses on the development of advanced electromagnetic metamaterials that can manipulate light and electromagnetic waves in novel ways. These materials enable groundbreaking applications in communication, sensing, and energy harvesting.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'
  },
  {
    title: 'Quantum Computing for Electromagnetic Applications',
    description: 'Our research investigates the use of quantum computing techniques for simulating complex electromagnetic fields, pushing the limits of computational efficiency and accuracy.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'
  },
  {
    title: 'Wireless Power Transfer through Metamaterials',
    description: 'This project explores how electromagnetic metamaterials can enhance wireless power transfer systems, improving efficiency and reducing losses in applications like electric vehicle charging and IoT devices.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'
  },
  {
    title: 'Smart Antennas for 5G Networks',
    description: 'We are designing smart antennas optimized for 5G networks, which will provide enhanced coverage, reduced interference, and faster data transmission, paving the way for next-generation mobile communication.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'
  },
  {
    title: 'Metasurfaces for Medical Imaging',
    description: 'This research explores the use of electromagnetic metasurfaces to improve medical imaging techniques such as MRI and ultrasound, offering the potential for higher resolution and reduced scanning times.',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8'
  }
];

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
