import React from 'react'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText, Phone, Mail, CheckCircle } from 'lucide-react'
import { generateMetadataFromConfig, generateStructuredData } from '@/lib/seo-metadata'

export async function generateMetadata() {
  return generateMetadataFromConfig('/privacy-policy/')
}

export default function PrivacyPolicyPage() {
  const structuredData = generateStructuredData('/privacy-policy/')

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <Eye />,
      content: "We collect information that you provide directly to us when you request services, including your name, address, phone number, email address, and details about your garage door system. We may also collect information about your service history, appointments, and communications with us to better serve your needs."
    },
    {
      title: "2. How We Use Your Information",
      icon: <FileText />,
      content: "We use your information to provide, maintain, and improve our garage door services; to schedule appointments and send service reminders; to respond to your questions and requests; to send you important updates about our services; and to comply with legal obligations. We do not sell your personal information to third parties."
    },
    {
      title: "3. Information Sharing",
      icon: <Shield />,
      content: "We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information with service providers who assist us in operating our business (such as scheduling software or payment processors), but only to the extent necessary to provide our services to you."
    },
    {
      title: "4. Data Security",
      icon: <Lock />,
      content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "5. Cookies and Tracking",
      content: "Our website may use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookies through your browser settings."
    },
    {
      title: "6. Third-Party Links",
      content: "Our website may contain links to third-party websites (such as manufacturer websites or social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information."
    },
    {
      title: "7. Your Rights",
      content: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications while still receiving service-related messages. To exercise these rights, please contact us at 817-859-8877 or service@mikesgaragedoorrepaircenter.com."
    },
    {
      title: "8. Children's Privacy",
      content: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately so we can delete it."
    },
    {
      title: "9. California Privacy Rights",
      content: "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information (though we do not sell personal information)."
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website with an updated effective date. Your continued use of our services constitutes acceptance of the updated policy."
    },
    {
      title: "11. Contact Information for Privacy Concerns",
      content: "If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: Mike's Garage Door Repair Center, 1300 Airport Fwy, Bedford, TX 76022, Phone: 817-859-8877, Email: service@mikesgaragedoorrepaircenter.com"
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
              <Shield className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Your Privacy Matters</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We are committed to protecting your personal information
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
                Our Commitment to Your Privacy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At Mike&apos;s Garage Door Repair Center, we take your privacy seriously. This Privacy Policy 
                explains how we collect, use, protect, and share your personal information when you use our 
                garage door services in Bedford, TX and throughout Dallas-Fort Worth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The truth is, we only collect information necessary to provide you with excellent service. 
                We never sell your data, and we protect it with industry-standard security measures.
              </p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  
                  
                  
                  
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  {section.icon && (
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      {React.cloneElement(section.icon, { className: "w-6 h-6" })}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Key Privacy Principles */}
            <div className="mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 border-2 border-primary/20">
              <h3 className="text-3xl font-black text-gray-900 mb-6 text-center">
                Our Privacy Principles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "We never sell your personal information",
                  "We only collect what we need to serve you",
                  "Your data is encrypted and secure",
                  "You can request data deletion anytime",
                  "We comply with all privacy regulations",
                  "Transparency in all our practices"
                ].map((principle, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700 font-medium">{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-16 bg-white rounded-3xl p-10 shadow-xl border border-gray-200">
              <div className="text-center">
                <Lock className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to address any privacy concerns you may have.
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
                    href="mailto:service@mikesgaragedoorrepaircenter.com"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Also see our:</p>
              <Link href="/terms/" className="text-primary hover:underline font-semibold text-lg">
                Terms and Conditions →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}