"use client"

import React from 'react'
import Image from '@/components/ui/image'
import { motion } from 'framer-motion'

export default function OurStorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Mike&apos;s Garage Door Repair Center began in Bedford with a straightforward mission: to provide 
              reliable garage door services that North Texas families can count on through every season and storm.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over 6 years of experience serving the DFW metroplex, we&apos;ve built our reputation on 
              understanding North Texas weather challenges, quality craftsmanship, and treating every customer 
              like a neighbor. Our team brings expertise in installation, repair, maintenance, and emergency 
              services tailored to our region&apos;s unique needs.
            </p>
            <p className="text-lg text-gray-700">
              We&apos;re proud to serve Bedford, Arlington, Plano, Frisco, and 41 other DFW communities, 
              providing garage door solutions that withstand North Texas heat, ice storms, and everything in between.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/Mike_s Garage Door Repair Center 14.webp"
              alt="Mike's Garage Door Repair Center team at work"
              fill
              className="object-cover w-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

