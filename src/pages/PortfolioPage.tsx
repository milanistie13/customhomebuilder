import { useState } from 'react'
import { ExternalLink, MapPin, Square, Bed, Bath, Expand, Filter, Grid, List } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

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
  year: number
  style: string
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
    description: "A stunning modern home with panoramic hill country views, featuring floor-to-ceiling windows and sustainable materials.",
    year: 2024,
    style: "Modern"
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
    description: "Beautifully restored historic home with modern amenities while preserving original architectural details.",
    year: 2023,
    style: "Traditional"
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
    description: "Luxury waterfront property with private dock, infinity pool, and expansive outdoor living spaces.",
    year: 2024,
    style: "Luxury"
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
    description: "Industrial-chic loft conversion in the heart of downtown, featuring exposed brick and modern finishes.",
    year: 2023,
    style: "Industrial"
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
    description: "Modern farmhouse design with wrap-around porches, custom millwork, and energy-efficient features.",
    year: 2024,
    style: "Farmhouse"
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
    description: "LEED-certified sustainable home with solar panels, rainwater collection, and native landscaping.",
    year: 2023,
    style: "Sustainable"
  }
]

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStyle, setSelectedStyle] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ['all', 'luxury', 'traditional', 'modern', 'sustainable', 'farmhouse', 'industrial']
  const styles = ['all', 'Modern', 'Traditional', 'Luxury', 'Farmhouse', 'Industrial', 'Sustainable']
  const years = ['all', '2024', '2023', '2022']

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.type.toLowerCase().includes(selectedCategory)
    const styleMatch = selectedStyle === 'all' || project.style === selectedStyle
    const yearMatch = selectedYear === 'all' || project.year.toString() === selectedYear
    return categoryMatch && styleMatch && yearMatch
  })

  return (
    <div className="bg-white">
      <SEO
        title="Our Portfolio - Custom Home Projects | Austin Custom Homes"
        description="Explore our portfolio of custom homes, renovations, and architectural masterpieces in Austin, TX. Discover our commitment to quality, innovation, and client satisfaction."
        keywords="custom home portfolio Austin TX, home construction projects, architectural design portfolio, luxury home examples, custom home gallery Austin"
        ogTitle="Our Portfolio - Custom Home Projects | Austin Custom Homes"
        ogDescription="Explore our portfolio of custom homes, renovations, and architectural masterpieces in Austin, TX. Discover our commitment to quality, innovation, and client satisfaction."
      />
      {/* Hero Section */}
      <section className="relative hero-section bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of custom homes, renovations, and architectural masterpieces
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50 border-b filters-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col space-y-6">
            {/* Filter Header */}
            <div className="flex items-center gap-3">
              <Filter className="text-primary-500" size={20} />
              <span className="font-semibold text-gray-700">Filters:</span>
            </div>
            
            {/* Filters Row - Stack on mobile, horizontal on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {/* Category Filter */}
              <div className="flex flex-col w-full">
                <label htmlFor="category-filter" className="text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select 
                  id="category-filter"
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Style Filter */}
              <div className="flex flex-col w-full">
                <label htmlFor="style-filter" className="text-sm font-medium text-gray-700 mb-2">
                  Style
                </label>
                <select 
                  id="style-filter"
                  value={selectedStyle} 
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-sm"
                >
                  {styles.map(style => (
                    <option key={style} value={style}>
                      {style === 'all' ? 'All Styles' : style}
                    </option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div className="flex flex-col w-full">
                <label htmlFor="year-filter" className="text-sm font-medium text-gray-700 mb-2">
                  Year
                </label>
                <select 
                  id="year-filter"
                  value={selectedYear} 
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white text-sm"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Mode Toggle - Centered below filters */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-300 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-500'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:text-primary-500'
                  }`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to quality, innovation, and client satisfaction
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square size={16} />
                        <span>{project.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Bed size={16} />
                          <span>{project.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath size={16} />
                          <span>{project.bathrooms}</span>
                        </div>
                      </div>
                      <button className="text-primary-500 hover:text-primary-600 font-semibold">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative lg:w-1/3 h-64 lg:h-auto overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:w-2/3 p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 lg:mb-0">{project.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{project.year}</span>
                          <span className="px-3 py-1 bg-gray-100 rounded-full">{project.style}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{project.sqft.toLocaleString()}</div>
                          <div className="text-sm text-gray-500">Square Feet</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{project.bedrooms}</div>
                          <div className="text-sm text-gray-500">Bedrooms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{project.bathrooms}</div>
                          <div className="text-sm text-gray-500">Bathrooms</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary-600">{project.type}</div>
                          <div className="text-sm text-gray-500">Type</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-500">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <Link 
                          to="/contact"
                          className="text-primary-500 hover:text-primary-600 font-semibold flex items-center gap-2"
                          aria-label={`Schedule a consultation for ${project.title} project`}
                        >
                          View Details
                          <ExternalLink size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more projects.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedStyle('all')
                  setSelectedYear('all')
                }}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Inspired by Our Work?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Your dream home is just a conversation away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
              aria-label="Start your custom home project with a free consultation"
            >
              Start Your Project
            </Link>
            <Link 
              to="/contact"
              className="bg-white hover:bg-gray-50 text-primary-500 font-semibold py-4 px-8 rounded-lg border border-primary-500 transition-colors"
              aria-label="Schedule a free consultation for your custom home project"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
              >
                <Expand size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{selectedProject.sqft.toLocaleString()}</div>
                  <div className="text-sm text-gray-500">Square Feet</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{selectedProject.bedrooms}</div>
                  <div className="text-sm text-gray-500">Bedrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{selectedProject.bathrooms}</div>
                  <div className="text-sm text-gray-500">Bathrooms</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary-600">{selectedProject.year}</div>
                  <div className="text-sm text-gray-500">Year Built</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-500">
                  <MapPin size={16} />
                  <span>{selectedProject.location}</span>
                </div>
                <Link 
                  to="/contact"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  aria-label={`Get a free quote for ${selectedProject.title} project`}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
