"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ServicesNavigation() {
  const [isOpen, setIsOpen] = useState(false)

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#contact", label: "Contact" },
  { href: "/#gallery", label: "Gallery" },
]


  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <nav className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="JCV Contracting Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="ml-2 text-xl font-bold text-white font-sans">JCV Contracting</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-sm font-medium font-sans transition-all duration-300 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-white/5"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium font-sans transition-all duration-300 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              )
            )}

            <a href="tel:+14379820419">
              <Button className="glass-button text-white font-sans font-semibold">Call +1 437-982-0419</Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card border-t border-white/10">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium font-sans transition-colors rounded-lg text-gray-300 hover:text-teal-400 hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left px-3 py-2 text-base font-medium font-sans transition-colors rounded-lg text-gray-300 hover:text-teal-400 hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )
              )}

              <div className="px-3 py-2">
                <a href="tel:+14379820419">
                  <Button className="w-full glass-button text-white font-sans">Call Now</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
