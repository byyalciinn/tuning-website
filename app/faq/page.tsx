"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const faqData = [
  {
    id: 1,
    category: "General",
    question: "What is chip tuning and how does it work?",
    answer: "Chip tuning is the process of optimizing the engine control unit (ECU) software in vehicles. Engine parameters are readjusted to provide power, torque increase and fuel savings. It is done safely via OBD port and is completely reversible."
  },
  {
    id: 2,
    category: "General",
    question: "Is chip tuning legal?",
    answer: "Yes, chip tuning is a legal process in the United States. However, to avoid problems in vehicle inspection, care should be taken to ensure that emission values remain within limits by receiving professional service."
  },
  {
    id: 3,
    category: "Performance",
    question: "How much performance increase can I expect?",
    answer: "Although it varies according to the vehicle model, generally 25-40% power increase and 15-20% fuel savings are achieved. These rates can be higher in diesel vehicles."
  },
  {
    id: 4,
    category: "Warranty",
    question: "Is my vehicle warranty valid after chip tuning?",
    answer: "OEM warranty depends on the manufacturer's policies. We provide a 2-year warranty for all our services. Also, the software is completely reversible."
  },
  {
    id: 5,
    category: "Safety",
    question: "Is chip tuning safe?",
    answer: "When done professionally, chip tuning is completely safe. The engine is optimized within safety limits. Results are verified with dyno tests."
  },
  {
    id: 6,
    category: "Process",
    question: "How long does the chip tuning process take?",
    answer: "It is usually completed in 2-4 hours. This time includes ECU analysis, map preparation, software installation and test drive."
  },
  {
    id: 7,
    category: "Pricing",
    question: "How are chip tuning prices determined?",
    answer: "Prices vary according to vehicle model, engine type and desired performance level. Basic chip tuning is offered with prices starting from $2,500."
  },
  {
    id: 8,
    category: "Maintenance",
    question: "Is special maintenance required after chip tuning?",
    answer: "Special maintenance is not required, but it is recommended to use quality engine oil and follow regular service intervals. We provide free check-up service for the first 6 months."
  },
  {
    id: 9,
    category: "Stage",
    question: "What is the difference between Stage 1, Stage 2, Stage 3?",
    answer: "Stage 1: Only ECU remapping, Stage 2: ECU + exhaust system, Stage 3: includes hardware changes such as ECU + exhaust + turbo upgrade. Each stage provides higher performance."
  },
  {
    id: 10,
    category: "Inspection",
    question: "Will my vehicle pass inspection after chip tuning?",
    answer: "When done correctly and emission values are kept within limits, it passes inspection. We can prepare special maps for inspection when necessary."
  }
]

export default function FaqPage() {
  const [openItems, setOpenItems] = React.useState<number[]>([])

  const handleToggle = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const categories = Array.from(new Set(faqData.map(item => item.category)))

  return (
    <div className="flex flex-col grey-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              What you wonder about our chip tuning and vehicle modification services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Categories
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              You can review your questions by categories
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card key={category} className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardTitle className="text-lg">{category}</CardTitle>
                <CardDescription>
                  {faqData.filter(item => item.category === category).length} questions
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleToggle(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleToggle(item.id)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={openItems.includes(item.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-xs text-primary font-medium mb-1">
                        {item.category}
                      </div>
                      <CardTitle className="text-left text-lg">
                        {item.question}
                      </CardTitle>
                    </div>
                    <ChevronDownIcon 
                      className={`h-5 w-5 transition-transform ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </CardHeader>
                {openItems.includes(item.id) && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Couldn't Find the Answer You're Looking For?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Our expert team is ready to answer all your questions. 
              Contact us for free consultation.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Ask on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Most Wondered Topics
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Safety & Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Most frequently asked questions and answers about chip tuning safety, 
                  warranty conditions and engine life.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performance Expectations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Information about expected power increase, fuel savings and 
                  performance improvements according to your vehicle model.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed explanations on service prices, processing times and 
                  payment options.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Center */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Help Center
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
              For more information and support
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>📞 Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Monday - Saturday<br />
                  09:00 - 18:00
                </p>
                <Button variant="outline" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>💬 Live Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Via WhatsApp<br />
                  You can send messages 24/7
                </p>
                <Button variant="outline" className="w-full">
                  Open WhatsApp
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>📧 Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For detailed questions<br />
                  Response within 24 hours
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
} 