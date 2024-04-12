import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skill";
// import Projects from "./components/Projects";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <About />
        <Skills />
        {/* <Projects /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
