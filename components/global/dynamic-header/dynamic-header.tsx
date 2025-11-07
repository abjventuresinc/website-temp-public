'use client';

import React from 'react';
import Link from 'next/link';
import Image from '@/components/ui/image';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/buttons';

interface CTAButton {
  text: string;
  link: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface DynamicHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  badges?: string[];
  cta?: {
    primary?: CTAButton;
    secondary?: CTAButton;
  };
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

const DynamicHeader: React.FC<DynamicHeaderProps> = ({ 
  title,
  subtitle,
  description,
  image = "/assets/images/Mike_s Garage Door Repair Center 1.webp",
  badges,
  cta,
  breadcrumbs,
  className = ""
}) => {

  return (
    <div className={`relative min-h-[60vh] flex justify-center align-center pt-20 items-center bg-gradient-to-br from-primary via-primary-hover to-accent overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-primary-hover/70 to-accent/70"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="text-center max-w-4xl mx-auto">
            
           

            {/* Description */}
            {description && (
              <p className="text-lg text-text-light/80 mb-1 leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            )}
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-text-light">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <h2 className="text-xl md:text-2xl text-text-light/90 mb-6 font-medium">
                {subtitle}
              </h2>
            )}


            {/* CTA Buttons */}
            {cta && (
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-8">
                {cta.primary && (
                  <Button
                    asChild
                    variant={cta.primary.variant || 'default'}
                    size={cta.primary.size || 'lg'}
                  >
                    <Link href={cta.primary.link}>
                      {cta.primary.text}
                    </Link>
                  </Button>
                )}
                {cta.secondary && (
                  <Button
                    asChild
                    variant={cta.secondary.variant || 'outline'}
                    size={cta.secondary.size || 'lg'}
                  >
                    <Link href={cta.secondary.link}>
                      {cta.secondary.text}
                    </Link>
                  </Button>
                )}
              </div>
            )}
             {/* Badges */}
             {badges && badges.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {badges.map((badge, index) => (
                  <span 
                    key={index}
                    className="bg-background/20 backdrop-blur-sm text-text-light px-3 py-1 rounded-full text-sm font-medium border border-background/30"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="flex items-center justify-center text-text-light/80 text-sm">
                <Link href="/" className="flex items-center hover:text-text-light transition-colors">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </Link>
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    <ChevronRight className="h-4 w-4 mx-2 text-text-light/60" />
                    <Link 
                      href={breadcrumb.href}
                      className="hover:text-text-light transition-colors"
                    >
                      {breadcrumb.label}
                    </Link>
                  </React.Fragment>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeader;
