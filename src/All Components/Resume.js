import "../resume.css";
import mypic from "../Images/mypic.jpg";
import profile from "../Images/Profile.png";
import education from "../Images/education.png";
import medal from "../Images/medal.png";
import setting from "../Images/setting.png";
import skill from "../Images/skill.png";
import Meeting from "../Images/Meeting.png";
import work from "../Images/work.png";
import React, { useState, useEffect } from "react";
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
        <div className="a4 my-2 col-md-12 pb-1 ">
          <div className="resumehead">
            <img className="mypic" src={mypic} alt="my_pic" />
            <div className="white_border col-md-12 ">
              <div className="yellow_board col-md-10">KARTHIK RAJA</div>
            </div>
          </div>
          <div className="empty"></div>
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

          <div className="leftright row mx-1 ">
            <div className="leftr col">
              <div className="profile">
                <div className="iconr">
                  <img src={profile} alt="profile" className="profile-icon" />
                  <h1 className="h1r">Profile</h1>
                </div>
                <p>
                  I am seeking a competitive and challenging environment where I
                  can serve your Organization and establish a career for myself.
                </p>
              </div>
              <div className="education">
                <div className="iconr">
                  <img
                    src={education}
                    alt="education"
                    className="profile-icon"
                  />
                  <h1 className="h1r">Education</h1>
                </div>
                <ul>
                  <li>
                    B.E Electronics and Communication Engineering (Coimbatore)-
                    <strong>64%</strong>
                  </li>
                  <li>
                    Higher Secondary Certificate (Thoothukudi)-
                    <strong>84%</strong>
                  </li>
                  <li>
                    Secondary School Leaving Certificate (Thoothukudi)-
                    <strong>94%</strong>
                  </li>
                </ul>
              </div>
              <div className="activity">
                <div className="iconr">
                  <img src={medal} alt="activity" className="profile-icon" />
                  <h1 className="h1r">Activities</h1>
                </div>
                <ul>
                  <li>
                    Attended the Workshop in NIT Trichy on the topic “IOT
                    Training using PSoC4 BLE” by Cypress Semiconductor”.
                  </li>
                  <li>
                    Attended the Workshop in NIT Trichy on the topic “IOT
                    Training using PSoC4 BLE” by Cypress Semiconductor”.
                  </li>
                  <li>
                    Attended a seminar on “Smart Wireless Sensor For Healthcare
                    MonitoringUsing IOT”.
                  </li>
                  <li>
                    Attended a Industrial Visit at MSC/HLR SBC EXCHANGE & NIB at
                    Coimbatore.
                  </li>
                  <li>
                    Attended a Two days seminar on “Awareness of Mobile Phone
                    Radiation Exposure and their ill effects on Human Beings”.
                  </li>
                </ul>
              </div>
              <div className="area">
                <div className="iconr">
                  <img
                    src={setting}
                    alt="area-of-interest"
                    className="profile-icon"
                  />
                  <h1 className="h1r">Area of Interest</h1>
                </div>
                <ul>
                  <li>Computer Technology</li>
                  <li>Designing</li>
                </ul>
              </div>
            </div>

            <div className="rightr col">
              <div className="skill">
                <div className="iconr">
                  <img src={skill} alt="skills" className="profile-icon" />
                  <h1 className="h1r">Skills</h1>
                </div>
                <h2>Technical-Skills</h2>
                <ul>
                  <li>
                    Trained on Java SE
                    <span className="barr">
                      <span className="java"></span>
                    </span>
                  </li>
                  <li>
                    C++{" "}
                    <span className="barr">
                      <span className="cpp"></span>
                    </span>
                  </li>
                  <li>
                    JavaScript{" "}
                    <span className="barr">
                      <span className="script"></span>
                    </span>
                  </li>
                  <li>
                    HTML & CSS{" "}
                    <span className="barr">
                      <span className="html"></span>
                    </span>
                  </li>
                </ul>
                <h2>Additional-Skills</h2>
                <ul>
                  <li>Organization</li>
                  <li>House Wiring</li>
                  <li>Creative thinking</li>
                  <li>Time management</li>
                  <li>Quick Learning</li>
                  <li>Good Reading</li>
                </ul>
              </div>

              <div className="pro-skill">
                <div className="iconr">
                  <img src={Meeting} alt="skills" className="profile-icon" />
                  <h1 className="h1r">Professional-Skills</h1>
                </div>
                <ul>
                  <li>Good in using Microsoft office.</li>
                  <li>Skilled in working with Photoshop (CS6).</li>
                  <li>Good in editing videos using Adobe</li>
                  <li>Premiere and After Effect.</li>
                  <li>Pc and Laptop software service.</li>
                  <li>Skilled in Android Flashing.</li>
                </ul>
              </div>
              <div className="work">
                <div className="iconr">
                  <img src={work} alt="skills" className="profile-icon" />
                  <h1 className="h1r">Work-Experience</h1>
                </div>
                <ul>
                  <li>3 months Internship in SEO and Lead Generation.</li>
                  <li>Trainer in BPIS Pvt Ltd (Coimbatore), 1 Year.</li>
                  <li>Jr Assistant in Venus Home Appliances, 6 Months.</li>
                  <li>ERP and Maintenance Supervisor, 9 months.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Resume;
