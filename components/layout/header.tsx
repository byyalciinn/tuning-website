"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

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
    <header className="sticky top-0 z-40 w-full bg-transparent">
      {/* Minimal header for non-homepage navigation - only shows on smaller screens */}
      <div className="md:hidden bg-black/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl text-white">PRODAC</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={handleToggleMenu}
            onKeyDown={handleKeyDown}
            aria-label="Toggle menu"
            tabIndex={0}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-white/20 bg-black/95">
                         <div className="container grid gap-2 p-4">
               <Link
                 href="/"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 HOME
               </Link>
               <Link
                 href="/about"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 ABOUT
               </Link>
               <Link
                 href="/services"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 SERVICES
               </Link>
               <Link
                 href="/testimonials"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 TESTIMONIALS
               </Link>
               <Link
                 href="/prices"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 PRICES
               </Link>
               <Link
                 href="/faq"
                 className="block px-2 py-1 text-lg text-white hover:bg-white/20 rounded-md"
                 onClick={() => setIsMenuOpen(false)}
               >
                 FAQ
               </Link>
             </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 