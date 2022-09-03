import "../resume.css";
import React, { useState, useEffect } from "react";
import resume from "../Images/resume.jpg";
function Resume() {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <div className="container">
        <div className="containresume">
          <img className="myresume " src={resume} alt="my resume" />
        </div>

        {isDesktop ? (
          <h3 className="radd  my-1 p-2 col-md-12">
            Thoothukudi<strong>|</strong>9600717048<strong>|</strong>
            karthikraja.a.ece@gmail.com
          </h3>
        ) : (
          <>
            <div className="prof">
              <h3> karthikraja.a.ece@gmail.com</h3>
              <h3>9600717048</h3>
              <h3>Thoothukudi</h3>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default Resume;
