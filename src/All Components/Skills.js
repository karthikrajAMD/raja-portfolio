import c from "../Images/c.svg";
import cpp from "../Images/c++.svg";
import boot from "../Images/boot.svg";
import html from "../Images/html.svg";
import css from "../Images/css.svg";
import js from "../Images/js.svg";
import java from "../Images/java.svg";
import mui from "../Images/MUI.png";
import react from "../Images/react.svg";
import SkillList from "./SkillList";

function Skills() {
  const skills = [
    {
      name: "Java Script",
      logo: `${js}`,
    },
    {
      name: "HTML",
      logo: `${html}`,
    },
    {
      name: "CSS",
      logo: `${css}`,
    },
    {
      name: "Bootstrap",
      logo: `${boot}`,
    },
    {
      name: "React",
      logo: `${react}`,
    },
    {
      name: "Java",
      logo: `${java}`,
    },
    {
      name: "C",
      logo: `${c}`,
    },
    {
      name: "C++",
      logo: `${cpp}`,
    },
    {
      name: "MUI",
      logo: `${mui}`,
    },
  ];

  return (
    <>
      <div className="container">
        {/* <div> */}
        <div className="skilldisp row">
          <h3 className="skillab">I'm Adept at</h3>
          {skills.map((m, i) => (
            <SkillList key={i} skill={m} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
export default Skills;
