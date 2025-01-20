import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { research } from '@/consts';

export const ResearchDetail = ({ id }: { id: string }) => {
  const item = research?.find((item) => item?.id === id);
  console.log('Research item:', item);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-xl text-gray-600 mb-4">Research item not found.</p>
        <Link
          href="/research"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Back to Research
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/research"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800"
        >
          ← Back to Research
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {item.title}
        </h1>
        
        <Image
          src={item.image}
          alt={item.title}
          width={800}
          height={450}
          className="w-full h-auto object-cover rounded-lg shadow-md mb-8"
        />
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </section>
  );
};

