import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Hammer,
  ChefHat,
  Home,
  Wrench,
  PaintBucket,
  Sparkles,
  StepBackIcon as Stairs,
  TreePine,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import Navigation from "@/components/navigation"
// import servicesNavigation from "@/services/nav"
import ServicesNavigation from "./nav"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Complete Home Renovation",
      description: "Transform your entire home with our comprehensive renovation services",
      features: [
        "Structural modifications",
        "Room additions",
        "Open floor plans",
        "Modern updates",
        "Project management",
      ],
      image: "/images/kitchen-consultation.jpg",
      price: "Starting from $50,000",
      duration: "3-6 months",
      popular: true,
    },
    {
      icon: ChefHat,
      title: "Kitchen Remodeling",
      description: "Create the heart of your home with modern, functional kitchen designs",
      features: [
        "Custom cabinetry",
        "Countertop installation",
        "Appliance integration",
        "Lighting design",
        "Plumbing updates",
      ],
      image: "/images/laundry-room.jpg",
      price: "Starting from $25,000",
      duration: "4-8 weeks",
      popular: true,
    },
    {
      icon: Sparkles,
      title: "Bathroom Renovation",
      description: "Transform your bathroom into a luxurious, spa-like retreat",
      features: ["Tile work", "Fixture installation", "Vanity design", "Shower/tub renovation", "Heated floors"],
      image: "/images/built-in-storage.jpg",
      price: "Starting from $15,000",
      duration: "3-5 weeks",
      popular: false,
    },
    {
      icon: Wrench,
      title: "Basement Finishing",
      description: "Convert unused basement space into functional, beautiful living areas",
      features: ["Waterproofing", "Insulation", "Flooring", "Entertainment rooms", "Home offices"],
      image: "/images/deck-project.jpg",
      price: "Starting from $20,000",
      duration: "6-10 weeks",
      popular: false,
    },
    {
      icon: Hammer,
      title: "Custom Carpentry",
      description: "Handcrafted woodwork and built-in solutions tailored to your needs",
      features: ["Built-in storage", "Custom shelving", "Trim work", "Furniture pieces", "Closet systems"],
      image: "/images/built-in-storage.jpg",
      price: "Starting from $5,000",
      duration: "2-4 weeks",
      popular: false,
    },
    {
      icon: PaintBucket,
      title: "Interior & Exterior Painting",
      description: "Professional painting services for a complete home refresh",
      features: ["Color consultation", "Surface preparation", "Quality materials", "Clean finish", "Warranty included"],
      image: "/images/laundry-room.jpg",
      price: "Starting from $3,000",
      duration: "1-2 weeks",
      popular: false,
    },
    {
      icon: Stairs,
      title: "Deck & Patio Construction",
      description: "Create stunning outdoor living spaces for relaxation and entertainment",
      features: ["Custom deck design", "Quality materials", "Railings & stairs", "Weather protection", "Lighting"],
      image: "/images/deck-project.jpg",
      price: "Starting from $8,000",
      duration: "2-3 weeks",
      popular: false,
    },
    {
      icon: TreePine,
      title: "Landscaping & Hardscaping",
      description: "Complete outdoor transformations and curb appeal enhancement",
      features: ["Garden design", "Walkways", "Retaining walls", "Outdoor lighting", "Irrigation systems"],
      image: "/images/kitchen-consultation.jpg",
      price: "Starting from $10,000",
      duration: "3-6 weeks",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <Navigation />
       */}
       <ServicesNavigation />
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12 rounded-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans gradient-text">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From complete home renovations to custom carpentry, we offer comprehensive construction and remodeling
              services to transform your space with precision and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:+14379820419">
                <Button size="lg" className="glass-button text-white font-sans font-semibold">
                  Call for Free Quote
                </Button>
              </a>
              <a href="mailto:jezreelcapsuyen@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-md bg-white/10 border-white/30 hover:bg-white/20 text-white font-sans"
                >
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">Professional Services</h2>
            <p className="text-xl text-gray-300">Choose from our comprehensive range of home improvement services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="glass-card hover:bg-white/10 transition-all duration-500 group relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-teal-500 text-white font-sans font-semibold">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  </div>
                )}

                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="glass-card p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-teal-400" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white font-sans group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-teal-400 font-sans">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 font-sans">Starting Price</span>
                      <span className="text-lg font-bold text-teal-400 font-sans">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-400 font-sans">Timeline</span>
                      <span className="text-sm text-white font-sans">{service.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a href="tel:+14379820419" className="flex-1">
                      <Button className="w-full glass-button text-white font-sans font-semibold">Get Quote</Button>
                    </a>
                    <a href="mailto:jezreelcapsuyen@gmail.com">
                      <Button
                        variant="outline"
                        className="backdrop-blur-md bg-white/5 border-white/20 hover:bg-white/10 text-white"
                      >
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional results for every project</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "We meet to discuss your vision, needs, and budget for the project.",
              },
              {
                step: "2",
                title: "Design & Planning",
                description: "Our team creates detailed plans and provides accurate cost estimates.",
              },
              {
                step: "3",
                title: "Project Execution",
                description: "Skilled craftsmen bring your project to life with quality materials.",
              },
              {
                step: "4",
                title: "Final Walkthrough",
                description: "We ensure everything meets our high standards and your expectations.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-slate-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold font-sans group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-sans">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 font-sans gradient-text">See Our Work in Action</h2>
            <p className="text-xl text-gray-300">Watch our craftsmen transform spaces</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-4 rounded-2xl group">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <video controls className="w-full h-full object-cover" poster="/images/deck-project.jpg">
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
                <video controls className="w-full h-full object-cover" poster="/images/built-in-storage.jpg">
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
                <video controls className="w-full h-full object-cover" poster="/images/laundry-room.jpg">
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
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 section-darker">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-3xl">
            <h2 className="text-4xl font-bold mb-6 font-sans gradient-text">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Contact us today for a free consultation and detailed estimate for your project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-4 rounded-lg">
                <Phone className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                <p className="text-white font-semibold font-sans">+1 437-982-0419</p>
                <p className="text-gray-400 text-sm">Call anytime</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <Mail className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                <p className="text-white font-semibold font-sans">jezreelcapsuyen@gmail.com</p>
                <p className="text-gray-400 text-sm">24hr response</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <MapPin className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                <p className="text-white font-semibold font-sans">Toronto, ON</p>
                <p className="text-gray-400 text-sm">Serving Ontario</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14379820419">
                <Button size="lg" className="glass-button text-white font-sans font-semibold">
                  Call for Free Quote
                </Button>
              </a>
              <a href="mailto:jezreelcapsuyen@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="backdrop-blur-md bg-white/10 border-white/30 hover:bg-white/20 text-white font-sans"
                >
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-darker py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/images/logo.jpg" alt="JCV Contracting Logo" width={32} height={32} className="rounded" />
                <span className="ml-2 text-xl font-bold text-white font-sans">JCV Contracting</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming homes across Toronto with quality craftsmanship and creative design solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white font-sans">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Services
                  </Link>
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
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} JCV Contracting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
