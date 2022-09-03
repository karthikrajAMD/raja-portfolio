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
            After my graduation moving on to my career i know coding but don't
            have enough potential and also due to some reasons i was working in
            non-technical side for 2 years and now i want to switch over to the
            technical side so i decided to improve my skills to withstand in my
            field after my presence over there.
          </p>
          <p data-aos="fade-right" className="who2">
            I always take complex problem and try to solve them, this help me to
            get good knowledge in what i learn .I started learning this web
            development from my own interest and initially i was learning myself
            and later joined some professional institutes and done my course
            with many small projects and assessments also attended hackathon.And
            now even iam a fresher having a good experience on web development.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
