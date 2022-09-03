import "../style.css";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
function SkillList({ skill }) {
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
      <div
        data-aos-once="true"
        data-aos="flip-left"
        className="col-4 col-md-3 complogo"
      >
        <img className="allLogo" src={skill.logo} alt={skill.name} />
        <h6 className="h6">{skill.name}</h6>
      </div>
    </>
  );
}
export default SkillList;
