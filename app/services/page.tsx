import { Metadata } from 'next'
import Link from 'next/link'
import servicesData from '@/data/services.json'
import WhyChooseUsLocationsSection from '@/components/sections/why-choose-us-variants/why-choose-us-locations-section'
import { DynamicHeader } from '@/components/global/dynamic-header'
import { generateMetadataFromConfig } from '@/lib/seo-metadata'
import { siteConfig } from '@/lib/seo-config'

export const metadata: Metadata = generateMetadataFromConfig('/services/')

interface Service {
  id: string
  name: string
  slug: string
  description: string
  content: string
  category: string
  duration: string
  priceRange: string
  isCore: boolean
  parentService: string | null
  features: string[]
  seo: {
    metaTitle: string
    metaDescription: string
    keywords: string
  }
  featuredImage: string
  gallery: string[]
}

export default function ServicesPage() {
  const services: Service[] = servicesData.services.map(service => ({
    ...service,
    priceRange: service.priceRange || service.price || 'Contact for pricing',
    isCore: service.isCore || false,
    parentService: service.parentService || null,
    features: service.features || [],
    uniqueFaqs: service.uniqueFaqs || service.faq || [],
    gallery: service.gallery || []
  }))

  // Get all core services
  const coreServices = services.filter(service => service.isCore)



  // Generate structured data for services page
  const structuredData = [
    // Organization schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}${siteConfig.logo}`,
      "description": siteConfig.description,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phone,
        "contactType": "Customer Support",
        "areaServed": siteConfig.contact.country,
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address,
        "addressLocality": siteConfig.contact.city,
        "addressRegion": siteConfig.contact.state,
        "postalCode": siteConfig.contact.zipCode,
        "addressCountry": siteConfig.contact.country
      },
      "sameAs": Object.values(siteConfig.social).filter(Boolean)
    },
    // Service catalog schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Garage Door Services",
      "description": "Comprehensive garage door services offered by " + siteConfig.name,
      "numberOfItems": coreServices.length,
      "itemListElement": coreServices.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "url": `${siteConfig.url}/${service.slug}`,
          "provider": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": siteConfig.url
          },
          "serviceType": service.category,
          "offers": {
            "@type": "Offer",
            "description": service.description,
            "priceCurrency": "USD"
          }
        }
      }))
    },
    // Breadcrumb schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteConfig.url
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${siteConfig.url}/services/`
        }
      ]
    }
  ]

  return (
    <>
      {/* Structured Data */}
      {structuredData.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      <DynamicHeader
        title="Professional Garage Door Services"
        subtitle="Get to know our services"
        description="Complete solutions for installation, repair, maintenance, and replacement"
        breadcrumbs={[{ label: 'Services', href: '/services/' }]}
      />

      {/* Introduction */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Comprehensive Garage Door Solutions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We&apos;re your one-stop shop for all garage door needs. From brand new installations to emergency repairs, 
              routine maintenance to complete replacements,our expert team delivers professional service you can trust. 
              Our extensive experience means we treat every project with the care and attention it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Core Services
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {coreServices.map((coreService) => (
              <Link
                key={coreService.id}
                href={`/${coreService.slug}`}
                className="block bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-block bg-gray-800 text-text-light px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  Core Service
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {coreService.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {coreService.description}
                </p>
                <div className="mt-4 flex items-center text-gray-700 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subservices Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Specialized Services
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {services.filter(service => !service.isCore).map((subservice) => {
              // Find parent service
              const parentService = services.find(s => s.id === subservice.parentService)
              
              return (
                <Link
                  key={subservice.id}
                  href={`/${subservice.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 hover:border-gray-400 p-6 transition-all duration-200 hover:shadow-md"
                >
                  {parentService && (
                    <div className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {parentService.name}
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                    {subservice.name}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {subservice.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUsLocationsSection />
    </div>
    </>
  )
}

