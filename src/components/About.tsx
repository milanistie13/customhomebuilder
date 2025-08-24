import { useState } from 'react'
import { Play, Award, Users, Home, Shield, Heart } from 'lucide-react'

// Import all local images
import michaelImage from '../assets/images/about/pexels-photo-2182970.jpeg'
import sarahImage from '../assets/images/about/pexels-photo-415829.jpeg'
import jamesImage from '../assets/images/about/pexels-photo-2379004.jpeg'
import emilyImage from '../assets/images/about/pexels-photo-712513.jpeg'
import storyImage from '../assets/images/about/pexels-photo-323780.jpeg'

export function About() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Founder & CEO",
      experience: "25+ years",
      image: michaelImage,
      bio: "Master builder with a passion for creating homes that stand the test of time."
    },
    {
      name: "Sarah Chen",
      role: "Lead Architect",
      experience: "15+ years",
      image: sarahImage,
      bio: "Award-winning architect specializing in sustainable and functional design."
    },
    {
      name: "James Wilson",
      role: "Project Manager",
      experience: "12+ years",
      image: jamesImage,
      bio: "Detail-oriented project manager ensuring every project meets our high standards."
    },
    {
      name: "Emily Davis",
      role: "Interior Designer",
      experience: "10+ years",
      image: emilyImage,
      bio: "Creative designer bringing warmth and personality to every space."
    }
  ]

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We do what's right, even when no one is watching. Honest pricing and transparent communication."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do, and it shows in every detail of your custom home."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Your vision is our blueprint. We work closely with you throughout the entire process."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never settle for good enough. Every home is built to exceed expectations."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-primary-500" />
            <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
              ABOUT US
            </span>
            <div className="w-8 h-1 bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Building Dreams Since 2005
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For nearly two decades, we've been crafting exceptional custom homes 
            that reflect the unique personalities and lifestyles of Austin families.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={storyImage}
                alt="Our story"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              
              {/* Video Play Button */}
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white rounded-full p-4 transition-all duration-300 hover:scale-110"
                aria-label="Play video about our company"
              >
                <Play size={32} className="ml-1" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2005 by Michael Rodriguez, our company began with a simple mission: 
                to build homes that families would cherish for generations. What started as a 
                small local builder has grown into Austin's premier custom home construction company.
              </p>
              <p>
                We've built over 200 homes across Travis County, each one unique and tailored 
                to our clients' specific needs. Our team of experienced craftsmen, architects, 
                and project managers work together to ensure every detail is perfect.
              </p>
              <p>
                Today, we continue to uphold the same values that guided us from the beginning: 
                quality craftsmanship, personalized service, and unwavering integrity.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                <div className="text-gray-600">Homes Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600">Repeat Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Awards Won</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from initial design to final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:bg-primary-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to making your dream home a reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
                
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{member.experience} experience</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video modal"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Home size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg">Company Story Video</p>
                <p className="text-gray-400 text-sm mt-2">Video content would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
