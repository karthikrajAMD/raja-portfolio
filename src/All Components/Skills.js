import c from "../Images/c.svg";
import cpp from "../Images/c++.svg";
import boot from "../Images/boot.svg";
import html from "../Images/html.svg";
import css from "../Images/css.svg";
import word from "../Images/word.svg";
import excel from "../Images/excel.svg";
import pp from "../Images/pp.svg";
import js from "../Images/js.svg";
import java from "../Images/java.svg";
import vs from "../Images/vs.svg";
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
      name: "VisualStudio",
      logo: `${vs}`,
    },
    {
      name: "Ms Word",
      logo: `${word}`,
    },
    {
      name: "Ms PP",
      logo: `${pp}`,
    },
    {
      name: "Ms Excel",
      logo: `${excel}`,
    },
  ];
  return (
    <>
      <div className="container">
        <div>
          <div className="skilldisp row">
            <h3 className="skillab">I'm Adept at</h3>
            {skills.map((m, i) => (
              <SkillList key={i} skill={m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skills;
