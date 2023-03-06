import "../styleSheet/Project.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Project() {
  const myProject = [
    {
      name: "Order Management",
      live: "https://raja-ordermanagement.netlify.app",
      img: `https://www.pngitem.com/pimgs/m/252-2523878_sales-order-management-order-management-hd-png-download.png`,
      sourceUrl: "https://github.com/karthikrajAMD/order_management-fe",
      descrip:
        "Used MERN Stack with added features like Authentication (JWT),CRUD operation and REDUX. Managing the orders like updating the status of the orders also three demo client users with payment gateway feature who can order the products, and  also used redux to manage orders in the cart.",
    },
    {
      name: "CRM Application",
      live: "https://raja-crm-hackathon.netlify.app/home",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Vy3h2ix1FBklQWpz3MX9tLGmt7YwymyRNyd4yCz_qD5hG_u-X_NL7NP2BpeyqCkd6EU&usqp=CAU",
      sourceUrl: "https://github.com/karthikrajAMD/CRM-Auth-fe",
      descrip:
        "Done using complete MERN Stack and mainly focused on Authentication (JWT), Authorization (Admin Control & Permission),and particularly socket.io to have chat between users and also CRUD Operations by having relationship between admin, user and manager.",
    },
    {
      name: "Daily Expense Management",
      live: "https://raja-daily-expense.netlify.app/",
      img: "https://m.media-amazon.com/images/I/71sQpmgP33L.png",
      sourceUrl: "https://github.com/karthikrajAMD/Daily_Expense-fe",
      descrip:
        "Using MERN Stack this DEM application includes searching,sorting and pagination features which helps to manage and monitor our daily expense also used the feature like date range filter for daily track of our expense and can be download as pdf also designed with responsive UI.",
    },
    {
      name: "Movie gallery with CRUD operation",
      live: "https://raja-movie-gallery.netlify.app/",
      img: "https://miro.medium.com/max/1200/1*jbfWuj3RSAAvmJeBwLWbsw.jpeg",
      sourceUrl: "https://github.com/karthikrajAMD/Movies_gallery",
      descrip:
        "This project is a simple movie gallery application with MERN Stack where you can do all CRUD operation and also it displays the detail page of movie there i used iframe to play video files and context-api to like and dislike the movies.",
    },
  ];
  const live = "<LIVE>";
  const navigate = useNavigate();
  return (
    <>
      <div className="project-container">
        <div className="project-body">
          {myProject.map((e) => {
            return (
              <div className="card">
                <div className="imgbox">
                  <div
                    className="project-img"
                    style={{ backgroundImage: `URL(${e.img})` }}
                  ></div>
                  <a href={e.sourceUrl} target="_blank">
                    <Button className="code-button">Frontend</Button>
                  </a>
                  <a className="live" href={e.live} target="#">
                    {live}
                  </a>
                  <p className="content-name">{e.name}</p>
                </div>

                <div className="content">
                  <p className="content-h2">{e.name}</p>
                  <p className="descrip">{e.descrip}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Project;

// name: "User Authentication",
//       live: "https://raja-user-creator.netlify.app",
//       img: "1oqLH_USGGOoIC5237B-XuoOSCWEGFtpZ",
//       descrip:
//         "This project is only user authentication like login, sign-up and forgot password. Here forgot password is achieved by sending OTP to the registered mail id and after verification password reset is done.",
