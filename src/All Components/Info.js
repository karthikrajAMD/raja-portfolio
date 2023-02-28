import "../style.css";
import { Box } from "@mui/material";
import Raja1 from "../Images/Raja1.png";

function Info() {
  return (
    <>
      {/* <Box className="upinfo " sx={{ mt: 2 }}></Box> */}
      {/* <div className="row"> */}
      {/* <div className="col-sm-12 col-md-7 col-lg-5 my-2 containraja"> */}
      {/* <div className="row"> */}
      <div className="info-image">
        <img className="rajapng" src={Raja1} alt="Raja" />
        <div id="infoabout">
          <h5 className="hi">
            Hi there! I'm <span className="nameh5info">Karthik</span>
          </h5>
          <p className="p-info" style={{ padding: "10px" }}>
            I'm Full stack MERN developer .I Created my portfolio using React js
            and with some frameworks like MUI,Bootstrap.My creative idea's and
            knowledge help me to develop a good web page with best UI
            experience.
          </p>
          <div>
            <h4 className="h4 mx-5 my-5">
              `Attitude shows your behavior in a silent manner.`
            </h4>
          </div>
        </div>
      </div>

      {/* <div className="col-lg-12" id="infoabout">
              <h5 className="hi">
                Hi there! I'm <span className="nameh5info">Karthik</span>
              </h5>
              <p className="pinfo">
                I'm Full stack MERN developer .I Created my portfolio using
                React js with some frameworks like MUI,Bootstrap.My creative
                idea's and knowledge help me to develop a good web page with
                best UI experience.
              </p>
              <div>
                <h4 className="h4 mx-5 my-5">
                  `Attitude shows your behavior in a silent manner.`
                </h4>
              </div>
            </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* <div className="col-sm-12  col-md-5 col-lg-7" id="infoabout">
          <h5 className="hi">
            Hi there! I'm <span className="nameh5info">Karthik</span>
          </h5>
          <p className="pinfo">
            I'm Full stack MERN developer .I Created my portfolio using React js
            with some frameworks like MUI,Bootstrap.My creative idea's and
            knowledge help me to develop a good web page with best UI
            experience.
          </p>
          <div>
            <h4 className="h4 mx-5 my-5">
              `Attitude shows your behavior in a silent manner.`
            </h4>
          </div>
        </div> */}
      {/* </div> */}
      {/* <Box className="upinfo"></Box> */}
    </>
  );
}
export default Info;
