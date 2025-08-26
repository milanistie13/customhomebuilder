import { Users, Award, MapPin, Phone, Mail, Clock, Star, CheckCircle, Building, Heart, Shield, Zap } from 'lucide-react'

// Import images
import michaelImage from '../assets/images/about/pexels-photo-2379004.jpeg'
import sarahImage from '../assets/images/about/pexels-photo-415829.jpeg'
import jamesImage from '../assets/images/about/pexels-photo-2379004.jpeg'
import emilyImage from '../assets/images/about/pexels-photo-712513.jpeg'
import storyImage from '../assets/images/about/pexels-photo-323780.jpeg'
import heroImage from '../assets/images/hero/pexels-photo-106399.jpeg'

const teamMembers = [
  {
    name: "Michael Rodriguez",
    position: "Founder & CEO",
    experience: "25+ years",
    image: michaelImage,
    bio: "With over two decades in custom home building, Michael leads our company with passion and expertise.",
    specialties: ["Project Management", "Client Relations", "Strategic Planning"]
  },
  {
    name: "Sarah Chen",
    position: "Lead Architect",
    experience: "18+ years",
    image: sarahImage,
    bio: "Sarah brings creative vision and technical excellence to every design, ensuring both beauty and functionality.",
    specialties: ["Architectural Design", "3D Visualization", "Sustainable Design"]
  },
  {
    name: "David Thompson",
    position: "Construction Manager",
    experience: "20+ years",
    image: jamesImage,
    bio: "David oversees all construction operations, ensuring quality and safety on every project site.",
    specialties: ["Site Management", "Quality Control", "Safety Compliance"]
  },
  {
    name: "Emily Martinez",
    position: "Interior Designer",
    experience: "15+ years",
    image: emilyImage,
    bio: "Emily creates stunning interior spaces that reflect each client's unique style and preferences.",
    specialties: ["Interior Design", "Material Selection", "Color Theory"]
  }
]

const values = [
  {
    icon: Heart,
    title: "Passion for Excellence",
    description: "We approach every project with enthusiasm and dedication, striving to exceed expectations in every detail."
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description: "Honest communication, transparent pricing, and reliable service build lasting relationships with our clients."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We embrace new technologies and building methods to deliver cutting-edge solutions for modern living."
  },
  {
    icon: Building,
    title: "Quality Craftsmanship",
    description: "Our skilled artisans and premium materials ensure every home is built to last for generations."
  }
]

const achievements = [
  {
    number: "500+",
    label: "Homes Built",
    description: "Successfully completed projects across Austin and surrounding areas"
  },
  {
    number: "25+",
    label: "Years Experience",
    description: "Decades of expertise in custom home construction"
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Overwhelming positive feedback from our homeowners"
  },
  {
    number: "50+",
    label: "Awards Won",
    description: "Recognition for design excellence and quality construction"
  }
]

const timeline = [
  {
    year: "1999",
    title: "Company Founded",
    description: "Started as a small family business with a vision for quality custom homes"
  },
  {
    year: "2005",
    title: "First Major Project",
    description: "Completed our first luxury custom home, establishing our reputation for excellence"
  },
  {
    year: "2010",
    title: "Expansion",
    description: "Grew our team and expanded services to include remodeling and architectural design"
  },
  {
    year: "2015",
    title: "Sustainability Focus",
    description: "Launched our green building initiative, incorporating eco-friendly practices"
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Integrated advanced 3D visualization and project management tools"
  },
  {
    year: "2024",
    title: "Industry Leader",
    description: "Recognized as one of Austin's premier custom home builders"
  }
]

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative hero-section bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building dreams into reality with passion, expertise, and unwavering commitment to quality
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-primary-500" />
                <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
                  OUR STORY
                </span>
                <div className="w-8 h-1 bg-primary-500" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 1999, Austin Custom Homes has been at the forefront of residential construction 
                in Central Texas for over two decades. What began as a small family business has grown into 
                one of the region's most trusted names in custom home building.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our journey has been driven by a simple philosophy: every home should be a reflection of 
                its owner's dreams, built with the highest standards of craftsmanship and attention to detail. 
                We've maintained this commitment through economic ups and downs, technological advances, 
                and changing design trends.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Licensed & Insured</div>
                    <div className="text-sm text-gray-500">Full coverage protection</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">A+ Rating</div>
                    <div className="text-sm text-gray-500">BBB accredited business</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="Custom home under construction"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-6">
                <div className="text-3xl font-bold text-primary-600">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every relationship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="text-white font-semibold">{member.experience} Experience</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary-500" />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that tell the story of our success and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our company and our commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Year Badge */}
                  <div className="absolute left-0 top-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hidden lg:flex">
                    {item.year}
                  </div>
                  
                  <div className="lg:ml-24">
                    <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-primary-500">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your custom home journey? Let's discuss your vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
              <p className="text-gray-600">
                1234 Custom Home Blvd<br />
                Austin, TX 78701
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Us</h3>
              <p className="text-gray-600">
                (512) 555-1234<br />
                Mon-Fri: 8AM-6PM
              </p>
            </div>

            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Us</h3>
              <p className="text-gray-600">
                info@austincustomhomes.com<br />
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and see how our team can bring it to life with the same 
            passion and expertise that has made us Austin's trusted custom home builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border border-white transition-colors">
              Download Company Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
