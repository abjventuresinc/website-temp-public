"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/buttons/Button'

interface OurPortfolioSectionProps {
  city?: string;
}

const OurPortfolioSection = ({ city }: OurPortfolioSectionProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      title: "Custom Garage Door Installation",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 20.webp",
      imageAlt: "Custom garage door installation by Mike's Garage Door Repair Center in Bedford, TX",
    },
    {
      title: "Modern Garage Door Replacement",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 25.webp",
      imageAlt: "Modern garage door replacement project in Dallas-Fort Worth area",
    },
    {
      title: "Premium Garage Door Repair",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 30.webp",
      imageAlt: "Professional garage door repair service in Bedford, TX",
    },
    {
      title: "Residential Garage Door Service",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 35.webp",
      imageAlt: "Residential garage door installation and repair in Fort Worth",
    },
    {
      title: "Commercial Garage Door Solutions",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 40.webp",
      imageAlt: "Commercial garage door installation in Dallas-Fort Worth",
    },
    {
      title: "Garage Door Opener Installation",
      imageSrc: "/assets/images/Mike_s Garage Door Repair Center 45.webp",
      imageAlt: "Smart garage door opener installation by Mike's team",
    },
  ]

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? portfolioItems.length - 1 : selectedImage - 1);
    }
  }

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === portfolioItems.length - 1 ? 0 : selectedImage + 1);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Portfolio{city ? ` in ${city}` : ''}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See the Mike&apos;s difference for yourself. Every project represents our unwavering commitment to quality craftsmanship and customer satisfaction{city ? ` throughout ${city} and the entire Dallas-Fort Worth area` : ' across the Dallas-Fort Worth metroplex'}. These aren&apos;t just garage doors,they&apos;re security, style, and peace of mind combined.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setSelectedImage(index)}
                className="group block w-full text-left cursor-pointer"
                aria-label={`View ${item.title} image`}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Eye Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Eye className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    {/* Service Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <Link href="/portfolio">
                <Eye className="w-4 h-4 mr-2" />
                View Full Portfolio
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Start Your Project
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={portfolioItems[selectedImage].imageSrc}
                  alt={portfolioItems[selectedImage].imageAlt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Image Title */}
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white">
                  {portfolioItems[selectedImage].title}
                </h3>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full">
                <p className="text-white text-sm">
                  {selectedImage + 1} / {portfolioItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OurPortfolioSection
