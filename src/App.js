import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ScrollButton from "./components/ScrollButton";

function App() {
  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    {/* <Quotes /> */}
    <Testimonials />
    <Contact />
    <Footer />
    <ScrollButton />
    </div>
  );
}

export default App;
