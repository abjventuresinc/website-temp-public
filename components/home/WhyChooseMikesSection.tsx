"use client"

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'
import { CheckCircle, Zap, ThumbsUp, Award, Clock, DollarSign, ArrowRight } from 'lucide-react'

export default function WhyChooseMikesSection() {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning-Fast Response",
      description: "The truth is, garage door emergencies don't wait for business hours. That's why we're available from 7 AM to 11 PM, every single day. Your urgent call? Our immediate priority."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Unmatched Expertise",
      description: "Besides having years of hands-on experience, our technicians stay current with every garage door system on the market. From vintage models to cutting-edge smart openers,we know them inside out."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Honest, Upfront Pricing",
      description: "And here's the thing: we believe in transparency. No hidden fees, no surprise charges,just clear, competitive pricing you can trust. You'll know the cost before we start any work."
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      title: "Satisfaction Guaranteed",
      description: "Therefore, every repair and installation comes backed by our rock-solid guarantee. We don't just fix garage doors,we build lasting relationships with our customers through quality work that stands the test of time."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Same-Day Service Available",
      description: "Got a garage door stuck halfway open at 6 PM? We get it,life doesn't pause. That's exactly why we offer same-day service for most repairs. One call, and we're on our way."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "All Brands, All Models",
      description: "Whether it's a Clopay, LiftMaster, CHI, or any other brand,we service them all. Plus, we work with the best manufacturers to ensure your new garage door perfectly matches your home's character."
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Bedford Trusts Mike&apos;s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Not just another garage door company,we&apos;re your neighbors, committed to keeping every home in our community safe, secure, and running smoothly.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 border border-primary/20">
            <div className="text-left">
              <p className="text-gray-900 font-semibold text-lg mb-1">Ready to experience the Mike&apos;s difference?</p>
              <p className="text-gray-600">Let&apos;s get your garage door working perfectly again.</p>
            </div>
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold whitespace-nowrap"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

