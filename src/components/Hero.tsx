import { ArrowRight, Home, Star, Award, Users, MapPin, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[900px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <img
          src="/src/assets/images/hero/pexels-photo-106399.jpeg"
          alt="Luxury custom home"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-blue-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-transparent" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-blue-400/20 rounded-full animate-pulse" />
        <div className="absolute bottom-40 left-10 w-20 h-20 border border-primary-500/30 rotate-45 animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-500/10 rounded-full animate-bounce delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse" />
              <span className="text-primary-300 font-medium text-sm tracking-wide">
                PREMIUM HOME BUILDER
              </span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9]">
                Crafting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-300">
                  Dream Homes
                </span>
                in Austin
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                Where luxury meets craftsmanship. We transform your vision into reality with 
                <span className="text-primary-300 font-semibold"> precision engineering</span> and 
                <span className="text-primary-300 font-semibold"> timeless design</span>.
              </p>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contact"
                className="group bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-semibold py-5 px-8 rounded-xl flex items-center gap-3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25"
                aria-label="Request a free consultation for your custom home project"
              >
                <span>Start Your Journey</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <Link 
                to="/portfolio"
                className="group bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-8 rounded-xl border border-white/20 flex items-center gap-3 transition-all duration-300 backdrop-blur-sm hover:border-white/40"
                aria-label="View our portfolio of custom home projects"
              >
                <span>View Portfolio</span>
                <div className="w-6 h-6 rounded-full border-2 border-white/40 group-hover:border-white/60 transition-colors duration-300 flex items-center justify-center">
                  <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </div>
            
            {/* Quick stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4 pb-20 sm:pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300 text-sm">Available for Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                <span className="text-gray-300 text-sm">Travis County</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Floating cards */}
          <div className="relative hidden lg:block">
            {/* Main floating card */}
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <Award size={16} className="text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="text-gray-300 text-sm">20+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="text-gray-300 text-sm">200+ Homes Delivered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="text-gray-300 text-sm">5-Star Rated</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center">
                  <Users size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Sarah & Mike</p>
                  <p className="text-gray-400 text-xs">Recent Clients</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm italic">
                "They turned our dream home into reality. The attention to detail is incredible!"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust badges */}
      <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 sm:p-6 rounded-2xl max-w-5xl mx-auto shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <Star className="text-yellow-400 fill-yellow-400" size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">5.0</p>
                <p className="text-gray-300 text-xs sm:text-sm">128 Reviews</p>
              </div>
            </div>
            
            <div className="h-8 sm:h-12 w-px bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                <Home className="text-primary-400" size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">200+</p>
                <p className="text-gray-300 text-xs sm:text-sm">Homes Built</p>
              </div>
            </div>
            
            <div className="h-8 sm:h-12 w-px bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Award className="text-blue-400" size={16} />
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base">20+</p>
                <p className="text-gray-300 text-xs sm:text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
