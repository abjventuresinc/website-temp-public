"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Shield, Users, Clock, MapPin, Zap, Heart, Star } from 'lucide-react'
import { BUSINESS_INFO, LOCATIONS } from '@/lib/business-config'

interface WhatSetsUsApartSectionProps {
  city?: string;
  cityData?: {
    sectionContent?: {
      whySetsApart?: {
        heading?: string;
        subheading?: string;
        features?: Array<{
          title: string;
          description: string;
        }>;
      };
    };
  };
}

const WhatSetsUsApartSection = ({ city, cityData }: WhatSetsUsApartSectionProps) => {
  // Get city-specific content or fallback to defaults
  const whySetsApartContent = cityData?.sectionContent?.whySetsApart;
  const heading = whySetsApartContent?.heading || `What Sets ${BUSINESS_INFO.name} Apart${city ? ` in ${city}` : ''}`;
  const subheading = whySetsApartContent?.subheading || `The truth is, we've been transforming homes with professional garage door solutions for over a decade, and the thing is, our passion shows in every installation we complete. Besides our award-winning garage door services, we specialize in enhancing curb appeal, home security, and property value across ${LOCATIONS[0].state}.`;

  // Icon options for features
  const iconOptions = [
    <Award key="icon-0" className="w-8 h-8 text-primary" />,
    <Shield key="icon-1" className="w-8 h-8 text-primary" />,
    <Users key="icon-2" className="w-8 h-8 text-primary" />,
    <Clock key="icon-3" className="w-8 h-8 text-primary" />,
    <MapPin key="icon-4" className="w-8 h-8 text-primary" />,
    <Zap key="icon-5" className="w-8 h-8 text-primary" />,
    <Heart key="icon-6" className="w-8 h-8 text-primary" />,
    <Star key="icon-7" className="w-8 h-8 text-primary" />
  ];

  // Default features if no city-specific data
  const defaultFeatures = [
    {
      title: "Award-Winning Excellence",
      description: "Recognized for outstanding craftsmanship and customer satisfaction across ST."
    },
    {
      title: "Quality Guarantee",
      description: "Every installation comes with our comprehensive warranty and ongoing support."
    },
    {
      title: "Expert Team",
      description: "Our certified professionals are trained in the latest techniques and use premium materials."
    },
    {
      title: "Timely Delivery",
      description: "We respect your time and schedule with efficient project management."
    }
  ];

  // Use city-specific features or defaults
  const featureData = whySetsApartContent?.features || defaultFeatures;
  
  // Combine feature data with icons
  const features = featureData.map((feature, index) => ({
    icon: iconOptions[index] || <Award className="w-8 h-8 text-primary" />,
    title: feature.title,
    description: feature.description
  }))

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:px-8">
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subheading}
          </p>
        </motion.div>

        <div className="h-[100%] grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card items-center justify-center flex flex-col rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group text-center border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className="mb-1 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <div className="w-20 h-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhatSetsUsApartSection

