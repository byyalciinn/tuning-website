"use client"

import * as React from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SlideData {
  id: number
  image: string
  title: string
  subtitle: string
  buttonText: string
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Show And Sell Cars",
    subtitle: "With Prodac.",
    buttonText: "CAR PRICE"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Drive Attention",
    subtitle: "Drive Sales With Prodac",
    buttonText: "PHOTO GALLERY"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "List Smart.",
    subtitle: "Sell Fast.",
    buttonText: "SPECS"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Display Like a Pro.",
    subtitle: "Sell Like a Boss.",
    buttonText: "ENQUIRY"
  }
]

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-slide functionality
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.subtitle}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="space-y-4">
              <h1 
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white transition-all duration-500",
                  isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
                )}
                style={{
                  lineHeight: "1.1",
                  fontWeight: "600"
                }}
              >
                {slides[currentSlide].title}
              </h1>
              <h2 
                className={cn(
                  "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white transition-all duration-500 delay-100",
                  isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
                )}
                style={{
                  lineHeight: "1.1",
                  fontWeight: "600"
                }}
              >
                {slides[currentSlide].subtitle}
              </h2>

            </div>
          </div>
        </div>


      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/70"
            )}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Top Navigation Menu */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold tracking-wider">
              PRODAC
            </div>
                         <nav className="hidden md:flex space-x-8 text-white font-medium">
               <a href="/" className="hover:text-gray-300 transition-colors">HOME</a>
               <a href="/about" className="hover:text-gray-300 transition-colors">ABOUT</a>
               <a href="/services" className="hover:text-gray-300 transition-colors">SERVICES</a>
               <a href="/testimonials" className="hover:text-gray-300 transition-colors">TESTIMONIALS</a>
               <a href="/prices" className="hover:text-gray-300 transition-colors">PRICES</a>
               <a href="/faq" className="hover:text-gray-300 transition-colors">FAQ</a>
             </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => {/* Mobile menu toggle logic can be added here */}}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider 