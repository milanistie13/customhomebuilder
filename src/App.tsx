import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import ProcessTimeline from './components/ProcessTimeline'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <ProcessTimeline />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
