"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, Grid3x3, Phone, Award, ZoomIn } from 'lucide-react'
import ImageModal from '@/components/ui/image-modal'

interface PortfolioProject {
  id: number
  title: string
  category: string
  image: string
  location: string
  date: string
  description: string
  features?: string[]
  client?: string
  duration?: string
  tags?: string[]
}

interface PortfolioClientProps {
  portfolioProjects: PortfolioProject[]
}

export default function PortfolioClient({ portfolioProjects }: PortfolioClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))]

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory)

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    )
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Zoom Button */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/90 mb-2">
                        {project.location} • {project.date}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Award className="w-4 h-4" />
                        <span>Professional Installation</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <Grid3x3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
                <p className="text-gray-600 mb-6">Try selecting a different category to see more projects.</p>
                <Button
                  onClick={() => setSelectedCategory('All')}
                  className="bg-primary hover:bg-primary-hover text-white"
                >
                  View All Projects
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join hundreds of satisfied customers who chose Mike&apos;s Garage Door Repair Center 
              for their garage door needs. Let&apos;s discuss your project today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary-hover text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg">
                <Link href="tel:+18178598877" className="flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  Call 817-859-8877
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-gray-300 hover:border-primary px-10 py-6 text-lg font-bold rounded-xl">
                <Link href="/contact/">
                  Get Free Quote
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={filteredProjects.map(project => ({
          src: project.image,
          alt: project.title,
          title: project.title,
          description: `${project.description} • ${project.location} • ${project.date}`
        }))}
        currentIndex={currentImageIndex}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </>
  )
}
