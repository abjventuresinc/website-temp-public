"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import cities from '@/data/cities.json'

const ServiceAreasThinSection = () => {

  // Map cities to the expected structure
  const serviceAreas = cities.cities.map(city => ({
      name: city.name,
      state: city.state,
      href: `/${city.slug}/`
    }))

  return (
    <section className="py-12 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-semibold text-foreground">
              Our Service Areas
            </h2>
          </div>
          
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Professional installation, repair, and maintenance services across all service areas
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={area.href}
                  className="inline-flex items-center px-4 py-2 bg-card text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md"
                >
                  {area.name}, {area.state}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              href="/service-areas/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover font-medium text-sm transition-colors duration-300"
            >
              View All Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceAreasThinSection

