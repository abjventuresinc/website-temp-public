import React from 'react'
import Link from 'next/link'
import Image from '@/components/ui/image'
import { Button } from '@/components/ui/buttons'
import { ArrowRight, Heart, Users, Award, Shield, Clock, Star, Phone, Target, Handshake, Wrench, Home, MapPin } from 'lucide-react'
import { LOCATIONS } from '@/lib/business-config'
import InfiniteTestimonialSlider from '@/components/ui/testimonials3/infinite-testimonial-slider'
import { generateMetadataFromConfig, generateStructuredData } from '@/lib/seo-metadata'

export async function generateMetadata() {
  return generateMetadataFromConfig('/about/')
}

export default function AboutPage() {
  const structuredData = generateStructuredData('/about/')

  const aboutTestimonials = [
    {
      id: "1",
      name: "Robert & Lisa Chen",
      role: "Homeowner",
      company: "Bedford, TX",
      profilePic: "", // Will use initials
      rating: 5,
      review: "Mike's team replaced our 25-year-old garage door. The transformation is incredible! Professional installation, beautiful results, and they cleaned up everything. Our home looks brand new."
    },
    {
      id: "2",
      name: "David Martinez",
      role: "Homeowner",
      company: "Fort Worth, TX",
      profilePic: "",
      rating: 5,
      review: "Called them at midnight with a broken spring. They arrived in 45 minutes and had everything fixed by 1:30 AM. Truly impressive emergency service when we needed it most!"
    },
    {
      id: "3",
      name: "Amanda Johnson",
      role: "Homeowner",
      company: "Arlington, TX",
      profilePic: "",
      rating: 5,
      review: "We've been on their maintenance plan for three years. Haven't had a single emergency. The technicians are thorough, friendly, and always on time. Best decision we made!"
    },
    {
      id: "4",
      name: "Michael & Sarah Brown",
      role: "Homeowner",
      company: "Dallas, TX",
      profilePic: "",
      rating: 5,
      review: "Upgraded to a smart garage door opener with Mike's. The installation was seamless and they taught us how to use all the features. Love controlling our garage from anywhere!"
    },
    {
      id: "5",
      name: "Jennifer Williams",
      role: "Homeowner",
      company: "Plano, TX",
      profilePic: "",
      rating: 5,
      review: "Professional, courteous, and incredibly knowledgeable. They fixed our cable issue quickly and explained everything clearly. Will definitely call them for all future needs!"
    },
    {
      id: "6",
      name: "Thomas Anderson",
      role: "Homeowner",
      company: "Irving, TX",
      profilePic: "",
      rating: 5,
      review: "Mike personally came out to give us a quote on a custom door. His attention to detail and honest recommendations won us over. The final result exceeded our expectations!"
    },
    {
      id: "7",
      name: "Patricia & James Lee",
      role: "Homeowner",
      company: "Grapevine, TX",
      profilePic: "",
      rating: 5,
      review: "Our garage door was making terrible noises. They diagnosed the problem quickly, replaced the rollers, and now it operates silently. Excellent service and fair treatment!"
    },
    {
      id: "8",
      name: "Kevin Rodriguez",
      role: "Homeowner",
      company: "Frisco, TX",
      profilePic: "",
      rating: 5,
      review: "I appreciate their transparency. They could have sold me a new door, but instead fixed the track alignment for a fraction of the cost. That honesty earned a customer for life!"
    }
  ]

  const coreValues = [
    {
      icon: <Heart />,
      title: "Customer First",
      description: "Every decision we make starts with one question: What's best for our DFW customers? This approach has built lasting relationships across Bedford, Arlington, and all 45 communities we serve."
    },
    {
      icon: <Shield />,
      title: "Quality Guaranteed",
      description: "We stand behind every job with comprehensive warranties. When you choose Mike's, you're choosing peace of mind that lasts through North Texas weather and daily use."
    },
    {
      icon: <Handshake />,
      title: "Honest & Transparent",
      description: "We believe in straightforward pricing and honest recommendations. No upselling, no hidden fees—just reliable garage door service you can trust across the DFW area."
    },
    {
      icon: <Clock />,
      title: "Always Available",
      description: "Garage door emergencies don't wait for business hours. We're available 24/7, ready to help when you need us most, whether it's dawn or midnight across Dallas-Fort Worth."
    }
  ]

  const stats = [
    { number: "6+", label: "Years in Business" },
    { number: "320+", label: "Happy DFW Customers" },
    { number: "45+", label: "Cities Served" },
    { number: "24/7", label: "Emergency Service" }
  ]

  const teamMembers = [
    {
      name: "Mike",
      role: "Founder & Lead Technician",
      image: "/assets/images/Mike_s Garage Door Repair Center 18.webp",
      description: "With over 6 years of garage door expertise in North Texas, Mike started this company to bring honest, reliable service to Dallas-Fort Worth families."
    },
    {
      name: "Our Expert Team",
      role: "Certified Technicians",
      image: "/assets/images/Mike_s Garage Door Repair Center 15.webp",
      description: "Every member of our team is licensed, insured, and continuously trained on the latest garage door technology and North Texas climate challenges."
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/Mike_s Garage Door Repair Center 1.webp"
            alt="Mike's Garage Door Repair Center team in Bedford, TX"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-primary/90" />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl -pulse" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">Family-Owned Since 2010</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Meet Mike&apos;s
                <br />
                <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                  Garage Door Experts
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                We&apos;re not just another garage door company. We&apos;re your neighbors in Bedford, 
                committed to delivering exceptional service across Dallas-Fort Worth. Our passion for excellence 
                shows in every project we touch, from Arlington to Plano and everywhere in between.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
                  >
                    <div className="text-4xl font-black text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                  <Home className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-primary">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  Built on Trust,
                  <span className="block text-primary">Driven by Excellence</span>
                </h2>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    It all started in 2018 when Mike noticed a problem: too many DFW homeowners were getting 
                    overcharged for simple garage door repairs. The service was often impersonal and rushed, 
                    with little understanding of North Texas climate challenges.
                  </p>
                  <p>
                    Mike decided to do things differently. He built a company on three simple 
                    principles: honest pricing, quality workmanship, and treating every customer like family. 
                    This approach has worked across the DFW metroplex.
                  </p>
                  <p>
                    Today, we&apos;re proud to serve 45+ cities across Dallas-Fort Worth. Our team has grown, 
                    but our values haven&apos;t changed. We&apos;re still the same family-owned business that 
                    puts your needs first, answers calls at 2 AM, and treats your home with respect.
                  </p>
                  <p className="font-semibold text-gray-900">
                    That&apos;s the Mike&apos;s difference. That&apos;s why customers keep coming back
                    and referring their friends and neighbors across Bedford, Arlington, and beyond.
                  </p>
                </div>
              </div>

              <div
                className="relative"
              >
                <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/Mike_s Garage Door Repair Center 10.webp"
                    alt="Mike's Garage Door Repair Center team at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Award className="w-12 h-12 text-primary" />
                    <div>
                      <div className="font-black text-2xl text-gray-900">5-Star</div>
                      <div className="text-sm text-gray-600">Rated Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">What We Stand For</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These aren&apos;t just words on a wall,they guide every decision and interaction
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl -all duration-300 border border-gray-200"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                    {React.cloneElement(value.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Meet Our Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The People Behind
                <span className="block text-primary">Your Perfect Service</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re a team of certified professionals who treat your home like our own
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="group"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 -transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-3xl font-black mb-1">{member.name}</h3>
                      <p className="text-white/90 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Bedford Trusts Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our technical expertise combined with local DFW knowledge sets us apart
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield />,
                  title: "Licensed & Insured",
                  desc: "Fully licensed, bonded, and insured for your complete protection and peace of mind"
                },
                {
                  icon: <Award />,
                  title: "Certified Experts",
                  desc: "Continuously trained on the latest garage door technology, safety standards, and best practices"
                },
                {
                  icon: <Clock />,
                  title: "Fast Response",
                  desc: "Same-day service available across Dallas-Fort Worth with emergency support 24/7"
                },
                {
                  icon: <Wrench />,
                  title: "All Brands",
                  desc: "Expert service on every major brand: Clopay, LiftMaster, Amarr, Wayne Dalton, CHI, Genie"
                },
                {
                  icon: <Star />,
                  title: "5-Star Rated",
                  desc: "Thousands of happy customers and countless 5-star reviews across Dallas-Fort Worth"
                },
                {
                  icon: <Heart />,
                  title: "Satisfaction Guarantee",
                  desc: "We stand behind every job with our 100% satisfaction guarantee,if you're not happy, we make it right"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center"
                >
                  <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                    {React.cloneElement(item.icon, { className: "w-10 h-10" })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">Where We Serve</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Serving All of Dallas-Fort Worth
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                From our home base in Bedford, we serve 45+ cities across the metroplex. 
                No matter where you are in Dallas-Fort Worth, we&apos;re ready to help.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
              {LOCATIONS.slice(0, 18).map((location, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary hover:shadow-lg -all duration-300"
                >
                  <span className="font-semibold text-gray-900 text-sm">{location.city}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">And 26+ more cities across the metroplex</p>
              <Link href="/service-areas/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 -all text-lg">
                View All Service Areas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <InfiniteTestimonialSlider testimonials={aboutTestimonials} />

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        
        {/* Animated Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Experience the Mike&apos;s Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied customers across Dallas-Fort Worth. Let us show you what 
              exceptional garage door service looks like in North Texas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div >
                <Button asChild className="bg-white text-secondary hover:bg-gray-100 px-10 py-6 text-lg font-bold rounded-xl shadow-2xl">
                  <Link href="tel:+18178598877" className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    Call 817-859-8877
                  </Link>
                </Button>
              </div>
              <div >
                <Button asChild variant="outline" className="border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-secondary text-white px-10 py-6 text-lg font-bold rounded-xl">
                  <Link href="/contact/" className="flex items-center gap-3">
                    Get Free Quote
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
      </div>
      </section>
    </>
  )
}