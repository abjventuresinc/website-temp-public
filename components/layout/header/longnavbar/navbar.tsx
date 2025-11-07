'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { Button } from '@/components/ui/buttons'
import { Menu, X, ChevronDown, ChevronRight, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NavigationMenuDemo } from './navigation-menu-component'
import servicesData from '@/data/services.json'
import { BUSINESS_INFO } from '@/lib/business-config'

export function LongNavbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [expandedSections, setExpandedSections] = useState<string[]>([])

    // Get core services from services.json
    const coreServices = servicesData.services.filter(service => service.isCore)

    const toggleSection = (section: string) => {
        setExpandedSections(prev => 
            prev.includes(section) 
                ? prev.filter(s => s !== section)
                : [...prev, section]
        )
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setExpandedSections([])
    }

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300","bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
        )}>
            <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2" aria-label={`${BUSINESS_INFO.name} Home`}>
                    <Image
                        src="/assets/config/logo.png"
                        alt={`${BUSINESS_INFO.name} - Garage Door Services`}
                        width={200}
                        height={60}
                        className="h-12 w-auto md:h-16 lg:h-20"
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 120px, (max-width: 1024px) 160px, 192px"
                        quality={95}
                    />
                </Link>
                
                {/* Desktop Navigation with Dropdown Menu */}
                <nav className="hidden xl:block" role="navigation" aria-label="Main navigation">
                    <NavigationMenuDemo />
                </nav>
                
                <div className="hidden xl:flex xl:items-center xl:gap-3">
                    <Button asChild size="sm" className={cn(
                        "bg-primary text-primary-foreground hover:bg-primary-hover font-medium transition-colors duration-200",
                    )}>
                        <Link href="tel:8178598877" aria-label="Call for garage door services">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className={cn(
                        "bg-white text-primary border-primary font-medium transition-colors duration-200",
                    )}>
                        <Link href="/contact" aria-label="Get a free consultation for garage door services">
                            Free Consultation
                        </Link>
                    </Button>
                    
                </div>
                
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className={cn(
                        "xl:hidden p-3 transition-colors duration-200","text-gray-900 hover:bg-gray-100"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="xl:hidden fixed inset-0 bg-black/50 z-[55]" onClick={closeMobileMenu} />
            )}

            {/* Mobile Menu Sidebar */}
            <div 
                className={cn(
                    "xl:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[60]",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                aria-hidden={!isMobileMenuOpen}
            >
                <div className="flex flex-col h-full">
                    {/* Header - Fixed */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
                        <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-2">
                            <Image
                                src="/assets/config/logo.png"
                                alt={`${BUSINESS_INFO.name} - Garage Door Services`}
                                width={150}
                                height={60}
                                className="h-12 w-auto"
                                priority
                                fetchPriority="high"
                                sizes="100px"
                            />
                        </Link>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={closeMobileMenu}
                            className="p-3 text-gray-900 hover:bg-gray-100 rounded-lg"
                            aria-label="Close mobile navigation menu"
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Scrollable Navigation Content */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <nav className="p-4 space-y-2" role="navigation" aria-label="Mobile navigation menu">
                            {/* Home */}
                            <Link 
                                href="/" 
                                className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>

                            {/* Service Areas */}
                            <div className="space-y-1">
                                <button
                                    onClick={() => toggleSection('areas')}
                                    className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-900 uppercase tracking-wide py-4 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-expanded={expandedSections.includes('areas')}
                                    aria-controls="areas-section"
                                    aria-label="Toggle service areas section"
                                >
                                    <span>Service Areas</span>
                                    {expandedSections.includes('areas') ? (
                                        <ChevronDown className="h-4 w-4 text-gray-600" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 text-gray-600" />
                                    )}
                                </button>
                                {expandedSections.includes('areas') && (
                                    <div id="areas-section" className="ml-4 space-y-1 border-l-2 border-primary/40 pl-4" role="region" aria-label="Service areas navigation">
                                        <Link 
                                           href="/service-areas/" 
                                           className="block text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-primary/5"
                                            onClick={closeMobileMenu}
                                        >
                                            View All Service Areas →
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Services */}
                            <div className="space-y-1">
                                <button
                                    onClick={() => toggleSection('services')}
                                    className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-900 uppercase tracking-wide py-4 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-expanded={expandedSections.includes('services')}
                                    aria-controls="services-section"
                                    aria-label="Toggle services section"
                                >
                                    <span>Services</span>
                                    {expandedSections.includes('services') ? (
                                        <ChevronDown className="h-4 w-4 text-gray-600" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 text-gray-600" />
                                    )}
                                </button>
                                {expandedSections.includes('services') && (
                                    <div id="services-section" className="ml-4 space-y-1 border-l-2 border-primary/40 pl-4" role="region" aria-label="Services section navigation">
                                       <Link 
                                           href="/services/" 
                                           className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
                                           onClick={closeMobileMenu}
                                       >
                                           All Services
                                       </Link>
                                       {coreServices.map((service) => (
                                           <Link 
                                               key={service.id}
                                               href={`/${service.slug}`} 
                                               className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
                                               onClick={closeMobileMenu}
                                           >
                                               {service.name}
                                           </Link>
                                       ))}
                                   </div>
                                )}
                            </div>

                            {/* About Us */}
                            <div className="space-y-1">
                                <button
                                    onClick={() => toggleSection('about')}
                                    className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-900 uppercase tracking-wide py-4 px-2 rounded-lg hover:bg-gray-100 transition-colors"
                                    aria-expanded={expandedSections.includes('about')}
                                    aria-controls="about-section"
                                    aria-label="Toggle about section"
                                >
                                    <span>About Us</span>
                                    {expandedSections.includes('about') ? (
                                        <ChevronDown className="h-4 w-4 text-gray-600" />
                                    ) : (
                                        <ChevronRight className="h-4 w-4 text-gray-600" />
                                    )}
                                </button>
                                {expandedSections.includes('about') && (
                                    <div id="about-section" className="ml-4 space-y-1 border-l-2 border-primary/40 pl-4" role="region" aria-label="About section navigation">
                                        <Link 
                                            href="/about/" 
                                            className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
                                            onClick={closeMobileMenu}
                                        >
                                            About Us
                                        </Link>
                                        <Link 
                                            href="/blog/" 
                                            className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
                                            onClick={closeMobileMenu}
                                        >
                                            Blogs
                                        </Link>
                                        <Link 
                                            href="/faq/" 
                                            className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-3 rounded-lg hover:bg-gray-50"
                                            onClick={closeMobileMenu}
                                        >
                                            FAQ
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Portfolio */}
                            <Link 
                                href="/portfolio" 
                                className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50"
                                onClick={closeMobileMenu}
                            >
                                Portfolio
                            </Link>

                            {/* Contact Us */}
                            <Link 
                                href="/contact" 
                                className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-50"
                                onClick={closeMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Action Buttons - Fixed at Bottom */}
                    <div className="p-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm space-y-3">
                        <Button asChild size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary-hover font-medium">
                            <Link href="tel:8178598877" onClick={closeMobileMenu} aria-label="Call for garage door services">
                                <Phone className="w-4 h-4 mr-2 inline" />
                                Call Now
                            </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="w-full bg-white text-primary border-primary font-medium">
                            <Link href="/contact/" onClick={closeMobileMenu} aria-label="Request free consultation">
                                Free Consultation
                            </Link>
                        </Button>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}
