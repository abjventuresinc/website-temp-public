import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, HelpCircle, Phone, Star, Clock, Shield } from 'lucide-react'
import { generateMetadataFromConfig, generateDynamicStructuredData } from '@/lib/seo-metadata'    
import faqData from '@/data/faq.json'
import FAQClient from './faq-client'

export const metadata: Metadata = generateMetadataFromConfig('/faq/')

export default function FAQPage() {
  const structuredData = generateDynamicStructuredData('/faq/', {
    faqData: {
      questions: faqData.faqs.map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))
    }
  })

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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
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
              <HelpCircle className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Questions? We Have Answers!</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                Questions
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Everything you need to know about garage door services, repairs, and installations
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <HelpCircle />, stat: "6", label: "FAQs" },
              { icon: <Clock />, stat: "24/7", label: "Support" },
              { icon: <Star />, stat: "5-Star", label: "Rated" },
              { icon: <Shield />, stat: "100%", label: "Guaranteed" }
            ].map((item, idx) => (
              <div key={idx} className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="text-primary mb-3">{React.cloneElement(item.icon, { className: "w-8 h-8 mx-auto" })}</div>
                <div className="text-3xl font-black text-gray-900 mb-1">{item.stat}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Component for Interactive Features */}
      <FAQClient faqData={faqData} />

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you need installation, repair, or maintenance, we&apos;re here to help!
          </p>
          <Button asChild className="bg-white text-secondary hover:bg-gray-100 px-12 py-6 text-xl font-black rounded-xl shadow-2xl">
            <Link href="tel:+18178598877" className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              817-859-8877
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}