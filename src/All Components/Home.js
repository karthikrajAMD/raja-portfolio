import Info from "./Info";
import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <div className="container">
        <div className="homepage">
          <Info />
          <Skills />
          <Resume />
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}
export default Home;
