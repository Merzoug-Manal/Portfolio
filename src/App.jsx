import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
    
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Projects  />
          <Contact />
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
