// import { useState } from "react";
// import link from "../Images/link.svg";
// import fb from "../Images/fb.svg";
// import insta from "../Images/insta.svg";

// import { Link } from "react-router-dom";
// function Contact() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     alert(`Your comments submitted successfully,Thank you ${fname} ${lname}`);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="continfo">
//           <h2>Contact</h2>
//           <div className="cont row">
//             <div className="leftcont col-12 col-sm-12 col-md-8">
//               <div className="cominfo row">
//                 To know more about me and my experience in learning please
//                 contact me.Also you can submit your comments below.
//               </div>
//               <form onSubmit={handleSubmit} className="col-md-12 col-lg-8">
//                 <div className="first">
//                   <label>
//                     Enter your First Name:
//                     {"\n"}
//                     <input
//                       type="text"
//                       value={fname}
//                       onChange={(e) => setFname(e.target.value)}
//                     />
//                   </label>
//                 </div>
//                 <div className="last">
//                   <label>
//                     Enter your Last Name:
//                     {"\n"}
//                     <input
//                       type="text"
//                       value={lname}
//                       onChange={(e) => setLname(e.target.value)}
//                     />
//                   </label>
//                 </div>
//                 <div className="comm">
//                   <textarea className="col-md-12 col-12" rows="5"></textarea>
//                 </div>

//                 <input type="submit" />
//               </form>
//             </div>
//             <div className="rightcont col-12 col-sm-12 col-md-4">
//               <div className="contlink">
//                 <a
//                   href="https://www.linkedin.com/in/karthik-raja-amd/"
//                   target="#"
//                 >
//                   <img src={link} alt="LinkedIn" className="conticon" />
//                 </a>

//                 <a href="https://www.facebook.com/karthikrajaamd/" target="#">
//                   <img src={fb} alt="fb" className="conticon" />
//                 </a>
//                 <a href="https://www.instagram.com/karthikamd/" target="#">
//                   <img src={insta} alt="insta" className="conticon" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Contact;
