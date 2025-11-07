"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from '@/components/ui/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/buttons/Button'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/business-config'

interface AboutUsSimpleSectionProps {
  city?: string;
}

const AboutUsSimpleSection = ({ city }: AboutUsSimpleSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container py-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About {BUSINESS_INFO.name}{city ? ` in ${city}` : ''}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {city 
                ? `Serving ${city} with pride, we've been the trusted name in garage door services for over a decade. The truth is, our local expertise combined with professional craftsmanship makes us the go-to choice for homeowners and businesses throughout the area. Besides our award-winning garage door installations, we specialize in creating secure, beautiful systems tailored to ${city} homes.`
                : `The truth is, we've been transforming homes with professional garage door solutions for over a decade, and the thing is, our passion shows in every project we touch. Besides our award-winning garage door installations, we specialize in creating secure, beautiful garage door systems that enhance your property.`
              }
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              {city
                ? `When ${city} residents choose Mike's Garage Door Repair Center, they're choosing a team dedicated to excellence. Our commitment to quality workmanship, transparent pricing, and exceptional customer service has made us the most trusted garage door company in the area. From emergency repairs to custom installations, we deliver results that exceed expectations.`
                : `Therefore, when you choose us, you're not just getting a service, you're getting a team that treats your vision as our own. And the best part? Our clients consistently tell us we exceed their expectations with every garage door project we complete.`
              }
            </p>

            {/* Key points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">{city ? `${city} Local Experts` : 'Local Expertise'}:</strong> {city ? `Based in Bedford, TX, serving ${city} with` : 'Deep understanding of Dallas-Fort Worth garage door needs and'} fast response times and climate-specific solutions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Licensed & Insured:</strong> Fully licensed, bonded, and insured for complete peace of mind
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Customer Satisfaction:</strong> 98% satisfaction rate with over 1,200 happy clients{city ? ` throughout ${city} and surrounding areas` : ''}
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button size="lg" asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/Mike_s Garage Door Repair Center 15.webp"
                alt={`${BUSINESS_INFO.name} professional garage door installation in Bedford, TX`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSimpleSection

