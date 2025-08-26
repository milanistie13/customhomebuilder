import { Building, Hammer, Ruler, Paintbrush, Wrench, Lightbulb } from 'lucide-react'
import { Link } from 'react-router-dom'

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
    image: serviceImage1
  },
  {
    icon: Hammer,
    title: "Home Remodeling",
    description: "Transform your existing space with our expert remodeling services and attention to detail.",
    features: ["Kitchen Renovations", "Bathroom Updates", "Room Additions", "Structural Changes"],
    image: serviceImage2
  },
  {
    icon: Ruler,
    title: "Architectural Design",
    description: "Collaborative design process creating functional, beautiful spaces that reflect your vision.",
    features: ["Floor Plan Development", "3D Renderings", "Material Specifications", "Permit Assistance"],
    image: serviceImage3
  },
  {
    icon: Paintbrush,
    title: "Interior Finishing",
    description: "Premium finishes and custom details that elevate your home's aesthetic and functionality.",
    features: ["Custom Millwork", "Premium Flooring", "Lighting Design", "Hardware Selection"],
    image: serviceImage4
  },
  {
    icon: Wrench,
    title: "Smart Home Integration",
    description: "Seamless integration of modern technology for comfort, security, and energy efficiency.",
    features: ["Home Automation", "Security Systems", "Energy Management", "Audio/Visual"],
    image: serviceImage5
  },
  {
    icon: Lightbulb,
    title: "Sustainable Building",
    description: "Eco-friendly construction practices and materials for a healthier, more efficient home.",
    features: ["Energy Star Certified", "Solar Ready", "Water Conservation", "Green Materials"],
    image: serviceImage6
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-primary-500" />
            <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
              OUR SERVICES
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
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/services"
                  className="mt-8 w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
                  aria-label={`Learn more about ${service.title} services`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our team to discuss your vision and how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center"
              aria-label="Schedule a free consultation for your custom home project"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/process"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-8 rounded-lg border border-primary-200 transition-all duration-300 inline-block text-center"
              aria-label="View our step-by-step home building process"
            >
              View Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
