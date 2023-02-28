import React from "react";
import Button from "react-bootstrap/Button";
import Cards from "react-bootstrap/Card";
import "../styleSheet/SmallProject.css";
function SmallProject() {
  return (
    <div className="container">
      <div className="small-project-container">
        <div className="small-project-cards"></div>
        <div className="small-project-content"></div>
      </div>
    </div>
  );
}

export default SmallProject;
