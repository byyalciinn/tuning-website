import * as React from "react"
import { Award, Users, Clock, Target } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              About Us
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Since 2010, TuningPro has been a pioneer in the automotive tuning field, 
              making a difference in the industry with our quality service and customer satisfaction-focused approach.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide vehicle owners with the highest quality tuning services, maximizing their driving 
                experience and unlocking their vehicles' true potential. We continue to be a leader in the 
                industry by always prioritizing safety, quality, and customer satisfaction.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the most trusted and innovative automotive tuning brand in the country. By closely 
                following technological developments, we aim to provide our customers with the most modern 
                solutions and contribute to the widespread adoption of automotive tuning culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="text-3xl font-bold">5000+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Satisfied Customers</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="text-3xl font-bold">14+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Years of Experience</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="text-3xl font-bold">50+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Vehicle Brands</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="mx-auto h-12 w-12 text-primary" />
                <CardTitle className="text-3xl font-bold">98%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Success Rate</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Expert Team
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              We provide quality service guarantee with our expert technicians
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">AJ</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">Lead Technician</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in ECU remapping and chip tuning with 15 years of experience. 
                    Certified technician for all European brands.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">MT</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Mark Thompson</h3>
                    <p className="text-sm text-muted-foreground">Exhaust Specialist</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    12 years of experience in performance exhaust systems. 
                    Expert in custom exhaust design and modification.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <span className="text-2xl font-bold">RD</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Robert Davis</h3>
                    <p className="text-sm text-muted-foreground">Turbo Specialist</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Expert in turbo systems and hybrid turbo kits. 
                    Performs high-performance modifications with 10 years of experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Why Choose TuningPro?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">Quality Parts</h3>
                  <p className="text-muted-foreground text-sm">
                    We only work with original and quality parts. All our parts are guaranteed and tested.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">Safety Priority</h3>
                  <p className="text-muted-foreground text-sm">
                    Vehicle safety is our priority in all our modifications. We never compromise on safety standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground text-sm">
                    There are no hidden costs. The price we give you is the price you pay.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">2-Year Warranty</h3>
                  <p className="text-muted-foreground text-sm">
                    We provide a 2-year warranty for all our services. We're here for you when you have problems.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">Customer Satisfaction</h3>
                  <p className="text-muted-foreground text-sm">
                    We're industry leaders with 98% customer satisfaction rate. Your satisfaction is our priority.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold mb-2">Continuous Training</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team continuously trains to follow and develop the latest technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 