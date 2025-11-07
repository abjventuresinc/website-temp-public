'use client'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { TestimonialsColumn } from './testimonials-columns-1'
import { BUSINESS_INFO } from '@/lib/business-config'

interface TestimonialsSectionProps {
  city?: string;
}

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Bedford Homeowner",
    content: `After the ice storm last winter, our garage door spring broke and we were stuck. Mike&apos;s team came out the same day and had us back in business. They really understand North Texas weather challenges and use parts that can handle our temperature swings.`,
    rating: 5,
    service: "Emergency Spring Repair",
    avatar: "SM"
  },
  {
    name: "Mike Chen",
    role: "Arlington Business Owner",
    content: `Our warehouse in Arlington needed new commercial doors that could handle heavy use. Mike&apos;s team installed doors that have been running perfectly for two years now, even through our hot summers and occasional storms. Great local service.`,
    rating: 5,
    service: "Commercial Installation",
    avatar: "MC"
  },
  {
    name: "Jennifer Rodriguez",
    role: "Plano Homeowner",
    content: `We had an old garage door that was noisy and inefficient. Mike&apos;s team installed a new insulated door that&apos;s much quieter and helps keep our garage cooler in the summer. The installation was clean and professional.`,
    rating: 5,
    service: "Residential Installation",
    avatar: "JR"
  },
  {
    name: "David Thompson",
    role: "Frisco Homeowner",
    content: `Our track was misaligned after some foundation settling, and the door was making terrible noises. Mike&apos;s team fixed it quickly and explained how North Texas soil movement affects garage doors. Very knowledgeable about local issues.`,
    rating: 5,
    service: "Track Alignment",
    avatar: "DT"
  },
  {
    name: "Lisa Johnson",
    role: "Southlake Homeowner",
    content: `We needed a custom wood garage door to match our home&apos;s style. Mike&apos;s team worked with us on the design and installed a beautiful door that looks great and handles our weather perfectly. Highly recommend their work.`,
    rating: 5,
    service: "Custom Wood Door",
    avatar: "LJ"
  },
  {
    name: "Robert Wilson",
    role: "Dallas Homeowner",
    content: `Our garage door opener stopped working during a heat wave. Mike&apos;s team diagnosed the issue quickly and replaced it with a smart opener that we can control from our phones. Great service and fair pricing.`,
    rating: 5,
    service: "Smart Opener Installation",
    avatar: "RW"
  }
]

export function TestimonialsSection({ city }: TestimonialsSectionProps = {}) {
  // Split testimonials into columns for the scrolling section
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Quote className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say{city ? ` in ${city}` : ''}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied DFW clients have to say about their experience with Mike&apos;s Garage Door Repair Center.
          </p>
        </div>

        {/* Scrolling Testimonials Columns */}
        <div className="mb-16 max-w-8xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[30dvh] overflow-hidden"
          >
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center justify-center flex flex-col items-center p-6 bg-card border border-border/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <p className="text-3xl w-full font-bold text-primary flex-col bg-primary/10 rounded-xl mb-2 py-3">
              320+
            </p>
            <p className="text-muted-foreground">
              Happy DFW Clients
            </p>
          </div>

          <div className="text-center justify-center flex flex-col items-center p-6 bg-card border border-border/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl w-full font-bold flex-col text-primary bg-primary/10 rounded-xl mb-2 py-3">85+</div>
            <p className="text-muted-foreground">
              Projects Completed
            </p>
          </div>

          <div className="text-center justify-center flex flex-col items-center p-6 bg-card border border-border/50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-3xl w-full font-bold flex-col text-primary bg-primary/10 rounded-xl mb-2 py-3">98%</div>
            <p className="text-muted-foreground">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 