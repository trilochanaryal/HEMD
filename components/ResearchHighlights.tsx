'use client'

import { motion } from 'framer-motion'
import ResearchCarousel from './ResearchCarousel'

const ResearchHighlights = () => {
  return (
    <section
      className="py-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      id="research-highlights"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Research Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-3xl mx-auto"
        >
          Our research focuses on pioneering advancements in RF technology and
          electromagnetic innovation. We explore the frontiers of quantum
          computation, AI & machine learning, RF design, high-frequency devices,
          and metasurfaces.
        </motion.p>
      </div>
      <div className="mt-12">
        <ResearchCarousel />
      </div>
    </section>
  )
}

export default ResearchHighlights
