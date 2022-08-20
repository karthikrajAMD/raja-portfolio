import { Route, Routes } from "react-router-dom";
import Contact from "./All Components/Contact";
import About from "./All Components/About";
import Resume from "./All Components/Resume";
import Home from "./All Components/Home";
import Skills from "./All Components/Skills";
import Project from "./All Components/Project";
import ResponsiveAppBar from "./Navbar";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
