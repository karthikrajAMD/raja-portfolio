import boot from "../Images/boot.svg";
import html from "../Images/html.svg";
import css from "../Images/css.svg";
import js from "../Images/js.svg";
import java from "../Images/java.svg";
import mui from "../Images/MUI.png";
import react from "../Images/react.svg";
import node from "../Images/nodejs.svg";
import mongo from "../Images/mongodb.svg";
import hibernate from "../Images/hibernate.svg";
import spring from "../Images/spring.svg";
import mysql from "../Images/mysql.svg";
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
      name: "MUI",
      logo: `${mui}`,
    },
    {
      name: "NodeJs",
      logo: `${node}`,
    },
    {
      name: "Mongodb",
      logo: `${mongo}`,
    },
    {
      name: "Hibernate",
      logo: `${hibernate}`,
    },
    {
      name: "Mysql",
      logo: `${mysql}`,
    },
    {
      name: "Spring Boot",
      logo: `${spring}`,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="skilldisp row">
          <h3 className="skillab mb-5">I'm Good at</h3>
          {skills.map((m, i) => (
            <SkillList key={i} skill={m} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Skills;
