import React, { useEffect, useState } from "react";
import env from "../env";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from "mdb-react-ui-kit";
import "../contact.css";
export default function ContactBox() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [change, setChange] = useState(false);
  const [but, setBut] = useState(false);
  const sendMail = async () => {
    if (name !== "" && change && subject !== "" && message !== "") {
      setBut(true);
      const sendFeedback = await axios.post(`${env.API_URL}/contact-mail`, {
        name,
        email,
        subject,
        message,
      });
      console.log(sendFeedback);
      if (sendFeedback.data.status === 200) {
        setChange(false);
        toast.success(sendFeedback.data.message);
        setTimeout(() => {
          window.location.reload(false);
        }, 2000);

        setBut(false);
      } else {
        console.log(sendFeedback.data.message);
        setBut(false);
        toast.error(sendFeedback.data.message);
      }
    }
  };
  // useEffect(() => {
  //   console.log("use effect");
  //   //
  // }, [change]);
  return (
    <div className="container">
      <div style={{ marginTop: "50px" }} className="contact-form-main">
        <MDBValidation
          isValidate
          id="form"
          className="text-center contact-box"
          //   style={{ width: "100%", maxWidth: "300px" }}
        >
          <h2>Contact </h2>

          <div className="mdb-form">
            <h5>Name</h5>
            <MDBValidationItem
              className="message-contact"
              invalid
              feedback="Please provide your name."
            >
              <MDBInput
                className="mdb-input"
                v-model="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </MDBValidationItem>
          </div>

          <div className="mdb-form">
            <h5>Email</h5>
            <MDBValidationItem
              className="message-contact"
              invalid
              // onChange={(e) => console.log(e)}
              feedback="Please provide your email."
            >
              <MDBInput
                type="email"
                className="mdb-input"
                // onChange={(e) => console.log(e.target.checkValidity())}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.checkValidity() === true) {
                    setChange(true);
                  }
                }}
                v-model="email"
                // wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>
          </div>

          <div className="mdb-form">
            <h5>Subject</h5>
            <MDBValidationItem
              className="message-contact"
              invalid
              feedback="Please provide mail subject."
            >
              <MDBInput
                className="mdb-input"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                v-model="subject"
                //   wrapperClass="mb-4"
                required
              />
            </MDBValidationItem>
          </div>

          <div className="mdb-form">
            <h5>Message</h5>
            <MDBValidationItem
              className="message-contact"
              invalid
              feedback="Please provide a message text."
            >
              <MDBTextArea
                className="mdb-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </MDBValidationItem>
          </div>
          <MDBBtn
            className="contact-button"
            disabled={but}
            type="submit"
            color="primary"
            onClick={(event) => {
              sendMail();
            }}
            block
          >
            Send
          </MDBBtn>
        </MDBValidation>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
