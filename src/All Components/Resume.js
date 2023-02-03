import "../resume.css";
import React, { useState, useEffect } from "react";
// import resume from "../Images/resume.jpg";
import ResumePdf from "../Images/ResumePdf.pdf";
import { Button } from "@mui/material";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
function Resume() {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 768);
  };
  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(ResumePdf).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // const fileURL =          "https://drive.google.com/file/d/1QkC9wYGGJzxT5S28kU4ne2rK7-FONe_M/view?usp=share_link";
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.target = "#";
        alink.download = "KarthikRaja_Resume.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <>
      <div className="container">
        {/* <Button variant="contained ">Resume</Button> */}
        <button
          type="button"
          className="btn btn-primary mb-5"
          style={{
            boxShadow: "5px 4px 10px rgb(2, 128, 255)",
            // backgroundColor: "rgba(51, 145, 239, 0.886)",
          }}
        >
          Resume
          <PictureAsPdfIcon className="p-1" />
        </button>
        {/* {isDesktop ? (
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
        )} */}
      </div>
    </>
  );
}
export default Resume;
