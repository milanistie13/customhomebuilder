import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { Services } from '../components/Services'
import { Portfolio } from '../components/Portfolio'
import { Testimonials } from '../components/Testimonials'
import ProcessTimeline from '../components/ProcessTimeline'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <div className="bg-white">
      <SEO 
        title="Custom Home Builder - Austin, TX | Premium Construction & Design"
        description="Transform your dream home into reality with Austin's premier custom home builder. Specializing in luxury construction, remodeling, and architectural design. Get a free consultation today!"
        keywords="custom home builder Austin TX, luxury home construction, home remodeling, architectural design, new home builder Texas"
        ogTitle="Custom Home Builder - Austin, TX | Premium Construction & Design"
        ogDescription="Transform your dream home into reality with Austin's premier custom home builder. Specializing in luxury construction, remodeling, and architectural design."
      />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <ProcessTimeline />
      <About />
      <Contact />
    </div>
  )
}
