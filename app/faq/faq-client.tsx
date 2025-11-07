"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, HelpCircle, Phone, Search, ChevronDown, ChevronUp, Star, Clock, Shield, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQ {
  id: number
  category: string
  question: string
  answer: string
}

interface FAQClientProps {
  faqData: {
    faqs: FAQ[]
  }
}

export default function FAQClient({ faqData }: FAQClientProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Group FAQs by category (excluding Services)
  const faqCategories = [
    {
      category: "General",
      icon: <HelpCircle />,
      faqs: faqData.faqs.filter(faq => faq.category === "General")
    },
    {
      category: "Pricing",
      icon: <Award />,
      faqs: faqData.faqs.filter(faq => faq.category === "Pricing")
    },
    {
      category: "Scheduling",
      icon: <Clock />,
      faqs: faqData.faqs.filter(faq => faq.category === "Scheduling")
    }
  ]

  const allFAQs = faqData.faqs
  
  const filteredFAQs = searchTerm
    ? allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFAQs

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <>
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-14 pr-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 text-lg"
          />
        </div>
      </div>

      {/* FAQ Categories */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {searchTerm ? (
              // Search Results
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-gray-900 mb-8">
                  Search Results ({filteredFAQs.length})
                </h2>
                {filteredFAQs.map((faq, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                      {openFAQ === idx ? (
                        <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openFAQ === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            ) : (
              // Category View
              <div className="space-y-12">
                {faqCategories.map((category, catIdx) => (
                  <motion.div
                    key={catIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {React.cloneElement(category.icon, { className: "w-6 h-6" })}
                      </div>
                      <h2 className="text-3xl font-black text-gray-900">{category.category}</h2>
                    </div>

                    <div className="space-y-4">
                      {category.faqs.map((faq, faqIdx) => {
                        const globalIdx = faqCategories
                          .slice(0, catIdx)
                          .reduce((acc, cat) => acc + cat.faqs.length, 0) + faqIdx

                        return (
                          <div
                            key={faqIdx}
                            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
                          >
                            <button
                              onClick={() => toggleFAQ(globalIdx)}
                              className="w-full text-left p-6 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                            >
                              <h3 className="text-lg font-bold text-gray-900 pr-8 group-hover:text-primary transition-colors">
                                {faq.question}
                              </h3>
                              {openFAQ === globalIdx ? (
                                <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary flex-shrink-0 transition-colors" />
                              )}
                            </button>
                            <AnimatePresence>
                              {openFAQ === globalIdx && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4">
                                    {faq.answer}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-20 h-20 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We&apos;re here to help! Give us a call and we&apos;ll answer any questions you have.
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
                    Contact Us
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
