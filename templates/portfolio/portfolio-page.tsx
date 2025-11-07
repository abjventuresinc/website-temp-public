'use client';

import React, { useState } from 'react';
import Image from '@/components/ui/image';
import { CheckCircle, ExternalLink, MapPin, Calendar, X, Maximize2 } from 'lucide-react';
import { DynamicHeader } from '@/components/global/dynamic-header';
import portfolioData from '@/data/portfolio.json';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All Projects" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === selectedCategory);

  const handleImageClick = (projectId: number) => {
    setExpandedImage(projectId);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Header */}
      <DynamicHeader 
        title="Our Portfolio"
        description="Explore our completed garage door projects across Example City, North Town, South Town, and East Village. See the quality and craftsmanship that sets us apart."
        image="/assets/images/Mike_s Garage Door Repair Center 1.webp"
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio/' }
        ]}
      />

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {portfolioData.stats.totalProjects}+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {portfolioData.stats.happyClients}+
              </div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {portfolioData.stats.yearsExperience}+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {portfolioData.stats.serviceAreas}
              </div>
              <div className="text-gray-600">Service Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', ...Array.from(new Set(portfolioData.projects.map((p: any) => p.category)))].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer h-full"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Card */}
                <div 
                  className="relative aspect-square rounded-xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleImageClick(project.id)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    height={600}
                    width={600}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  
                  {/* Category Tag - Always Visible */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                      <Maximize2 className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>

                  {/* Hover Overlay with Title, Date, Location */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      {project.title && (
                        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                      )}
                      <div className="flex items-center justify-between text-xs text-white/80">
                        {project.location && (
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {project.location}
                          </div>
                        )}
                        {project.date && (
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {project.date}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeExpandedImage}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeExpandedImage}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              {(() => {
                const project = portfolioData.projects.find(p => p.id === expandedImage);
                if (!project) return null;
                
                return (
                  <>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-xl shadow-2xl"
                      sizes="90vw"
                    />
                    
                    {/* Project Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-xl">
                      <div className="text-white">
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-white/80 mb-3">
                          {project.location && (
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {project.location}
                            </div>
                          )}
                          {project.date && (
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {project.date}
                            </div>
                          )}
                        </div>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your garage door needs and create something amazing together. 
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:(555)123-4567"
              className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
