import Info from "./Info";
import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import ContactBox from "./Contact Box";

function Home() {
  return (
    <>
      {/* <div className="container"> */}
      <div className="homepage">
        <Info />
        <Resume />
        <Skills />
        <About />
        <ContactBox />
        <div className="home-footer"></div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Home;
