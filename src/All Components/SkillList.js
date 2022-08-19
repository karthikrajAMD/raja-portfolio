import "../style.css";
function SkillList({ skill }) {
  return (
    <>
      <div className="col-4 col-md-3 complogo">
        <img className="allLogo" src={skill.logo} alt={skill.name} />
        <h6>{skill.name}</h6>
      </div>
    </>
  );
}
export default SkillList;
