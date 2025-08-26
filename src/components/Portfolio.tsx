import { useState } from 'react'
import { ExternalLink, MapPin, Square, Bed, Bath, Expand } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import images
import portfolioImage1 from '../assets/images/portfolio/pexels-photo-106399.jpeg'
import portfolioImage2 from '../assets/images/portfolio/pexels-photo-323780.jpeg'
import portfolioImage3 from '../assets/images/portfolio/pexels-photo-2581922.jpeg'
import portfolioImage4 from '../assets/images/portfolio/pexels-photo-1571460.jpeg'
import portfolioImage5 from '../assets/images/portfolio/pexels-photo-1643383.jpeg'
import portfolioImage6 from '../assets/images/portfolio/pexels-photo-280229.jpeg'

interface Project {
  id: number
  title: string
  location: string
  type: string
  sqft: number
  bedrooms: number
  bathrooms: number
  image: string
  featured: boolean
  description: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Hill Country Modern",
    location: "Westlake Hills, Austin",
    type: "Custom Luxury Home",
    sqft: 4200,
    bedrooms: 5,
    bathrooms: 4.5,
    image: portfolioImage1,
    featured: true,
    description: "A stunning modern home with panoramic hill country views, featuring floor-to-ceiling windows and sustainable materials."
  },
  {
    id: 2,
    title: "Tarrytown Traditional",
    location: "Tarrytown, Austin",
    type: "Classic Restoration",
    sqft: 3800,
    bedrooms: 4,
    bathrooms: 3.5,
    image: portfolioImage2,
    featured: true,
    description: "Beautifully restored historic home with modern amenities while preserving original architectural details."
  },
  {
    id: 3,
    title: "Lake Travis Retreat",
    location: "Lake Travis",
    type: "Waterfront Estate",
    sqft: 5200,
    bedrooms: 6,
    bathrooms: 5.5,
    image: portfolioImage3,
    featured: true,
    description: "Luxury waterfront property with private dock, infinity pool, and expansive outdoor living spaces."
  },
  {
    id: 4,
    title: "Downtown Loft Conversion",
    location: "Downtown Austin",
    type: "Urban Loft",
    sqft: 2800,
    bedrooms: 3,
    bathrooms: 2.5,
    image: portfolioImage4,
    featured: false,
    description: "Industrial-chic loft conversion in the heart of downtown, featuring exposed brick and modern finishes."
  },
  {
    id: 5,
    title: "Barton Creek Contemporary",
    location: "Barton Creek",
    type: "Modern Farmhouse",
    sqft: 4500,
    bedrooms: 5,
    bathrooms: 4,
    image: portfolioImage5,
    featured: false,
    description: "Modern farmhouse design with wrap-around porches, custom millwork, and energy-efficient features."
  },
  {
    id: 6,
    title: "Mueller Modern",
    location: "Mueller District",
    type: "Sustainable Home",
    sqft: 3200,
    bedrooms: 4,
    bathrooms: 3,
    image: portfolioImage6,
    featured: false,
    description: "LEED-certified sustainable home with solar panels, rainwater collection, and native landscaping."
  }
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['all', 'luxury', 'traditional', 'modern', 'sustainable']

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.type.toLowerCase().includes(selectedCategory))

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of custom-built homes that showcase our craftsmanship, 
            attention to detail, and commitment to excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              aria-label={`Filter projects by ${category} category`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Expand className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin size={16} />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Square size={16} />
                      <span>{project.sqft.toLocaleString()} sqft</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed size={16} />
                      <span>{project.bedrooms} bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath size={16} />
                      <span>{project.bathrooms} bath</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/portfolio"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center gap-2 transition-all duration-300 transform hover:scale-105 mx-auto"
            aria-label="View our complete portfolio of custom home projects"
          >
            View Full Portfolio <ExternalLink size={20} />
          </Link>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
                aria-label="Close project details modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
              
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin size={18} />
                <span>{selectedProject.location}</span>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Square className="mx-auto mb-2 text-primary-500" size={24} />
                  <div className="text-sm text-gray-600">Square Feet</div>
                  <div className="font-bold text-gray-900">{selectedProject.sqft.toLocaleString()}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bed className="mx-auto mb-2 text-primary-500" size={24} />
                  <div className="text-sm text-gray-600">Bedrooms</div>
                  <div className="font-bold text-gray-900">{selectedProject.bedrooms}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Bath className="mx-auto mb-2 text-primary-500" size={24} />
                  <div className="text-sm text-gray-600">Bathrooms</div>
                  <div className="font-bold text-gray-900">{selectedProject.bathrooms}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-600">Project Type</div>
                  <div className="font-bold text-gray-900">{selectedProject.type}</div>
                </div>
              </div>
              
              <Link 
                to="/contact"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block text-center"
                aria-label="Schedule a tour of this custom home"
              >
                Schedule a Tour of This Home
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
