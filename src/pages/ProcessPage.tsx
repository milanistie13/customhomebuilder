import { CheckCircle, Clock, Users, FileText, Building, Home, Award, Phone } from 'lucide-react'
import { SEO } from '../components/SEO'

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We begin with a comprehensive discussion about your vision, budget, and timeline. This is where we get to know you and understand your unique requirements.",
    duration: "1-2 weeks",
    icon: Users,
    details: [
      "Free initial consultation",
      "Project requirements discussion",
      "Budget and timeline review",
      "Site evaluation",
      "Preliminary feasibility assessment"
    ],
    deliverables: ["Project brief", "Initial cost estimate", "Timeline outline"]
  },
  {
    id: 2,
    title: "Design & Planning",
    description: "Our architectural team works closely with you to create detailed designs that capture your vision while ensuring functionality and compliance.",
    duration: "4-8 weeks",
    icon: FileText,
    details: [
      "Architectural design development",
      "3D renderings and visualizations",
      "Material and finish selection",
      "Engineering and structural planning",
      "Permit application assistance"
    ],
    deliverables: ["Detailed floor plans", "3D renderings", "Material specifications", "Permit documents"]
  },
  {
    id: 3,
    title: "Pre-Construction",
    description: "We prepare everything needed for a smooth construction process, including finalizing contracts, securing permits, and preparing the site.",
    duration: "2-4 weeks",
    icon: Building,
    details: [
      "Contract finalization",
      "Permit acquisition",
      "Site preparation",
      "Material procurement",
      "Subcontractor coordination"
    ],
    deliverables: ["Signed contract", "Building permits", "Construction schedule", "Material orders"]
  },
  {
    id: 4,
    title: "Construction",
    description: "The exciting phase where your dream home becomes reality. Our skilled craftsmen bring the designs to life with precision and quality.",
    duration: "8-12 months",
    icon: Home,
    details: [
      "Foundation and framing",
      "Electrical and plumbing",
      "HVAC installation",
      "Interior and exterior finishing",
      "Quality control inspections"
    ],
    deliverables: ["Regular progress updates", "Quality inspection reports", "Timeline updates"]
  },
  {
    id: 5,
    title: "Final Inspection & Handover",
    description: "We conduct thorough final inspections to ensure everything meets our high standards before handing over your completed home.",
    duration: "1-2 weeks",
    icon: Award,
    details: [
      "Final quality inspection",
      "Punch list completion",
      "Warranty documentation",
      "Final walkthrough",
      "Key handover ceremony"
    ],
    deliverables: ["Completed home", "Warranty documentation", "Maintenance guide", "Final inspection report"]
  }
]

const testimonials = [
  {
    name: "Sarah & Michael Johnson",
    project: "Hill Country Modern Home",
    quote: "The process was incredibly smooth and transparent. We knew exactly what to expect at each stage.",
    rating: 5
  },
  {
    name: "David Chen",
    project: "Downtown Loft Conversion",
    quote: "Professional, timely, and the quality exceeded our expectations. Highly recommend!",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    project: "Barton Creek Farmhouse",
    quote: "They made our dream home a reality. The attention to detail was remarkable.",
    rating: 5
  }
]

export function ProcessPage() {
  return (
    <div className="bg-white">
      <SEO 
        title="Our Building Process - Custom Home Construction Steps | Austin, TX"
        description="Learn about our proven 5-step custom home building process in Austin, TX. From initial consultation to final walkthrough, discover how we bring your dream home to life."
        keywords="custom home building process Austin TX, home construction steps, building timeline, construction process, home building phases"
        ogTitle="Our Building Process - Custom Home Construction Steps | Austin, TX"
        ogDescription="Learn about our proven 5-step custom home building process in Austin, TX. From initial consultation to final walkthrough, discover how we bring your dream home to life."
      />
      {/* Hero Section */}
      <section className="relative hero-section bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Building Process
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent, step-by-step journey from concept to completion, ensuring your vision becomes reality
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-primary-500" />
              <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
                HOW WE WORK
              </span>
              <div className="w-8 h-1 bg-primary-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Dream to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 5-step process ensures transparency, quality, and satisfaction at every stage of your project
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 hidden lg:block" />
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  {/* Step Number */}
                  <div className="absolute left-0 top-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg hidden lg:flex">
                    {step.id}
                  </div>
                  
                  <div className="lg:ml-24">
                    <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-primary-500 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-8 h-8 text-primary-600" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">
                              {step.title}
                            </h3>
                            <div className="flex items-center gap-2 text-primary-600 font-semibold">
                              <Clock size={18} />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          
                          {/* Details Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-primary-500" />
                                What We Do
                              </h4>
                              <ul className="space-y-2">
                                {step.details.map((detail, detailIndex) => (
                                  <li key={detailIndex} className="flex items-start gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary-500" />
                                Deliverables
                              </h4>
                              <ul className="space-y-2">
                                {step.deliverables.map((deliverable, deliverableIndex) => (
                                  <li key={deliverableIndex} className="flex items-start gap-2 text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                                    <span>{deliverable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of experience have taught us that success comes from clear communication, 
              meticulous planning, and unwavering commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Communication</h3>
              <p className="text-gray-600">
                Regular updates, clear timelines, and open communication ensure you're always informed about your project's progress.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Multiple inspection points and quality checks throughout the process guarantee exceptional results that last.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">
                Our detailed planning and experienced team ensure your project stays on schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from homeowners who have experienced our process firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-primary-600 text-sm">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and walk you through our proven process step by step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors"
              aria-label="Schedule a free consultation to discuss your custom home project"
            >
              Schedule Consultation
            </button>
            <button 
              className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border border-white transition-colors"
              aria-label="Download our detailed process guide explaining each step of home building"
            >
              Download Process Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
