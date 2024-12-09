'use client'

import * as React from "react"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'

interface Slide {
  id: number
  title: string
  description: string
  image: string
}

const researchSlides: Slide[] = [
  {
    id: 1,
    title: "Quantum Computing Research",
    description: "Exploring the frontiers of quantum computation and its applications in cryptography.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Pushing the boundaries of artificial intelligence and neural networks.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QUklMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "RF Design",
    description: "Advanced radio frequency circuit design and optimization.",
    image: "https://images.unsplash.com/photo-1580584126903-c17d41830450?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFkaW8lMjBmcmVxdWVuY3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    title: "High-Frequency Devices",
    description: "Development of cutting-edge electromagnetic components.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RvbWFnbmV0aWN8ZW58MHx8MHx8fHww",
  },
  {
    id: 5,
    title: "Metasurfaces",
    description: "Revolutionary electromagnetic wave manipulation techniques.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVhbnR1bSUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
]

const ResearchCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setCurrentSlide(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <Carousel ref={emblaRef} className="w-full max-w-4xl mx-auto" opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {researchSlides.map((slide) => (
          <CarouselItem key={slide.id}>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image src={slide.image} alt={slide.title} layout="fill" objectFit="cover" />
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
  );
};

export default ResearchCarousel;