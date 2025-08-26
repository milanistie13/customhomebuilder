import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import all local images
import sarahMichaelImage from '../assets/images/testimonials/pexels-photo-774909.jpeg'
import davidChenImage from '../assets/images/testimonials/pexels-photo-2379004.jpeg'
import rodriguezFamilyImage from '../assets/images/testimonials/pexels-photo-1239291.jpeg'
import jenniferParkImage from '../assets/images/testimonials/pexels-photo-415829.jpeg'
import markLisaImage from '../assets/images/testimonials/pexels-photo-220453.jpeg'
import emilyWilliamsImage from '../assets/images/testimonials/pexels-photo-712513.jpeg'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  project: string
  image: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    location: "Westlake Hills, Austin",
    rating: 5,
    text: "Working with this team was an absolute pleasure. They transformed our vision into reality while staying on budget and timeline. The attention to detail and craftsmanship is exceptional.",
    project: "Hill Country Modern Home",
    image: sarahMichaelImage,
    date: "January 2024"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Tarrytown, Austin",
    rating: 5,
    text: "As an architect myself, I'm extremely particular about construction quality. This team exceeded my expectations in every way. Their problem-solving skills and dedication to perfection are remarkable.",
    project: "Historic Home Restoration",
    image: davidChenImage,
    date: "November 2023"
  },
  {
    id: 3,
    name: "The Rodriguez Family",
    location: "Lake Travis",
    rating: 5,
    text: "Our waterfront dream home came to life exactly as we imagined. The team handled all the complex permitting and environmental considerations seamlessly. We couldn't be happier!",
    project: "Lakefront Estate",
    image: rodriguezFamilyImage,
    date: "August 2023"
  },
  {
    id: 4,
    name: "Jennifer Park",
    location: "Downtown Austin",
    rating: 5,
    text: "The loft conversion was challenging, but this team made it look easy. They preserved the historic character while adding modern comforts. The quality is outstanding.",
    project: "Urban Loft Conversion",
    image: jenniferParkImage,
    date: "June 2023"
  },
  {
    id: 5,
    name: "Mark & Lisa Thompson",
    location: "Barton Creek",
    rating: 5,
    text: "From design to completion, the communication was excellent. They kept us informed every step of the way and delivered a home that's both beautiful and functional.",
    project: "Modern Farmhouse",
    image: markLisaImage,
    date: "March 2023"
  },
  {
    id: 6,
    name: "Dr. Emily Williams",
    location: "Mueller District",
    rating: 5,
    text: "The sustainable features in our home are incredible. The team's expertise in green building practices saved us money and created a healthier living environment.",
    project: "LEED-Certified Home",
    image: emilyWilliamsImage,
    date: "December 2022"
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-rotate testimonials
  useState(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  })

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-primary-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Read what our satisfied homeowners 
            have to say about their experience building with us.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-100">
              <Quote size={48} />
            </div>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`${
                    i < currentTestimonial.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-800 text-center mb-8 font-light leading-relaxed">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {currentTestimonial.location} • {currentTestimonial.date}
                  </p>
                  <p className="text-primary-500 font-medium text-sm">
                    {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">150+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">15</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-300">Awards Won</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/about"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mx-auto inline-block"
            aria-label="Read more customer reviews and testimonials"
          >
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  )
}
