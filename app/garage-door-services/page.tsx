import React from 'react'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, CheckCircle, Clock, Shield, Star, Phone, Wrench, Truck, Zap, Award, Calendar } from 'lucide-react'
import { generateMetadataFromConfig } from '@/lib/seo-metadata'

export async function generateMetadata() {
  return generateMetadataFromConfig('/garage-door-services/')
}

export default function GarageDoorServicesPage() {

  const coreServices = [
    {
      name: "Garage Door Installation",
      slug: "/garage-door-installation/",
      description: "Professional installation of residential and commercial garage doors with expert craftsmanship and quality materials.",
      image: "/assets/images/Mike_s Garage Door Repair Center 10.webp",
      features: ["Residential Installation", "Commercial Installation", "Custom Design", "Warranty Included"]
    },
    {
      name: "Garage Door Repair",
      slug: "/garage-door-repair/",
      description: "Fast, reliable repair services for all garage door issues, from broken springs to track alignment.",
      image: "/assets/images/Mike_s Garage Door Repair Center 15.webp",
      features: ["Emergency Service", "Spring Replacement", "Track Repair", "Panel Replacement"]
    },
    {
      name: "Garage Door Maintenance",
      slug: "/garage-door-maintenance/",
      description: "Preventive maintenance plans to keep your garage door running smoothly and extend its lifespan.",
      image: "/assets/images/Mike_s Garage Door Repair Center 20.webp",
      features: ["Tune-Up Service", "Lubrication", "Inspection", "Preventive Plans"]
    },
    {
      name: "Garage Door Openers",
      slug: "/garage-door-openers/",
      description: "Installation and repair of garage door openers, including smart and traditional models.",
      image: "/assets/images/Mike_s Garage Door Repair Center 8.webp",
      features: ["Opener Installation", "Smart Openers", "Remote Programming", "Battery Backup"]
    },
    {
      name: "Garage Door Replacement",
      slug: "/garage-door-replacement/",
      description: "Complete garage door replacement with modern, energy-efficient options for your home or business.",
      image: "/assets/images/Mike_s Garage Door Repair Center 12.webp",
      features: ["Steel Doors", "Wooden Doors", "Insulated Options", "Custom Colors"]
    }
  ];

  const subServices = [
    {
      category: "Installation",
      services: [
        { name: "Residential Garage Door Installation", slug: "/residential-garage-door-installation/" },
        { name: "Commercial Garage Door Installation", slug: "/commercial-garage-door-installation/" },
        { name: "Custom Garage Door Design", slug: "/custom-garage-doors/" }
      ]
    },
    {
      category: "Repair",
      services: [
        { name: "Broken Spring Repair", slug: "/broken-spring-replacement/" },
        { name: "Cable Replacement", slug: "/garage-door-cable-repair/" },
        { name: "Track Alignment", slug: "/track-alignment/" },
        { name: "Panel Replacement", slug: "/panel-replacement/" },
        { name: "Emergency Garage Door Repair", slug: "/emergency-garage-door-service/" }
      ]
    },
    {
      category: "Maintenance",
      services: [
        { name: "Tune-Up and Inspection", slug: "/tune-up-inspection/" },
        { name: "Lubrication and Balancing", slug: "/lubrication-balancing/" },
        { name: "Preventive Maintenance Plans", slug: "/preventive-maintenance/" }
      ]
    },
    {
      category: "Openers",
      services: [
        { name: "Opener Installation", slug: "/opener-installation/" },
        { name: "Opener Repair", slug: "/garage-door-opener-repair/" },
        { name: "Smart Garage Door Openers", slug: "/smart-garage-door-openers/" }
      ]
    },
    {
      category: "Replacement",
      services: [
        { name: "Steel Garage Doors", slug: "/steel-garage-doors/" },
        { name: "Wooden Garage Doors", slug: "/wooden-garage-doors/" },
        { name: "Glass & Aluminum Garage Doors", slug: "/glass-aluminum-garage-doors/" },
        { name: "Insulated Garage Doors", slug: "/insulated-garage-doors/" }
      ]
    }
  ];

  return (
    <>
      {/* Ultra-Modern Hero Section with Floating Elements */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary -gradient-xy"></div>
        
        {/* Geometric Shapes - Floating Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl -pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -pulse" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-white">
                {/* Trust Badge with Animation */}
                <div
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20"
                >
                  <div>
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="font-semibold">Dallas-Fort Worth&apos;s #1 Garage Door Experts</span>
                </div>

                {/* Main Headline with Gradient Text */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  Your Garage Door
                  <br />
                  <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent -gradient-x">
                    Experts Are Here
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                  From emergency repairs at midnight to custom installations that transform your home – 
                  we deliver garage door solutions that exceed expectations.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary-200 mb-1">10+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary-200 mb-1">1000+</div>
                    <div className="text-sm text-white/80">Happy Clients</div>
                  </div>
                  <div
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-primary-200 mb-1">24/7</div>
                    <div className="text-sm text-white/80">Emergency Service</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div  >
                    <Button 
                      asChild 
                      className="bg-white text-secondary hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl -all duration-300"
                    >
                      <Link href="tel:+18178598877" className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        Call 817-859-8877
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                  <div  >
                    <Button 
                      asChild 
                      variant="outline"
                      className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary text-white px-8 py-6 text-lg font-bold rounded-xl -all duration-300"
                    >
                      <Link href="/contact/" className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        Schedule Service
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column - Floating Service Cards */}
              <div
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Service Card 1 */}
                  <div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 -all duration-300"
                  >
                    <div className="bg-primary-200 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                      <Wrench className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Installation</h3>
                    <p className="text-white/70 text-sm">Custom garage door installations</p>
                  </div>

                  {/* Service Card 2 */}
                  <div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 -all duration-300 mt-8"
                  >
                    <div className="bg-primary-200 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Repair</h3>
                    <p className="text-white/70 text-sm">Emergency repair services</p>
                  </div>

                  {/* Service Card 3 */}
                  <div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 -all duration-300"
                  >
                    <div className="bg-primary-200 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Maintenance</h3>
                    <p className="text-white/70 text-sm">Preventive maintenance plans</p>
                  </div>

                  {/* Service Card 4 */}
                  <div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 -all duration-300 mt-8"
                  >
                    <div className="bg-primary-200 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Replacement</h3>
                    <p className="text-white/70 text-sm">Complete door replacement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section - New section under hero */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Mike&apos;s Is Different
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The truth is, we&apos;ve been doing this long enough to know what homeowners and businesses truly need. 
              And the thing is, our approach isn&apos;t just about fixing doors – it&apos;s about building relationships 
              that last for years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/Mike_s Garage Door Repair Center 18.webp"
                alt="Professional garage door technician at work in Dallas-Fort Worth"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning-Fast Response Times</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Besides our 24/7 availability, we pride ourselves on arriving quickly when emergencies strike. 
                    Therefore, when your garage door breaks at 2 AM, you won&apos;t be left waiting until morning – 
                    we&apos;re already on our way.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing, No Surprises</h3>
                  <p className="text-gray-600 leading-relaxed">
                    And here&apos;s the thing: nobody likes hidden fees. That&apos;s why we provide upfront, 
                    detailed quotes before any work begins. Besides being fair, it&apos;s simply the right way 
                    to do business.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The truth is, we don&apos;t just fix garage doors – we ensure they work flawlessly. 
                    Therefore, every job comes with our 100% satisfaction guarantee. And the best part? 
                    Most of our business comes from happy customers telling their neighbors about us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Showcase - Bento Grid Style */}
      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
        
        {/* Floating Elements */}
        <div
          className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
              What We Do
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Exceptionally Well
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The truth is, we&apos;ve perfected five core services. And here&apos;s the thing: each one is delivered 
              with the precision that&apos;s made us Dallas-Fort Worth&apos;s most trusted garage door company.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {/* Large Feature Card - Installation */}
            <div
              className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 md:p-12 hover:shadow-2xl -all duration-500"
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={coreServices[0].image}
                  alt="Garage Door Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <Wrench className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm">Most Popular</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
                    {coreServices[0].name}
                  </h3>
                  <p className="text-white/90 text-lg mb-6 max-w-xl">
                    {coreServices[0].description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {coreServices[0].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div  >
                  <Button asChild className="bg-white text-primary hover:bg-gray-100 px-8 py-6 rounded-xl font-bold">
                    <Link href={coreServices[0].slug} className="flex items-center gap-2">
                      Explore Installation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Two Medium Cards - Repair & Maintenance */}
            <div
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white p-8 hover:shadow-2xl -all duration-500 border border-gray-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="bg-red-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {coreServices[1].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {coreServices[1].description}
                </p>
                <div >
                  <Link href={coreServices[1].slug} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 -all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white p-8 hover:shadow-2xl -all duration-500 border border-gray-200"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {coreServices[2].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {coreServices[2].description}
                </p>
                <div >
                  <Link href={coreServices[2].slug} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 -all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Two More Cards - Openers & Replacement */}
            <div
              className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/90 to-secondary p-8 hover:shadow-2xl -all duration-500"
            >
              <div className="absolute inset-0 opacity-10">
                <Image
                  src={coreServices[3].image}
                  alt="Garage Door Openers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {coreServices[3].name}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {coreServices[3].description}
                </p>
                <div  >
                  <Button asChild className="bg-white text-secondary hover:bg-gray-100 px-6 py-3 rounded-xl font-bold">
                    <Link href={coreServices[3].slug} className="flex items-center gap-2">
                      View Openers
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="md:col-span-3 group relative overflow-hidden rounded-3xl bg-white p-8 hover:shadow-2xl -all duration-500 border border-gray-200"
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
              <div className="relative z-10">
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  {coreServices[4].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {coreServices[4].description}
                </p>
                <div  >
                  <Button asChild className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold">
                    <Link href={coreServices[4].slug} className="flex items-center gap-2">
                      View Options
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div

            className="mt-16 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <div>
                <Truck className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-3xl font-black mb-2">Same-Day</h4>
                <p className="text-white/80">Emergency service available 24/7 across Dallas-Fort Worth</p>
              </div>
              <div>
                <Shield className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-3xl font-black mb-2">Lifetime Warranty</h4>
                <p className="text-white/80">Comprehensive warranty options on all major installations</p>
              </div>
              <div>
                <Star className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h4 className="text-3xl font-black mb-2">5-Star Rated</h4>
                <p className="text-white/80">Over 1000+ satisfied customers and counting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Specialized Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Therefore, we offer specialized services that address specific needs and situations. 
              Besides our core offerings, these targeted solutions ensure we can handle any garage door challenge.
            </p>
          </div>

          <div className="space-y-12">
            {subServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      href={service.slug}
                      className="group bg-gray-50 hover:bg-primary hover:text-white rounded-lg p-4 -all duration-300 border border-gray-200 hover:border-primary"
                    >
                      <div className="flex items-center gap-3">
                        <Wrench className="w-5 h-5 text-primary group-hover:text-white -colors" />
                        <span className="font-medium">{service.name}</span>
                        <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 -transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Mike&apos;s?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The truth is, when it comes to garage door services, experience and expertise matter. 
              And the thing is, our track record speaks for itself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600 text-sm">Same-day service across Dallas-Fort Worth</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully licensed for all Texas cities</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified professionals with local experience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">5-Star Rated</h3>
              <p className="text-gray-600 text-sm">Thousands of satisfied customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Therefore, whether you need a quick repair or a complete installation, we&apos;re here to help. 
              And the best part? Our free consultation is completely tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl -all duration-300"
              >
                <Link href="tel:+18178598877" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call 817-859-8877
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary text-white px-8 py-4 text-lg font-semibold rounded-lg -all duration-300"
              >
                <Link href="/contact/" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
