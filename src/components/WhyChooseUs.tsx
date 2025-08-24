import { Award, Shield, Clock, Heart, Users, Home } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "Award-Winning Craftsmanship",
    description: "Recognized by the Texas Builders Association for excellence in custom home construction and innovative design solutions."
  },
  {
    icon: Shield,
    title: "Lifetime Structural Warranty",
    description: "Peace of mind with our comprehensive warranty covering structural integrity for the lifetime of your home."
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "97% of our projects finish on or ahead of schedule through meticulous planning and experienced project management."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Dedicated project manager and design consultant assigned to every project for seamless communication."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Deep understanding of Austin's building codes, soil conditions, and architectural styles since 2005."
  },
  {
    icon: Home,
    title: "Energy Efficient",
    description: "Built to exceed energy efficiency standards with smart home integration and sustainable materials."
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-1 bg-primary-500" />
            <span className="text-primary-500 font-semibold uppercase tracking-wide text-sm">
              WHY CHOOSE US
            </span>
            <div className="w-8 h-1 bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built on Trust, Crafted with Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every home we build is a testament to our commitment to quality, innovation, 
            and the relationships we build with our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Homes Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
