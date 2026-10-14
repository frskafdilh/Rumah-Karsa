import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Keunggulan from './components/Keunggulan'
import PropertySection from './components/PropertySection'
import About from './components/About'
import Calculator from './components/Calculator'

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Keunggulan />
      <PropertySection />
      <About />
      <Calculator />
    </main>
  )
}