"use client"

import * as React from "react"
import Link from "next/link"
import { Car, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import GradientButton from "@/components/ui/button-1"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggleMenu()
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="font-bold text-xl">TuningPro</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex ml-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/prices" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA Button */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex">
            <GradientButton
              onClick={() => console.log('Contact Us clicked')}
              width="140px"
              height="40px"
              className="text-sm font-medium"
            >
              Contact Us
            </GradientButton>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            tabIndex={0}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container grid gap-2 p-4">
            <Link
              href="/"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="/prices"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="block px-2 py-1 text-lg hover:bg-accent rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="mt-2 pt-2 border-t">
              <GradientButton
                onClick={() => console.log('Contact Us clicked')}
                width="100%"
                height="40px"
                className="text-sm font-medium"
              >
                Contact Us
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 