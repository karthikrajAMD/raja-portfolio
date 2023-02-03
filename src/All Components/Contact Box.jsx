import React, { useState } from "react";
import env from "../env";
import axios from "axios";
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

  const sendMail = async () => {
    const sendFeedback = await axios.post(`${env.API_URL}/contact-mail`, {
      name,
      email,
      subject,
      message,
    });
    if (sendFeedback.data.status === 200) {
    } else {
      // toast.error(sendFeddback.data.message);
      console.log(sendFeedback.data.message);
    }
  };
  return (
    <div className="container">
      <div style={{ marginTop: "50px" }} className="contact-form-main">
        <MDBValidation
          noValidate
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
              feedback="Please provide your email."
            >
              <MDBInput
                type="email"
                className="mdb-input"
                // label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

          {/* <MDBValidationItem feedback="">
        <MDBCheckbox
          //   wrapperClass="d-flex justify-content-center"
          label="Send me copy"
        />
      </MDBValidationItem> */}

          <MDBBtn
            className="contact-button"
            type="submit"
            color="primary"
            onClick={() => {
              sendMail();
            }}
            block
          >
            Send
          </MDBBtn>
        </MDBValidation>
      </div>
    </div>
  );
}
