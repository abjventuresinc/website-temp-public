"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, MapPin } from 'lucide-react'

export default function MissionValuesSection() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "North Texas Quality",
      description: "We use materials and techniques specifically chosen to withstand DFW&apos;s extreme weather, from scorching summers to ice storms."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "DFW Neighbors First",
      description: "We treat every customer like family, understanding that your garage door is essential to your daily life in Bedford and surrounding areas."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" aria-hidden="true" />,
      title: "Local DFW Expertise",
      description: "We know North Texas climate challenges, foundation settling, and what works best for Arlington, Plano, Frisco, and all 45 DFW communities we serve."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission &amp; Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to providing reliable garage door solutions that stand up to North Texas weather 
            while treating every DFW family like our own neighbors.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

