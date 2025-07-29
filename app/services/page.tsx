import * as React from "react"
import { CheckCircle, Zap, Wrench, Gauge, TrendingUp, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col grey-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Our Services
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Comprehensive tuning and modification services that maximize your vehicle's performance
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Chip Tuning */}
            <Card className="h-full">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Chip Tuning</CardTitle>
                <CardDescription>
                  Optimize your engine performance with ECU remapping
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">30-40% power increase</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">15-20% fuel savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Enhanced driving comfort</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">OBD port procedure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Reversible process</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">Starting from $2,500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Exhaust System */}
            <Card className="h-full">
              <CardHeader>
                <Wrench className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Exhaust System</CardTitle>
                <CardDescription>
                  Power and sound optimization with performance exhaust systems
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Sporty sound tone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gas flow optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Stainless steel material</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom design options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Long-lasting use</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">Starting from $3,500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Turbo Upgrade */}
            <Card className="h-full">
              <CardHeader>
                <Gauge className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Turbo Upgrade</CardTitle>
                <CardDescription>
                  Maximum performance with turbo system upgrades
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Hybrid turbo kits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Intercooler upgrade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Boost pressure control</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Air intake systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cooling system improvement</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">Starting from $8,500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Stage Tuning */}
            <Card className="h-full">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Stage Tuning</CardTitle>
                <CardDescription>
                  Progressive performance increase with staged tuning packages
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Stage 1: ECU + Air filter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Stage 2: + Exhaust system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Stage 3: + Turbo upgrade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Progressive upgrade option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Special price advantages</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">Starting from $4,500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Suspension Tuning */}
            <Card className="h-full">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Suspension Tuning</CardTitle>
                <CardDescription>
                  Suspension modifications that improve driving dynamics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Coilover systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Adjustable dampers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Anti-roll bar kits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Spring and damper sets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Geometry adjustments</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">Starting from $5,500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>

            {/* Dyno Test */}
            <Card className="h-full">
              <CardHeader>
                <Gauge className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Dyno Test</CardTitle>
                <CardDescription>
                  Professional power measurement and performance analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">4WD dyno testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Detailed performance report</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Power and torque measurement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">AFR analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Video recording service</span>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold">$500</p>
                  <Button className="w-full mt-4">Get Details</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Working Process
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              We provide safe and quality service with our professional approach
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Vehicle Analysis</h3>
              <p className="text-sm text-muted-foreground">
                We analyze the current condition of your vehicle in detail
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Planning</h3>
              <p className="text-sm text-muted-foreground">
                We prepare a custom tuning plan for you and share the details
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Our expert technicians safely perform the modifications
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold">Test & Delivery</h3>
              <p className="text-sm text-muted-foreground">
                We verify results with dyno tests and deliver your vehicle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50 relative z-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              More Information About Our Services
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Let's determine the most suitable tuning options for your vehicle together
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg">
                Free Consultation
              </Button>
              <Button variant="outline" size="lg">
                Price List
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 