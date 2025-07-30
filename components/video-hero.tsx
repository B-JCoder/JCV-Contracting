"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VideoHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/hero-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 z-10"></div>

      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans gradient-text">
            Breathing New Life Into Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            From kitchen makeovers to full home remodeling, we bring your vision to life with precision and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="glass-button text-white text-lg px-8 py-4 font-sans font-semibold">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-md bg-white/10 border-white/30 hover:bg-white/20 text-white text-lg px-8 py-4 font-sans"
              >
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
