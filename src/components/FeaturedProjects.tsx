import { ArrowRight } from 'lucide-react'

// Import local images
import lakeTravisImage from '../assets/images/featured/pexels-photo-106399.jpeg'
import bartonCreekImage from '../assets/images/featured/pexels-photo-323780.jpeg'
import downtownLoftImage from '../assets/images/featured/pexels-photo-2581922.jpeg'

const projects = [
  {
    id: 1,
    title: "Lake Travis Modern",
    location: "Austin, TX",
    description: "Contemporary lakeside retreat with panoramic views",
    image: lakeTravisImage,
    features: ["4 Bedrooms", "3.5 Baths", "3,200 sq ft"]
  },
  {
    id: 2,
    title: "Barton Creek Estate",
    location: "Austin, TX",
    description: "Luxury hill country home with sustainable features",
    image: bartonCreekImage,
    features: ["5 Bedrooms", "4.5 Baths", "4,800 sq ft"]
  },
  {
    id: 3,
    title: "Downtown Loft",
    location: "Austin, TX",
    description: "Urban sophistication meets industrial chic",
    image: downtownLoftImage,
    features: ["3 Bedrooms", "2 Baths", "2,400 sq ft"]
  }
]

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of custom-built homes in the Austin area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-200">{project.location}</p>
                </div>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <button 
                  className="flex items-center gap-2 text-primary-500 font-medium hover:text-primary-600 transition-colors"
                  aria-label={`View details for ${project.title} project`}
                >
                  View Project <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 transition-colors"
            aria-label="View our complete portfolio of custom home projects"
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
