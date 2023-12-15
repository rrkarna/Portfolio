import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";



function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
