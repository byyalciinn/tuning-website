import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Settings, Shield, Star, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const HomePage = () => {
  return (
    <div className="flex flex-col grey-gradient-bg">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-background/80 backdrop-blur-sm z-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Vehicle's <span className="text-primary">True Power</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Professional chip tuning and performance modifications to unlock your vehicle's 
                  full potential. Safe, quality and guaranteed service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="inline-flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/images/hero-car-image-1.jpg"
                  alt="High-performance tuned car showcasing our expertise"
                  width={600}
                  height={400}
                  className="rounded-xl object-cover w-full h-auto shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose TuningPro?
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              We make a difference with our expert team and quality service in automotive tuning
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="text-center">
                <Zap className="mx-auto h-12 w-12 text-primary" />
                <CardTitle>Performance Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional chip tuning services providing up to 40% power increase 
                  and fuel savings
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Settings className="mx-auto h-12 w-12 text-primary" />
                <CardTitle>Expert Technicians</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Safe and quality modification processes with our team of 10+ years 
                  experienced technicians
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Shield className="mx-auto h-12 w-12 text-primary" />
                <CardTitle>Safety Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  2-year warranty for all our services and an approach that prioritizes 
                  vehicle safety
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive tuning and modification solutions for your vehicles
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg border">
              <h3 className="text-xl font-bold">Chip Tuning</h3>
              <p className="text-sm text-muted-foreground text-center">
                Optimize your engine performance with ECU remapping
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>30-40% power increase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Fuel savings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Driving comfort</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg border">
              <h3 className="text-xl font-bold">Exhaust System</h3>
              <p className="text-sm text-muted-foreground text-center">
                Power and sound optimization with performance exhaust systems
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Sporty sound tone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Gas flow optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Stainless steel</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center space-y-2 p-6 rounded-lg border">
              <h3 className="text-xl font-bold">Turbo Upgrade</h3>
              <p className="text-sm text-muted-foreground text-center">
                Maximum performance with turbo system upgrades
              </p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Hybrid turbo kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Intercooler upgrade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Boost control</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Customer Reviews
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Experiences of customers satisfied with our services
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "After the chip tuning I had done for my BMW X5, my vehicle's performance increased 
                  incredibly. I both save fuel and my driving pleasure has multiplied."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-semibold">JD</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">John Davis</p>
                    <p className="text-xs text-muted-foreground">BMW X5 Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "The stage 2 tuning I had done for my Volkswagen Golf GTI was great. 
                  Professional team and quality workmanship, thank you."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-semibold">MS</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Mike Smith</p>
                    <p className="text-xs text-muted-foreground">VW Golf GTI Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  "I had exhaust system replacement and chip tuning done for my Audi A4. 
                  I'm very satisfied with the result, I definitely recommend it."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-semibold">SJ</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Audi A4 Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/testimonials">
                View All Reviews
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Boost Your Vehicle's Performance
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Contact us now for free consultation and detailed analysis
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/prices">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage 