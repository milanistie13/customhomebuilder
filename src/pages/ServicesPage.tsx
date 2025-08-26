import { SEO } from '../components/SEO'
import { Building, Hammer, Ruler, Paintbrush, Wrench, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react'

// Import images
import serviceImage1 from '../assets/images/services/pexels-photo-106399.jpeg'
import serviceImage2 from '../assets/images/services/pexels-photo-1571460.jpeg'
import serviceImage3 from '../assets/images/services/pexels-photo-1643383.jpeg'
import serviceImage4 from '../assets/images/services/pexels-photo-1457842.jpeg'
import serviceImage5 from '../assets/images/services/pexels-photo-943150.jpeg'
import serviceImage6 from '../assets/images/services/pexels-photo-2219024.jpeg'

const services = [
  {
    icon: Building,
    title: "Custom Home Construction",
    description: "From concept to completion, we build bespoke homes tailored to your lifestyle and preferences.",
    features: ["Architectural Design", "3D Visualization", "Material Selection", "Project Management"],
    image: serviceImage1,
    price: "Starting at $350/sqft",
    duration: "8-12 months"
  },
  {
    icon: Hammer,
    title: "Home Remodeling",
    description: "Transform your existing space with our expert remodeling services and attention to detail.",
    features: ["Kitchen Renovations", "Bathroom Updates", "Room Additions", "Structural Changes"],
    image: serviceImage2,
    price: "Starting at $200/sqft",
    duration: "3-6 months"
  },
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "Collaborative design process creating functional, beautiful spaces that reflect your vision.",
    features: ["Floor Plan Development", "3D Renderings", "Material Specifications", "Permit Assistance"],
    image: serviceImage3,
    price: "Starting at $15/sqft",
    duration: "4-8 weeks"
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    description: "Premium finishes and custom details that elevate your home's aesthetic and functionality.",
    features: ["Custom Millwork", "Premium Flooring", "Lighting Design", "Hardware Selection"],
    image: serviceImage4,
    price: "Starting at $75/sqft",
    duration: "2-4 months"
  },
  {
    icon: Wrench,
    title: "Smart Home Integration",
    description: "Seamless integration of modern technology for comfort, security, and energy efficiency.",
    features: ["Home Automation", "Security Systems", "Energy Management", "Audio/Visual"],
    image: serviceImage5,
    price: "Starting at $25,000",
    duration: "2-3 months"
  },
  {
    icon: Lightbulb,
    title: "Sustainable Building",
    description: "Eco-friendly construction practices and materials for a healthier, more efficient home.",
    features: ["Energy Star Certified", "Solar Ready", "Water Conservation", "Green Materials"],
    image: serviceImage6,
    price: "Starting at $400/sqft",
    duration: "10-14 months"
  }
]

export function ServicesPage() {
  return (
    <div className="bg-white">
      <SEO 
        title="Custom Home Building Services - Austin, TX | Construction & Remodeling"
        description="Comprehensive custom home building services in Austin, TX. From architectural design to smart home integration, we handle every aspect of your dream home project."
        keywords="custom home building services Austin TX, home construction, architectural design, home remodeling, smart home integration, sustainable building"
        ogTitle="Custom Home Building Services - Austin, TX | Construction & Remodeling"
        ogDescription="Comprehensive custom home building services in Austin, TX. From architectural design to smart home integration, we handle every aspect of your dream home project."
      />
      {/* Hero Section */}
      <section className="relative hero-section bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive building solutions tailored to your unique vision and requirements
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-primary-500" />
              <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
                WHAT WE OFFER
              </span>
              <div className="w-8 h-1 bg-primary-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Building Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial design to final touches, we handle every aspect of your custom home project 
              with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 bg-white">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold text-primary-600">{service.price}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold">Duration: {service.duration}</span>
                    </div>
                  </div>
                  
                  <button 
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    aria-label={`Get a free quote for ${service.title} services`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create a custom solution that exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              aria-label="Schedule a free consultation for your custom home project"
            >
              Schedule Consultation
            </button>
            <button 
              className="bg-white hover:bg-gray-50 text-primary-500 font-semibold py-4 px-8 rounded-lg border border-primary-500 transition-colors"
              aria-label="Download our company brochure with service details and pricing"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
