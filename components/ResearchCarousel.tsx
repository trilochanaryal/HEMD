'use client'

import * as React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { researchCarousel } from '@/consts'
import { ResearchProject } from '@/types'

const ResearchCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setCurrentSlide(emblaApi.selectedScrollSnap())
      })
    }
  }, [emblaApi])

  return (
    <Carousel
      ref={emblaRef}
      className="w-full max-w-4xl mx-auto"
      opts={{ align: 'start', loop: true }}
    >
      <CarouselContent>
        {researchCarousel.map((slide: ResearchProject) => (
          <CarouselItem key={slide.id}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 sm:p-6 text-white w-full">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
                      >
                        {slide.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base"
                      >
                        {slide.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default ResearchCarousel
