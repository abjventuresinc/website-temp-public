import Link from 'next/link';
import Image from '@/components/ui/image';
import { CheckCircle, ArrowRight, Star, Shield, Clock, Award, Users, Wrench } from 'lucide-react';
import ServicesSidebar from '@/components/ui/service-sidebar/ServicesSidebar';
import servicesData from '@/data/services.json';
import { DynamicHeader } from '@/components/global/dynamic-header';
import FAQSection from '@/components/sections/faq-section';
import CTASection from '@/components/sections/cta-section';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  // Get related services (same parent or siblings)
  const relatedServices = service.isCore
    ? servicesData.services.filter(s => s.parentService === service.id).slice(0, 3)
    : servicesData.services.filter(s => s.parentService === service.parentService && s.id !== service.id).slice(0, 3);

  // Get parent service if this is a subservice
  const parentService = service.parentService
    ? servicesData.services.find(s => s.id === service.parentService)
    : null;

  // Use enhanced FAQs if available, otherwise generate default FAQs
  const faqs = service?.uniqueFaqs || [
    {
      question: `How long does ${service.name.toLowerCase()} take?`,
      answer: `Typically, our ${service.name.toLowerCase()} service takes ${service.duration}. However, the exact timeline depends on the specific requirements and complexity of your project.`
    },
    {
      question: "What is included in the service?",
      answer: `Our ${service.name.toLowerCase()} includes: comprehensive service, and more. We provide comprehensive solutions tailored to your needs.`
    },
    {
      question: "Do you offer warranties?",
      answer: "Yes, we stand behind our work with comprehensive warranties. All our services come with a satisfaction guarantee and quality workmanship warranty."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Simply contact us for a free consultation. We'll discuss your needs, provide a detailed quote, and schedule your service at your convenience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Header - Full Width */}
      <DynamicHeader  title={service.name} description={service.description} image={service.featuredImage || "/assets/images/licensed-garage-door-company.webp"} breadcrumbs={[{ label: 'Services', href: '/garage-door-services/' }, { label: service.name, href: `/${service.slug}` }]} />

      {/* Main Content - Sidebar + Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-12">
            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <aside className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24">
                <ServicesSidebar currentSlug={slug} />
              </div>
            </aside>

            {/* Mobile Sidebar - Collapsible on mobile */}
            <aside className="lg:hidden w-full mb-6">
              <ServicesSidebar currentSlug={slug} />
            </aside>

            {/* Main Content */}
            <main className="flex flex-col w-full lg:w-3/4 gap-8 lg:gap-12">
               {/* Hero Intro Section */}
               <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-100">
                 <div className="grid lg:grid-cols-2 gap-12 items-center">
                   <div className="space-y-6">
                     <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                       <Star className="w-4 h-4" />
                       Professional Service
                     </div>
                     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                       About {service.name}
                     </h2>
                     <div className="prose max-w-none text-gray-600">
                       <p className="text-xl leading-relaxed font-medium">{service.description}</p>
                     </div>
                     <div className="flex flex-wrap gap-4">
                       <div className="flex items-center gap-2 text-gray-600">
                         <Clock className="w-5 h-5 text-primary" />
                         <span className="font-medium">{service.duration}</span>
                       </div>
                       <div className="flex items-center gap-2 text-gray-600">
                         <Shield className="w-5 h-5 text-primary" />
                         <span className="font-medium">Warranty Included</span>
                       </div>
                     </div>
                   </div>
                   <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                     <Image
                       src={service.featuredImage || "/assets/images/garage-door-installation.webp"}
                       alt={`${service.name} service in Dallas, Fort Worth, Arlington, Bedford, TX`}
                       height={700}
                       width={600}
                       className="object-cover w-full h-full rounded-3xl"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                       <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                         <p className="text-gray-800 font-semibold">Professional Installation</p>
                         <p className="text-gray-600 text-sm">Licensed & Insured</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

              {/* Enhanced Opening Section - if available */}
              {service?.contentVariations?.opening && (
                <div className="bg-gradient-to-br from-primary/5 via-white to-primary/5 rounded-2xl p-8 sm:p-10 shadow-lg border border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Choose Our {service.name}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.contentVariations.opening}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Section */}
              {service.content && (
                <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100">
                  <div className="space-y-8">
                    {service.content.split('\n\n').map((block, blockIndex) => {
                      const lines = block.split('\n');
                      
                      // Function to parse bold text
                      const parseBold = (text: string) => {
                        const parts = text.split(/(\*\*.*?\*\*)/g);
                        return parts.map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>;
                          }
                          return part;
                        });
                      };
                      
                      // Handle headings
                      if (lines[0].startsWith('### ')) {
                        return (
                          <h3 key={blockIndex} className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 mb-3">
                            {lines[0].replace('### ', '')}
                          </h3>
                        );
                      }
                      
                      if (lines[0].startsWith('## ')) {
                        return (
                          <h2 key={blockIndex} className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            {lines[0].replace('## ', '')}
                          </h2>
                        );
                      }
                      
                      // Handle lists
                      if (lines.some(line => line.startsWith('- '))) {
                        return (
                          <ul key={blockIndex} className="space-y-3 ml-4">
                            {lines.filter(line => line.startsWith('- ')).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                                <CheckCircle className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                <span>{parseBold(item.replace('- ', ''))}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      
                      // Handle paragraphs
                      if (block.trim()) {
                        return (
                          <p key={blockIndex} className="text-gray-700 leading-relaxed">
                            {parseBold(block)}
                          </p>
                        );
                      }
                      
                      return null;
                    })}
                  </div>
                </div>
              )}

              {/* Enhanced Why Choose Section - if available */}
              {service?.contentVariations?.whyChoose && (
                <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-2xl p-8 sm:p-10 shadow-lg border border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/20 p-4 rounded-2xl">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                        Why Choose Our {service.name}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.contentVariations.whyChoose}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Benefits/Features */}
              <div className="bg-gradient-to-br bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Key Features & Benefits
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover what makes our {service.name.toLowerCase()} service stand out from the competition
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.features?.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    {service.isCore ? 'Our Specialized Services' : 'Related Services'}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedServices.map((relatedService) => (
                      <Link
                        key={relatedService.id}
                        href={`/${relatedService.slug}`}
                        className="group bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Wrench className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                              {relatedService.name}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                              {relatedService.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-primary font-semibold inline-flex items-center">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {relatedService.duration}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

               {/* Enhanced Closing Section - if available */}
               {service?.contentVariations?.closing && (
                <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 rounded-2xl p-8 sm:p-10 shadow-lg border border-primary/20">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/20 p-4 rounded-2xl">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.contentVariations.closing}
                      </p>
                    </div>
                  </div>
                </div>
              )}

               {/* FAQ Section */}
               <FAQSection faqs={faqs} />

               {/* CTA Section */}
               
            </main>
          </div>
        </div>
      </section>
        <CTASection/>
    </div>
  );
}

