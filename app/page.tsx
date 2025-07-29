import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import HeroSlider from "@/components/ui/hero-slider"
import { About3 } from "@/components/ui/about-3"
import { OurVehicleCategoriesSection } from "@/components/ui/our-vehicle-categories-section"
import { AnimatedTestimonialsSection } from "@/components/ui/animated-testimonials-section"

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* About Section */}
      <About3 />

      {/* Our Vehicle Categories */}
      <OurVehicleCategoriesSection />

      {/* Customer Reviews - Animated */}
      <AnimatedTestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                Find Your Perfect Vehicle Today
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                Contact us now for personalized assistance and competitive financing options
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Schedule Test Drive
              </Button>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white" asChild>
                <Link href="/prices">
                  View Inventory
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