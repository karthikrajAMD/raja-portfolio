import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./All Components/Contact";
import About from "./All Components/About";
import Resume from "./All Components/Resume";
import Home from "./All Components/Home";
import Skills from "./All Components/Skills";
import Project from "./All Components/Project";
import ResponsiveAppBar from "./Navbar";
import SmallProject from "./All Components/SmallProject";
import ContactBox from "./All Components/Contact Box";

function App() {
  return (
    <>
      <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/Resume" element={<Resume />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/contact" element={<ContactBox />} />
          <Route path="/project" element={<Project />} />
          <Route path="/small_project" element={<SmallProject />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
