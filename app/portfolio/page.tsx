import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, Grid3x3, Phone, Award } from 'lucide-react'
import { generateMetadataFromConfig, generateStructuredData } from '@/lib/seo-metadata'
import PortfolioClient from '@/app/portfolio/portfolio-client'
import portfolioData from '@/data/portfolio.json'

export const metadata: Metadata = generateMetadataFromConfig('/portfolio/')

export default function PortfolioPage() {
  const structuredData = generateStructuredData('/portfolio/')
  const { projects: portfolioProjects, stats } = portfolioData

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
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            height: '100%'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
              <Grid3x3 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Our Work Speaks for Itself</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Project Gallery
              <br />
              <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                Real Transformations
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              The truth is, seeing is believing. Browse our portfolio of completed projects across 
              Dallas-Fort Worth and see the quality craftsmanship that makes us the area&apos;s most trusted 
              garage door company.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">{stats.totalProjects}+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">{stats.serviceAreas}+</div>
                <div className="text-sm text-white/80">Cities Served</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">{stats.yearsExperience}+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-white mb-2">{stats.averageRating}</div>
                <div className="text-sm text-white/80">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <PortfolioClient portfolioProjects={portfolioProjects} />
    </>
  )
}