"use client"

import React from 'react'
import Image from '@/components/ui/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/buttons/Button'
import Link from 'next/link'

interface CTASectionProps {
  city?: string;
  cityData?: {
    sectionContent?: {
      cta?: {
        heading?: string;
        subheading?: string;
        primaryCTA?: string;
        secondaryCTA?: string;
      };
    };
  };
}

const CTASection = ({ city, cityData }: CTASectionProps) => {
  // Get city-specific CTA content or use defaults
  const ctaContent = cityData?.sectionContent?.cta;
  const heading = ctaContent?.heading || `Ready to Start Your Project${city ? ` in ${city}` : ''}?`;
  const subheading = ctaContent?.subheading || (city 
    ? `Join hundreds of satisfied ${city} customers who trust us with their most important projects. Get your free consultation today and experience the difference local expertise makes.`
    : `Get your free consultation today and let&apos;s bring your vision to life with professional expertise you can trust.`
  );
  const secondaryCTA = ctaContent?.secondaryCTA || 'Free Consultation';
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/Mike_s Garage Door Repair Center 18.webp"
          alt="Professional garage door service background"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-primary/90" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            {heading}
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-12">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="group bg-white text-primary hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Link href="tel:+18178598877">
                <Phone className="w-4 h-4 mr-2" />
                Call 817-859-8877
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary text-white shadow-xl transition-all duration-300">
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                {secondaryCTA}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
