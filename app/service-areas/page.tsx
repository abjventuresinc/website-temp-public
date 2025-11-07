import React from 'react'
import { Metadata } from 'next'
import { generateStructuredData } from '@/lib/seo-metadata'
import ServiceAreasHero from "@/components/sections/service-areas-hero"
import ServiceAreasContent from "@/components/sections/service-areas-content"
import CTASection from "@/components/sections/cta-section"

import { generateMetadataFromConfig } from '@/lib/seo-metadata'

export const metadata: Metadata = generateMetadataFromConfig('/service-areas/');

const page = () => {
  // Generate structured data for service areas page
  const structuredData = generateStructuredData('/service-areas/');

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
      
      <div className="min-h-screen">
        <ServiceAreasHero />
        <ServiceAreasContent />
        <CTASection />
      </div>
    </>
  )
}
  
export default page