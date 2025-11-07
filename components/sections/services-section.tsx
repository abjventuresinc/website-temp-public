"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { DynamicBentoGrid } from '../ui/bento-grid/dynamic-bento-grid'
import { Button } from '@/components/ui/buttons/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { CORE_SERVICES, BUSINESS_INFO } from '@/lib/business-config'

interface OurServicesSectionProps {
  city?: string;
  cityData?: {
    sectionContent?: {
      services?: {
        heading?: string;
        subheading?: string;
        highlights?: string[];
        cta?: string;
      };
    };
  };
}

// Unique descriptions for each service
const getServiceDescription = (serviceName: string, city?: string) => {
  const descriptions: Record<string, string> = {
    "Garage Door Installation": city 
      ? `Transform your ${city} home with a stunning new garage door. Custom designs that boost curb appeal and property value.`
      : "From traditional elegance to modern sophistication,we install garage doors that perfectly complement your home&apos;s unique character.",
    "Garage Door Repair": city
      ? `Broken spring? Off-track door? We&apos;ve got ${city} covered with fast, reliable repairs that last.`
      : "That stubborn garage door keeping you stuck? We diagnose and fix it right the first time, backed by our satisfaction guarantee.",
    "Garage Door Maintenance": city
      ? `Keep your ${city} garage door running smooth and quiet with our preventive care programs.`
      : "A well-maintained garage door lasts years longer. Our tune-ups catch small issues before they become expensive problems.",
    "Garage Door Openers": city
      ? `Upgrade to smart garage door technology in ${city}. Control your door from anywhere with modern openers.`
      : "From whisper-quiet belt drives to powerful smart openers,we install and repair all opener types with precision.",
    "Garage Door Replacement": city
      ? `Ready for an upgrade? Give your ${city} home a fresh look with our premium garage door replacement service.`
      : "Sometimes repair isn&apos;t enough. Our replacement service includes removal, disposal, and seamless installation of your dream garage door.",
  };
  return descriptions[serviceName] || `Professional ${serviceName.toLowerCase()} services`;
};

const OurServicesSection = ({ city, cityData }: OurServicesSectionProps) => {
  // Get city-specific content or fallback to defaults
  const servicesContent = cityData?.sectionContent?.services;
  const heading = servicesContent?.heading || (city ? `Expert Garage Door Services in ${city}` : 'Comprehensive Garage Door Solutions');
  const subheading = servicesContent?.subheading || "Whether it&apos;s a quick fix or a complete installation, Mike&apos;s team brings decades of expertise right to your doorstep. We don&apos;t just repair garage doors,we restore your peace of mind.";
  const highlights = servicesContent?.highlights || [
    "Same-day service available for most repairs",
    "All major brands serviced: Clopay, LiftMaster, CHI, Wayne Dalton & more",
    "Upfront pricing with no hidden fees,ever",
    "Comprehensive warranty on all parts and labor"
  ];
  const ctaText = servicesContent?.cta || "Schedule Service Now";

  // Define sizes for bento grid layout
  const sizes = ["large", "wide", "tall", "tall", "small"] as const;
  const variants = ["featured", "featured", "default", "featured", "default"] as const;

  // Service images mapping - Using Mike's actual project photos
  const serviceImages: Record<string, string> = {
    "Garage Door Installation": "/assets/images/Mike_s Garage Door Repair Center 3.webp",
    "Garage Door Repair": "/assets/images/Mike_s Garage Door Repair Center 5.webp",
    "Garage Door Maintenance": "/assets/images/Mike_s Garage Door Repair Center 7.webp",
    "Garage Door Openers": "/assets/images/Mike_s Garage Door Repair Center 10.webp",
    "Garage Door Replacement": "/assets/images/Mike_s Garage Door Repair Center 12.webp",
  };

  // Service cards for the services section with dynamic bento grid
  const bentoGridItems = CORE_SERVICES.slice(0, 5).map((service, index) => ({
    title: service.name,
    imageSrc: serviceImages[service.name] || "/assets/images/garage-door-installation.webp",
    imageAlt: city 
      ? `Professional ${service.name} services in ${city}, ST`
      : `Professional ${service.name} services in ${BUSINESS_INFO.name} service areas`,
    buttonText: "Learn More",
    buttonHref: service.url,
    size: sizes[index] || "small",
    variant: variants[index] || "default",
    description: getServiceDescription(service.name, city)
  }));

  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8">
            {heading}
          </h2>
          {subheading && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
              {subheading}
            </p>
          )}
          {highlights.length > 0 && (
            <div className="max-w-2xl mx-auto mt-8 space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <DynamicBentoGrid items={bentoGridItems} className="max-w-6xl mx-auto" />
        </motion.div>
        
        {/* Services CTA */}
        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact/">
                {ctaText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/garage-door-services/">
                View All Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurServicesSection
