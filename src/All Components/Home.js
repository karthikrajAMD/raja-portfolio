import Info from "./Info";
import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
import Contact from "./Contact";
import ContactBox from "./Contact Box";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* <div className="container"> */}
      <div className="homepage">
        <Info />
        <Resume />
        <Skills />
        <hr />
        <div className="project-containers">
          {/* <img src="https://tenor.com/blLFH.gif" /> */}

          <Link to={"/project"} className="pro-link">
            <div className="project-link">PROJECT</div>
          </Link>
        </div>
        <hr />
        <About />
        <ContactBox />
        <div className="home-footer"></div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Home;
