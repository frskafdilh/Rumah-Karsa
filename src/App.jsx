import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Keunggulan from "./components/Keunggulan.jsx";
import PropertySection from "./components/PropertySection.jsx";
import About from "./components/About.jsx";
import Calculator from "./components/Calculator.jsx";
import Visit from "./components/Visit.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Hero />
        <Keunggulan />
        <PropertySection />
        <About />
        <Calculator />
        <Visit />
        <Contact />
      </main>

      <Footer />
    </>
  );
}