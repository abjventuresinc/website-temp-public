import React from 'react'
import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { generateMetadataFromConfig, generateStructuredData } from '@/lib/seo-metadata'
// import ContactFormComponent from '@/components/contact/ContactFormComponent'
import ContactInfo from '@/components/contact/ContactInfo'
import { DynamicHeader } from '@/components/global/dynamic-header'
import { CONTACT } from '@/lib/business-config'
// Generate metadata using the hybrid approach
export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataFromConfig('/contact/')
}

const page = () => {
  // Generate structured data for contact page
  const structuredData = generateStructuredData('/contact/');

  return (
    <>
      {/* Add structured data scripts */}
      {structuredData.map((script) => (
        <script
          key={script.id}
          type={script.type}
          dangerouslySetInnerHTML={{ __html: script.children }}
        />
      ))}
      
      {/* Calendar booking script */}
      <Script 
        src="https://link.msgsndr.com/js/form_embed.js" 
        strategy="lazyOnload"
      />
      
      <div className="min-h-screen overflow-x-hidden">
        <DynamicHeader
          title="Contact Mike&apos;s Garage Door Repair Center"
          description="Get in touch for a free consultation and quote. We serve Bedford, Dallas, Fort Worth, and all surrounding areas with professional garage door services."
          image="/assets/images/Mike_s Garage Door Repair Center 1.webp"
          breadcrumbs={[{ label: 'Contact', href: '/contact/' }]}
        />
        
        {/* Quick Contact Section - Most Important First */}
        <section className="py-16 md:py-20 lg:py-24 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Choose the best way to reach us. We&apos;re here to help with all your garage door needs.
                </p>
              </div>

              {/* Contact Options Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                {/* Phone - Most Prominent */}
                <div className="bg-primary text-white p-8 text-center group hover:shadow-2xl transition-all duration-300 rounded-xl">
                  <div className="bg-white/20 p-4 w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Call Now</h3>
                  <p className="text-white/90 mb-6 text-sm">Talk to us right away</p>
                  <a 
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center justify-center bg-white text-primary hover:bg-white/90 px-6 py-3 font-semibold transition-colors text-lg w-full rounded-lg"
                  >
                    {CONTACT.phone}
                  </a>
                  <p className="text-xs text-white/80 font-medium mt-4">Emergency help available 24/7</p>
                </div>

                {/* Quick Quote Form */}
                <div className="lg:col-span-2 w-full">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Your Free Quote</h3>
                    <div className="w-16 h-1 bg-primary mb-6"></div>
                    <p className="text-gray-600 mb-6 text-sm">
                      Fill out this form and we&apos;ll send you a personalized quote within 24 hours.
                    </p>
                    <div className="w-full" style={{ minHeight: '630px', height: 'auto' }}>
                      <iframe
                        src="https://api.leadconnectorhq.com/widget/form/5mrT5cbMZCuRJA0ZEFoa"
                        style={{
                          width: '100%',
                          height: '100%',
                          minHeight: '630px',
                          border: 'none',
                          borderRadius: '3px'
                        }}
                        id="inline-5mrT5cbMZCuRJA0ZEFoa"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Long Form 1"
                        data-height="626"
                        data-layout-iframe-id="inline-5mrT5cbMZCuRJA0ZEFoa"
                        data-form-id="5mrT5cbMZCuRJA0ZEFoa"
                        title="Long Form 1"
                        className="rounded-lg w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Contact Information & Hours */}
        <section className="py-16 md:py-20 lg:py-24 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-gray-600">
                  Here&apos;s how you can reach us.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ContactInfo />
                
                {/* Additional Info Card */}
                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Where We Work</h3>
                    <div className="w-12 h-1 bg-primary mb-4"></div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      We&apos;re proud to serve the greater Dallas-Fort Worth area, including Bedford, Dallas, Fort Worth, Arlington, and all surrounding communities.
                    </p>
                    <Link
                      href="/service-areas/"
                      className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                    >
                      See All Areas We Serve
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Why Choose Mike&apos;s?</h3>
                    <div className="w-12 h-1 bg-primary mb-4"></div>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></span>
                        <span className="font-medium">Fully Licensed and Insured</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></span>
                        <span className="font-medium">Same Day Service Available</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></span>
                        <span className="font-medium">Emergency Service 24/7</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></span>
                        <span className="font-medium">Quality Workmanship Guaranteed</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary mr-3 flex-shrink-0 rounded-full"></span>
                        <span className="font-medium">Free Estimates on All Services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Appointment Booking Section */}
        <section className="py-16 md:py-20 lg:py-24 px-4 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Schedule Your Garage Door Service
                </h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Pick a time that works for you. We&apos;ll be there to help with your garage door needs.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 lg:p-8 w-full shadow-md">
                <div className="w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] h-auto">
                  <iframe 
                    src="https://api.leadconnectorhq.com/widget/booking/NouzX9J9fTQn6OabCTOl" 
                    style={{
                      width: '100%',
                      minHeight: '500px',
                      height: 'auto',
                      border: 'none',
                      overflow: 'hidden',
                      maxWidth: '100%'
                    }} 
                    scrolling="no" 
                    id="NouzX9J9fTQn6OabCTOl_1761257830701"
                    title="Schedule Appointment"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page