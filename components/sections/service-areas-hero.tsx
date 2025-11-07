"use client"

import React from 'react'
import Image from '@/components/ui/image'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'
import { MapPin, Clock, Phone, Star, CheckCircle, ArrowRight } from 'lucide-react'
import { LOCATIONS } from '@/lib/business-config'

export default function ServiceAreasHero() {
  // Get top 6 cities for display
  const topCities = LOCATIONS.slice(0, 6)
  
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Mike_s Garage Door Repair Center 5.webp"
          alt="Professional garage door services across Dallas-Fort Worth metroplex"
          fill
          className="object-cover opacity-15"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-white font-semibold">Serving 44+ Cities in Texas</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Garage Door Services in{' '}
            <span className="text-primary-300">Dallas-Fort Worth</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            The truth is, we&apos;ve been transforming homes and businesses across the metroplex for over a decade. 
            And the thing is, our passion for excellence shows in every project we touch.
          </p>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-primary-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">24/7 Emergency Service</h3>
              <p className="text-white/80 text-sm">We&apos;re there when you need us most, day or night</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-primary-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">44+ Cities Covered</h3>
              <p className="text-white/80 text-sm">From Bedford to Dallas, we serve your entire area</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="w-8 h-8 text-primary-300 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">5-Star Rated</h3>
              <p className="text-white/80 text-sm">Thousands of satisfied customers can&apos;t be wrong</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              asChild 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="tel:+18178598877" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 817-859-8877
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              <Link href="/contact/" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Top Cities Grid */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-white text-2xl font-bold mb-6">Serving These Cities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {topCities.map((city, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                  <CheckCircle className="w-4 h-4 text-primary-300 flex-shrink-0" />
                  <span className="text-sm font-medium">{city.city}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link 
                href="#all-cities" 
                className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 font-semibold transition-colors"
              >
                View All 44 Cities
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

