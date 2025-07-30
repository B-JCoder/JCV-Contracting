import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Merriweather } from "next/font/google"
import "./globals.css"


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JCV Contracting - Home Improvement & Construction",
  description:
    "Professional home renovation, remodeling, and construction services in Toronto, ON. Transform your home with quality craftsmanship.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${merriweather.variable}`}>
      <body className={merriweather.className}>
        
        {children}
      </body>
    </html>
  )
}
