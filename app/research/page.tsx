import { research } from '@/consts';
import Image from 'next/image';
import Link from 'next/link';

export default function ResearchPage() {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Research Highlights
      </h1>
      
      {research.map((item) => (
        <div key={item.id} className="flex flex-col md:flex-row-reverse md:space-x-reverse md:space-x-8 mb-8">
          {/* Image */}
          <div className="relative w-full md:w-48">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          
          {/* Description */}
          <div className="mt-4 md:mt-0 flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {item.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {item.description.slice(0, 200)}...
            </p>
            <Link
              href={`/research/${item.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Read More
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}