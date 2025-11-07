"use client"

import React from 'react'
import Image from '@/components/ui/image'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Shield, Wrench, Truck } from 'lucide-react'
import { LOCATIONS } from '@/lib/business-config'

export default function ServiceAreasContent() {
  // Get all cities for the comprehensive list
  const allCities = LOCATIONS

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Mike's in Your Area */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Mike&apos;s in Your City?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The truth is, we&apos;ve been the trusted garage door experts across Dallas-Fort Worth for over a decade. 
            And the thing is, our local knowledge combined with professional expertise makes all the difference 
            when it comes to your garage door needs.
          </p>
        </div>

        {/* Service Areas Grid */}
        <div id="all-cities" className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Complete Service Coverage
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
            {allCities.map((city, index) => (
              <Link
                key={index}
                href={city.url || '#'}
                className="group bg-gray-50 hover:bg-primary hover:text-white rounded-lg p-4 transition-all duration-300 border border-gray-200 hover:border-primary hover:shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  <span className="font-medium text-sm">{city.city}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Services with Images */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Garage Door Services
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Garage Door Installation */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/assets/images/Mike_s Garage Door Repair Center 10.webp"
                  alt="Professional garage door installation in Dallas-Fort Worth"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold text-lg">Installation</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Besides our expert installation process, we specialize in creating garage doors that become 
                  the foundation of your home&apos;s security. Therefore, when you choose us, you&apos;re getting 
                  more than just a door – you&apos;re getting peace of mind.
                </p>
                <Link 
                  href="/garage-door-installation/" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Garage Door Repair */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/assets/images/Mike_s Garage Door Repair Center 15.webp"
                  alt="Emergency garage door repair services in Bedford, TX"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold text-lg">Repair</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  The truth is, garage door problems never happen at convenient times. And the thing is, 
                  our 24/7 emergency repair service means we&apos;re there when you need us most. 
                  Besides quick fixes, we provide lasting solutions.
                </p>
                <Link 
                  href="/garage-door-repair/" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Garage Door Maintenance */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src="/assets/images/Mike_s Garage Door Repair Center 20.webp"
                  alt="Professional garage door maintenance in Dallas-Fort Worth"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold text-lg">Maintenance</h4>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Therefore, preventive maintenance isn&apos;t just about avoiding problems – it&apos;s about 
                  extending the life of your investment. Besides regular tune-ups, we offer comprehensive 
                  maintenance plans that keep your garage door running smoothly year-round.
                </p>
                <Link 
                  href="/garage-door-maintenance/" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Local Expertise Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Local Expertise You Can Trust
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Besides our technical expertise, we understand the unique challenges that Dallas-Fort Worth 
              weather and building codes present. And the thing is, our local knowledge combined with 
              professional experience means we deliver solutions that work perfectly in your environment.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quick Response</h4>
                <p className="text-gray-600 text-sm">Same-day service across all 44 cities</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                <p className="text-gray-600 text-sm">Fully licensed for all Texas cities</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Expert Technicians</h4>
                <p className="text-gray-600 text-sm">Certified professionals with local experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Therefore, whether you&apos;re in Bedford, Dallas, Fort Worth, or any of our 44 service areas, 
            we&apos;re here to help. And the best part? Our free consultation is completely tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="tel:+18178598877"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call 817-859-8877
            </Link>
            <Link 
              href="/contact/"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

