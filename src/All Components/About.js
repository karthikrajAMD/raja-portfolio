import "../style.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    Aos.init({
      // offset: 200,
      duration: 1000,
      easing: "ease",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="who">
          <h1 className="who1">Who am I?</h1>
          <p data-aos="fade-left" className="who2">
            Iam from Thoothukudi, TamilNadu. Iam B.E Electronics and
            Communication graduated fellow. I know coding but don't have enough
            potential to make career over that so, i done courses after my
            college to enter IT field but due to pandemic and despite of family
            situation i worked in a non-technical side for 2 years in my home
            town but my interest towards Technical side forced me to quit my
            job.And i decided to further enhance my skills to change my career
            so, i joined in a reputed center and done my web development course
            with many small projects and assessments also attended Hackathon and
            done four projects using complete MERN stack . And now, although iam
            fresher i have good knowledge on web development.
          </p>
          <p data-aos="fade-right" className="who2">
            I always take complex problem and try to solve them, this help me to
            get good knowledge in what i learn.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
