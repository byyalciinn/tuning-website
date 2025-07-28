import * as React from "react"
import { Check, Star, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Pricing
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Quality tuning services with transparent and competitive pricing. 
              All our prices include a 2-year warranty.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Chip Tuning */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Chip Tuning</CardTitle>
                <CardDescription>
                  Performance optimization with ECU remapping
                </CardDescription>
                <div className="text-3xl font-bold text-primary">From $2,500</div>
                <p className="text-sm text-muted-foreground">starting prices</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">ECU analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Custom map preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dyno testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">2-year warranty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Free check-up</span>
                  </li>
                </ul>
                <Button className="w-full">Get Details</Button>
              </CardContent>
            </Card>

            {/* Stage Packages - Popular */}
            <Card className="relative border-primary">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Most Popular
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Stage Packages</CardTitle>
                <CardDescription>
                  Progressive performance increase packages
                </CardDescription>
                <div className="text-3xl font-bold text-primary">From $4,500</div>
                <p className="text-sm text-muted-foreground">starting prices</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Stage 1-2-3 options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comprehensive performance analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Air filter system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Progressive upgrade</span>
                  </li>
                </ul>
                <Button className="w-full">Get Details</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-2xl">Premium Package</CardTitle>
                <CardDescription>
                  Complete performance upgrade package
                </CardDescription>
                <div className="text-3xl font-bold text-primary">From $12,500</div>
                <p className="text-sm text-muted-foreground">starting prices</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Chip tuning + Exhaust</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Turbo upgrade</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cooling system</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">VIP service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">Lifetime support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Details</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Individual Service Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Individual service options you can choose according to your needs
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Stage 1 Chip Tuning</h3>
                  <p className="text-sm text-muted-foreground">ECU + Air filter</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$2,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Stage 2 Tuning</h3>
                  <p className="text-sm text-muted-foreground">Stage 1 + Exhaust system</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$4,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Exhaust System</h3>
                  <p className="text-sm text-muted-foreground">Performance exhaust</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$3,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Turbo Upgrade</h3>
                  <p className="text-sm text-muted-foreground">Hybrid turbo kit</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$8,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Suspension Kit</h3>
                  <p className="text-sm text-muted-foreground">Coilover system</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$5,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">Dyno Test</h3>
                  <p className="text-sm text-muted-foreground">Power measurement + Report</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">ECU Backup</h3>
                  <p className="text-sm text-muted-foreground">Original file backup</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$300</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">DPF/EGR Delete</h3>
                  <p className="text-sm text-muted-foreground">Software removal</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary">$1,500</div>
                  <div className="text-xs text-muted-foreground">+Tax</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Guarantee */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Payment Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Cash payment 5% discount</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Credit card (Single payment)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Up to 6 installment options</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Bank transfer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Payment on delivery (cash/card)</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Star className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Warranty & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">2-year free warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">First 6 months free check-up</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">24/7 technical support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free software updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Money back if not satisfied</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Special Offers and Discounts
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
              Choose the most suitable package for your vehicle and benefit from our free consultation service
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button size="lg">
                Get Free Quote
              </Button>
              <Button variant="outline" size="lg">
                WhatsApp Contact
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              * Prices may vary according to vehicle model. 
              * For detailed information, you can benefit from our free consultation service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 