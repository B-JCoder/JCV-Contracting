"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Hammer,
  ChefHat,
  Home,
  Wrench,
  PaintBucket,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Award,
  Shield,
  Users,
  Star,
  Quote,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import VideoHero from "@/components/video-hero"
import Navigation from "@/components/navigation"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      {/* Hero Section with Video Background */}
      <section id="home">
        <VideoHero />
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-sans gradient-text">About JCV Contracting</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                JCV Contracting has been transforming homes for over 15 years, combining quality craftsmanship with
                creative designs. Our goal is to create beautiful, functional spaces that you and your family can enjoy
                for years to come.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From kitchen renovations to custom carpentry, our team handles it all. We're committed to quality,
                client satisfaction, and the transformational impact of our services. Our certified professionals bring
                expertise in construction, design, and project management to every job.
              </p>

              {/* Three Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
  <Button className="glass-card border-teal-400/30 text-teal-400 bg-teal-400/10 h-auto py-4 px-6 flex flex-col items-center">
    <Award className="h-8 w-8 mb-2" />
    <span className="font-sans font-semibold text-center">15+ Years Experience</span>
  </Button>
  <Button className="glass-card border-teal-400/10 text-teal-400 bg-teal-400/10 h-auto py-4 px-6 flex flex-col items-center">
    <Shield className="h-8 w-8 mb-2" />
    <span className="font-sans font-semibold text-center">Licensed & Insured</span>
  </Button>
  <Button className="glass-card border-teal-400/30 text-teal-400 bg-teal-400/10 h-auto py-4 px-6 flex flex-col items-center">
    <Users className="h-8 w-8 mb-2" />
    <span className="font-sans font-semibold text-center">500+ Projects Completed</span>
  </Button>
</div>


              <Link href="#services">
                <Button className="glass-button text-white font-sans font-semibold">View Our Services</Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card p-4 rounded-2xl">
                <Image
                  src="/images/kitchen-consultation.jpg"
                  alt="JCV Contracting consultation"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive home improvement services to transform your space into the home of your dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Home,
                title: "Home Renovation & Remodeling",
                description: "Complete home transformations from concept to completion",
              },
              {
                icon: Sparkles,
                title: "Interior Design & Makeovers",
                description: "Creative design solutions that reflect your personal style",
              },
              {
                icon: ChefHat,
                title: "Kitchen & Bathroom Upgrades",
                description: "Modern, functional spaces that add value to your home",
              },
              {
                icon: Wrench,
                title: "Basement Finishing",
                description: "Transform unused space into functional living areas",
              },
              {
                icon: Hammer,
                title: "Custom Carpentry & Woodwork",
                description: "Handcrafted solutions tailored to your specific needs",
              },
              {
                icon: PaintBucket,
                title: "Painting & Wall Treatments",
                description: "Professional painting services for interior and exterior",
              },
            ].map((service, index) => (
              <Card key={index} className="glass-card hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl text-white font-sans">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="glass-button text-white font-sans font-semibold" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">Our Work Gallery</h2>
            <p className="text-xl text-gray-300">See some of our recent transformations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-4 rounded-2xl group hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/deck-project.jpg"
                  alt="Custom Deck Construction"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2 font-sans">Custom Deck Construction</h3>
                    <p className="text-sm text-gray-200">Professional deck building with quality materials</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl group hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/built-in-storage.jpg"
                  alt="Built-in Storage Solutions"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2 font-sans">Built-in Storage Solutions</h3>
                    <p className="text-sm text-gray-200">Custom carpentry for maximum space utilization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-4 rounded-2xl group hover:bg-white/10 transition-all duration-300">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/images/laundry-room.jpg"
                  alt="Laundry Room Renovation"
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2 font-sans">Laundry Room Renovation</h3>
                    <p className="text-sm text-gray-200">Modern utility spaces with style and function</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Reels Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4 font-sans gradient-text">See Our Work in Action</h3>
              <p className="text-lg text-gray-300">Watch our craftsmen transform spaces with quality workmanship</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-4 rounded-2xl group">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    poster="/images/deck-project.jpg"
                  >
                    <source src="/videos/reel-one.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 glass-card px-3 py-1 rounded text-sm text-white font-sans">
                    Construction Process
                  </div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl group">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    poster="/images/built-in-storage.jpg"
                  >
                    <source src="/videos/reel-two.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 glass-card px-3 py-1 rounded text-sm text-white font-sans">
                    Custom Carpentry
                  </div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-2xl group">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <video
                    controls
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    poster="/images/laundry-room.jpg"
                  >
                    <source src="/videos/construction-reel.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-4 glass-card px-3 py-1 rounded text-sm text-white font-sans">
                    Home Renovation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real feedback from satisfied homeowners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Toronto, ON",
                rating: 5,
                text: "JCV Contracting transformed our kitchen beyond our expectations. The attention to detail and quality of work was exceptional. Highly recommend!",
                project: "Kitchen Renovation",
              },
              {
                name: "Michael Chen",
                location: "Mississauga, ON",
                rating: 5,
                text: "Professional, reliable, and skilled. They finished our basement renovation on time and within budget. The space looks amazing!",
                project: "Basement Finishing",
              },
              {
                name: "Emily Rodriguez",
                location: "Markham, ON",
                rating: 5,
                text: "From consultation to completion, the team was fantastic. Our custom deck is the highlight of our backyard. Thank you JCV!",
                project: "Deck Construction",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="glass-card hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-teal-400 mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-semibold font-sans">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    <Badge className="mt-2 bg-teal-500/20 text-teal-400 border-teal-400/30">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Common questions about our services and process</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical renovation project take?",
                answer:
                  "Project timelines vary depending on scope and complexity. Kitchen renovations typically take 4-8 weeks, bathroom renovations 3-5 weeks, and full home renovations can take 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout the process.",
              },
              {
                question: "Do you provide free estimates?",
                answer:
                  "Yes! We offer free, no-obligation consultations and estimates for all projects. We'll visit your property, discuss your vision, assess the scope of work, and provide a detailed written estimate within 48 hours of our visit.",
              },
              {
                question: "Are you licensed and insured?",
                answer:
                  "Absolutely. JCV Contracting is fully licensed, bonded, and insured in Ontario. We carry comprehensive liability insurance and workers' compensation coverage for your complete peace of mind and protection.",
              },
              {
                question: "Do you handle permits and inspections?",
                answer:
                  "Yes, we handle all necessary permits and coordinate inspections as required by local building codes. This is included in our comprehensive project management services, so you don't have to worry about the paperwork.",
              },
              {
                question: "What is your payment schedule?",
                answer:
                  "We work with a fair payment schedule tied to project milestones. Typically, we require a small deposit to begin, with progress payments as work is completed. No large upfront payments are ever required, and final payment is due upon your complete satisfaction.",
              },
              {
                question: "Do you offer warranties on your work?",
                answer:
                  "Yes, we stand behind our work with comprehensive warranties. We offer a 2-year warranty on workmanship and pass through all manufacturer warranties on materials and fixtures. Your satisfaction and peace of mind are our top priorities.",
              },
            ].map((faq, index) => (
              <Card key={index} className="glass-card hover:bg-white/10 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-white font-sans flex items-center justify-between">
                    {faq.question}
                    <ChevronDown className="h-5 w-5 text-teal-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 section-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-sans gradient-text">Get Your Free Quote Today</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your home? Fill out our quick form and we'll get back to you within 24 hours with a
              detailed estimate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-lg flex items-center">
                  <Phone className="h-8 w-8 text-teal-400 mr-4" />
                  <div>
                    <span className="text-xl font-semibold text-white font-sans">+1 437-982-0419</span>
                    <p className="text-gray-400">Available 7 days a week</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg flex items-center">
                  <Mail className="h-8 w-8 text-teal-400 mr-4" />
                  <div>
                    <span className="text-xl font-semibold text-white font-sans">jezreelcapsuyen@gmail.com</span>
                    <p className="text-gray-400">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg flex items-center">
                  <MapPin className="h-8 w-8 text-teal-400 mr-4" />
                  <div>
                    <span className="text-xl font-semibold text-white font-sans">Toronto, ON, Canada</span>
                    <p className="text-gray-400">Free estimates across Ontario</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 glass-card p-6 rounded-lg border border-teal-400/30">
                <h3 className="text-xl font-bold mb-4 text-teal-400 font-sans">Why Choose JCV Contracting?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    15+ years of experience in Toronto area
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Licensed & fully insured
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    100% satisfaction guarantee
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    Free consultations & estimates
                  </li>
                </ul>
              </div>
            </div>

            <Card className="glass-card border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-sans">Request Your Free Quote</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and we'll contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-name" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                        Full Name *
                      </label>
                      <Input id="home-name" placeholder="Your full name" required className="glass-input" />
                    </div>
                    <div>
                      <label htmlFor="home-phone" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                        Phone Number *
                      </label>
                      <Input id="home-phone" placeholder="+1 437-982-0419" required className="glass-input" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="home-email" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                      Email Address *
                    </label>
                    <Input
                      id="home-email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="glass-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-service" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                      Service Needed
                    </label>
                    <select
                      id="home-service"
                      className="w-full px-3 py-2 glass-input rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      <option value="">Select a service</option>
                      <option value="kitchen">Kitchen Renovation</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="basement">Basement Finishing</option>
                      <option value="deck">Deck Construction</option>
                      <option value="carpentry">Custom Carpentry</option>
                      <option value="painting">Painting Services</option>
                      <option value="full-renovation">Full Home Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="home-project" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                      Project Details *
                    </label>
                    <Textarea
                      id="home-project"
                      placeholder="Tell us about your project..."
                      rows={4}
                      required
                      className="glass-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="home-timeline" className="block text-sm font-medium mb-2 text-gray-300 font-sans">
                      When would you like to start?
                    </label>
                    <select
                      id="home-timeline"
                      className="w-full px-3 py-2 glass-input rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="planning">Just planning ahead</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full glass-button text-white text-lg py-3 font-sans font-semibold">
                    Get My Free Quote
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to be contacted regarding your project. No spam, guaranteed.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-darker py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/logo.jpg" alt="JCV Contracting Logo" width={32} height={32} className="rounded" />
                <span className="ml-2 text-xl font-bold text-white font-sans">JCV Contracting</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming homes across Toronto with quality craftsmanship and creative design solutions.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sans">Services</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-gray-400">Home Renovation</span>
                </li>
                <li>
                  <span className="text-gray-400">Kitchen Upgrades</span>
                </li>
                <li>
                  <span className="text-gray-400">Bathroom Remodeling</span>
                </li>
                <li>
                  <span className="text-gray-400">Custom Carpentry</span>
                </li>
                <li>
                  <span className="text-gray-400">Interior Design</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sans">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">+1 437-982-0419</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">jezreelcapsuyen@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-gray-400">Toronto, ON, Canada</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} JCV Contracting. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
