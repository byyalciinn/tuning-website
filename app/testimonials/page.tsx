import * as React from "react"
import { Star, Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "John Davis",
      vehicle: "BMW X5 3.0d",
      rating: 5,
      comment: "After the chip tuning I had done for my BMW X5, my vehicle's performance increased incredibly. I both save fuel and my driving pleasure has multiplied. The team is very professional, they really know their business.",
      date: "2024-01-15",
      service: "Chip Tuning"
    },
    {
      id: 2,
      name: "Mike Smith",
      vehicle: "VW Golf GTI",
      rating: 5,
      comment: "The stage 2 tuning I had done for my Volkswagen Golf GTI was great. My car's power increased by 35% and I loved the sound tone. Thank you for the professional team and quality workmanship.",
      date: "2024-01-10",
      service: "Stage 2 Tuning"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      vehicle: "Audi A4 2.0 TDI",
      rating: 5,
      comment: "I had exhaust system replacement and chip tuning done for my Audi A4. I'm very satisfied with the result, I definitely recommend it. They're also very successful in terms of price-performance.",
      date: "2024-01-08",
      service: "Chip Tuning + Exhaust"
    },
    {
      id: 4,
      name: "Chris Williams",
      vehicle: "Mercedes C200 CDI",
      rating: 5,
      comment: "The chip tuning process performed for my Mercedes C200 was perfect. I saved 18% in fuel consumption and the performance increase is very noticeable. Definitely the right place!",
      date: "2024-01-05",
      service: "ECU Remapping"
    },
    {
      id: 5,
      name: "Emma Brown",
      vehicle: "Mini Cooper S",
      rating: 5,
      comment: "I had stage 1 tuning done for my Mini Cooper S. My car's character completely changed, it became much more fun. The results on the dyno test were also above my expectations.",
      date: "2024-01-03",
      service: "Stage 1 Tuning"
    },
    {
      id: 6,
      name: "David Wilson",
      vehicle: "Ford Focus ST",
      rating: 5,
      comment: "I had turbo upgrade and exhaust system done for my Focus ST. I experienced an incredible power increase. The technicians are knowledgeable, reliable people. I recommend it to everyone.",
      date: "2023-12-28",
      service: "Turbo Upgrade"
    },
    {
      id: 7,
      name: "Lisa Anderson",
      vehicle: "BMW 320d",
      rating: 5,
      comment: "I had chip tuning and exhaust system renewal done for my BMW 320d. The result far exceeded my expectations. Customer service is also very caring and helpful.",
      date: "2023-12-25",
      service: "Full Package"
    },
    {
      id: 8,
      name: "Mark Taylor",
      vehicle: "Audi A3 1.6 TDI",
      rating: 5,
      comment: "With the chip tuning done for my Audi A3, I'm very satisfied both in terms of performance and economy. Thank you for the guaranteed service and professional approach.",
      date: "2023-12-20",
      service: "Chip Tuning"
    },
    {
      id: 9,
      name: "James Miller",
      vehicle: "Seat Leon Cupra",
      rating: 5,
      comment: "I had the stage 3 tuning package done for my Leon Cupra. The car became a complete beast! It produced 310 HP on the dyno test. It's great to work with such a professional team.",
      date: "2023-12-18",
      service: "Stage 3 Tuning"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Customer Reviews
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Real experiences and reviews from customers satisfied with our services
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Satisfied Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <p className="text-muted-foreground">Successful Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-muted-foreground/30" />
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm font-semibold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.vehicle}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                        <span>{testimonial.service}</span>
                        <span>{new Date(testimonial.date).toLocaleDateString('en-US')}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Share Your Experience Too
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              After benefiting from our services, you can share your experience with other customers
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                Leave a Review
              </button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Based on Reviews */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Most Preferred Services
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Our most popular tuning services based on customer reviews
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">Chip Tuning</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Our most requested service. Safe and effective performance increase.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">Stage Tuning</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Favorite of our customers who want progressive performance increase.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-2">Exhaust System</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Ideal for customers looking for both performance and sporty sound tone.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 