import Navbar from "./components/Navbar.jsx";
import PropertySection from "./components/PropertySection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <PropertySection />
      </main>
      <Footer />
    </>
  );
}
