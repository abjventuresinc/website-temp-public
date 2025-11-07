import React from 'react'
import Link from 'next/link'
import { FileText, Phone } from 'lucide-react'
import { generateMetadataFromConfig, generateStructuredData } from '@/lib/seo-metadata'

export async function generateMetadata() {
  return generateMetadataFromConfig('/terms/')
}

export default function TermsPage() {
  const structuredData = generateStructuredData('/terms/')

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the services of Mike's Garage Door Repair Center (referred to as 'we,' 'us,' or 'our'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services."
    },
    {
      title: "2. Services Provided",
      content: "Mike's Garage Door Repair Center provides garage door installation, repair, maintenance, opener installation and repair, and replacement services throughout Bedford, TX and the greater Dallas-Fort Worth metroplex. All services are subject to availability and scheduling."
    },
    {
      title: "3. Service Area",
      content: "Our primary service area includes Bedford and 44+ cities throughout Dallas-Fort Worth, including but not limited to Arlington, Fort Worth, Dallas, Plano, Irving, Grapevine, Southlake, Keller, Euless, Hurst, Colleyville, and surrounding communities."
    },
    {
      title: "4. Pricing and Payment",
      content: "All pricing is provided as estimates and may vary based on the actual condition of your garage door system, required parts, and labor. Final pricing will be confirmed before work begins. We accept cash, checks, and all major credit cards. Payment is due upon completion of service unless otherwise arranged."
    },
    {
      title: "5. Warranties",
      content: "We stand behind our work with comprehensive warranties. Parts are covered by manufacturer warranties (typically 1-5 years). Our labor is warranted for one year from the date of service. Warranty terms may vary based on the specific service provided and will be detailed in your service agreement."
    },
    {
      title: "6. Scheduling and Cancellations",
      content: "We strive to accommodate your schedule and offer flexible appointment times. If you need to cancel or reschedule an appointment, please contact us at least 24 hours in advance. Emergency services are available 24/7 and will be prioritized based on urgency and availability."
    },
    {
      title: "7. Property Access and Safety",
      content: "You agree to provide safe and clear access to the garage door and work area. We will take reasonable precautions to protect your property during service, but are not responsible for damage to vehicles, stored items, or property not directly related to the garage door work being performed."
    },
    {
      title: "8. Emergency Services",
      content: "Emergency repair services are available 24/7. Emergency service may include additional fees due to after-hours scheduling, urgent parts procurement, or immediate response requirements. Emergency service pricing will be clearly communicated before work begins."
    },
    {
      title: "9. Limitation of Liability",
      content: "Our liability is limited to the cost of services provided. We are not responsible for indirect, incidental, or consequential damages. Our maximum liability for any claim shall not exceed the amount paid for the specific service in question."
    },
    {
      title: "10. Professional Standards",
      content: "All work is performed by licensed, insured, and trained technicians in accordance with industry standards and local building codes. We maintain comprehensive liability insurance and workers' compensation coverage for your protection."
    },
    {
      title: "11. Customer Responsibilities",
      content: "Customers are responsible for providing accurate information about their garage door system, reporting any issues or concerns immediately, maintaining clear access to the work area, and ensuring payment is available at time of service completion."
    },
    {
      title: "12. Modifications to Terms",
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of any modifications."
    },
    {
      title: "13. Contact Information",
      content: `For questions about these terms or our services, please contact us at 817-859-8877, email service@mikesgaragedoorrepaircenter.com, or visit us at 1300 Airport Fwy, Bedford, TX 76022.`
    }
  ]

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
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            
            
            
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-6 border border-white/20">
              <FileText className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Legal Information</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Last Updated */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200">
              <p className="text-gray-600">
                <strong className="text-gray-900">Last Updated:</strong> January 2024
              </p>
              <p className="text-gray-600 mt-2">
                <strong className="text-gray-900">Effective Date:</strong> January 1, 2024
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">
                Welcome to Mike&apos;s Garage Door Repair Center
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                These Terms and Conditions govern your use of our services and website. By engaging our services, 
                you agree to these terms. We are committed to providing transparent, fair, and professional garage 
                door services to the Bedford, TX and Dallas-Fort Worth communities.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  
                  
                  
                  
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 border-2 border-primary/20">
              <div className="text-center">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Have Questions About Our Terms?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re happy to clarify any of these terms. Contact us anytime!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+18178598877"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    Call 817-859-8877
                  </Link>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Also see our:</p>
              <Link href="/privacy-policy/" className="text-primary hover:underline font-semibold">
                Privacy Policy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}