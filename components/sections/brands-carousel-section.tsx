"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from '@/components/ui/image'

const BrandsCarouselSection = () => {
  const brands = [
    {
      name: "Amarr",
      logo: "/assets/brands/brands we work with Amarr logo.webp",
      alt: "Amarr Garage Doors Logo"
    },
    {
      name: "Clopay",
      logo: "/assets/brands/brands we work with Clopay-GoldBar.webp",
      alt: "Clopay Garage Doors Logo"
    },
    {
      name: "LiftMaster",
      logo: "/assets/brands/brands we work with Liftmaster garage doors-Logo.webp",
      alt: "LiftMaster Garage Door Openers Logo"
    },
    {
      name: "CHI Overhead Doors",
      logo: "/assets/brands/brands we work with CHI overhead doors logo.webp",
      alt: "CHI Overhead Doors Logo"
    },
    {
      name: "Wayne Dalton",
      logo: "/assets/brands/Brands we work with Wayne Dalton logo.webp",
      alt: "Wayne Dalton Garage Doors Logo"
    },
    {
      name: "Raynor",
      logo: "/assets/brands/brands we work with raynor garage doors logo.webp",
      alt: "Raynor Garage Doors Logo"
    },
    {
      name: "Genie",
      logo: "/assets/brands/brands we work with Genie The Brand you Trust garage door logo.webp",
      alt: "Genie Garage Door Openers Logo"
    },
    {
      name: "Overhead Door",
      logo: "/assets/brands/brands we work with overhead-door-logo.webp",
      alt: "Overhead Door Corporation Logo"
    },
    {
      name: "Guardian",
      logo: "/assets/brands/brands we wortk with Guardian access and door hardware garage door logo.webp",
      alt: "Guardian Access and Door Hardware Logo"
    },
    {
      name: "Arrow Tru-Line",
      logo: "/assets/brands/brands we work with Arrow Tru-Line garage doors logo.webp",
      alt: "Arrow Tru-Line Garage Doors Logo"
    }
  ]

  return (
    <section className="py-16 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trusted Brands We Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re proud to install, repair, and service garage doors from the industry&apos;s most respected manufacturers.
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-secondary to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-secondary to-transparent z-10" />
          
          {/* Auto-scrolling brands */}
          <div className="flex animate-scroll">
            {/* First set of brands */}
            <div className="flex items-center space-x-16 flex-shrink-0">
              {brands.map((brand, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex items-center justify-center h-20 w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={160}
                    height={80}
                    style={{ height: 'auto', width: 'auto', maxHeight: '4rem' }}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 flex-shrink-0 ml-16">
              {brands.map((brand, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex items-center justify-center h-20 w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={160}
                    height={80}
                    style={{ height: 'auto', width: 'auto', maxHeight: '4rem' }}
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default BrandsCarouselSection

