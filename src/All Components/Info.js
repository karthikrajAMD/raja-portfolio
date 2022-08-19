import "../style.css";
import { Box } from "@mui/material";
import Raja from "../Images/Raja1.JPG";

function Info() {
  return (
    <>
      <Box className="upinfo " sx={{ mt: 2 }}></Box>
      <div className="row">
        <div className="col-sm-12 col-md-7 col-lg-5 my-2">
          <img className="rajapng" src={Raja} alt="Raja" col-6 />
        </div>
        <div className="col-sm-12  col-md-5 col-lg-7" id="infoabout">
          <h5 className="hi">
            Hi there! I'm <span className="nameh5info">Karthik</span>
          </h5>
          <p className="pinfo">
            This is my frist portfolio created using React and some features
            like MUI,Bootstrap.My creative idea's help me to develop a good web
            page and with best UI experience.
          </p>
          <div>
            <h5 className="h5info">
              `Attitude shows your behaviour in a silent manner.`
            </h5>
          </div>
        </div>
      </div>
      <Box className="upinfo"></Box>
    </>
  );
}
export default Info;
