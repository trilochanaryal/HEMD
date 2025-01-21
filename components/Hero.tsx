'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { heroImages } from '@/consts'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center motion-reduce:transition-none"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Pioneering High-Frequency Engineering
            <br />
            and Metasurface Design
          </h1>
          <p className="text-xl sm:text-2xl lg:text-xl mb-8 text-gray-600 dark:text-gray-300">
            Advancing the frontiers of RF technology and electromagnetic
            innovation
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

        <div className="mt-12">
          <Image
            src={'/img/pic6.jpg'}
            alt="Random Research Image"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
