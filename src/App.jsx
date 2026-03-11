import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
