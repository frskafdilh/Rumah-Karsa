import Navbar from "./components/Navbar.jsx";
import PropertySection from "./components/PropertySection.jsx";
import About from "./components/About.jsx";
import Calculator from "./components/Calculator.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <PropertySection />
        <About />
        <Calculator />
      </main>
    </>
  );
}
