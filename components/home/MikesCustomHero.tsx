"use client"

import React from 'react'
import Image from '@/components/ui/image'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'
import { Phone, Clock, Shield, Star, ArrowRight } from 'lucide-react'

export default function MikesCustomHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/Mike_s Garage Door Repair Center 1.webp"
          alt="Professional garage door installation and repair in Bedford, TX"
          fill
          className="object-cover opacity-20"
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-semibold">Bedford&apos;s Most Trusted Since Day One</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Your Garage Door Problem?
                <span className="block text-primary mt-2">We&apos;ve Got This.</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed">
                From broken springs at dawn to emergency repairs at midnight,Mike&apos;s team delivers fast, reliable garage door solutions when you need them most.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Open 7 AM - 11 PM</h3>
                  <p className="text-sm text-gray-200">Every day of the week</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-200">Fully certified professionals</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 817-859-8877
                </Link>
              </Button>
              
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary font-semibold text-lg px-8 py-6 transition-all duration-300"
              >
                <Link href="/services" className="inline-flex items-center gap-2">
                  View All Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="pt-6 border-t border-white/20">
              <p className="text-gray-200 text-sm mb-2">Serving the Greater Dallas-Fort Worth Area</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white/10 px-3 py-1 rounded-full">Bedford</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Dallas</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Fort Worth</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">Arlington</span>
                <span className="bg-white/10 px-3 py-1 rounded-full">+40 More Cities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/assets/images/Mike_s Garage Door Repair Center 2.webp"
                  alt="Mike's Garage Door Repair Center team installing premium garage door in Bedford, TX"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[500px]"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-6 shadow-2xl">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">1000+</div>
                      <div className="text-xs text-gray-600 mt-1">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">24/7</div>
                      <div className="text-xs text-gray-600 mt-1">Emergency Service</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">44</div>
                      <div className="text-xs text-gray-600 mt-1">Cities Served</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20 animate-pulse animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

