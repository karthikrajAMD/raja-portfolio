import "../styleSheet/project.css";
import daily_expense from "../Images/daily_expense.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Project() {
  const myProject = [
    {
      name: "Order Management",
      live: "https://raja-ordermanagement.netlify.app",
      img: `1-yjNl2z-ShuyS95d6aQKK6u6bsASj-Tx`,
      descrip:
        "This project is done with all user credentials and managing the orders like updating the status of the orders and also created with three demo client users who can order the products.",
    },
    {
      name: "User Authentication",
      live: "https://raja-user-creator.netlify.app",
      img: "1oqLH_USGGOoIC5237B-XuoOSCWEGFtpZ",
      descrip:
        "This project is only user authentication like login, sign-up and forgot password. Here forgot password is achieved by sending OTP to the registered mail id and after verification password reset is done.",
    },
    {
      name: "Daily Expense Management",
      live: "https://raja-daily-expense.netlify.app/",
      img: "1k4hBdsm9wNmZe2BdqH81GKn6G2AbGOXs",
      descrip:
        "This project helps to manage our daily expense and helps to monitor our expense and also we can download those data in pdf format.",
    },
    {
      name: "Movie gallery with CRUD operation",
      live: "https://raja-movie-gallery.netlify.app/",
      img: "1vnAi6AIFhRYqHt-iFIiyM9V9dQij6FOG",
      descrip:
        "This project is a simple movie gallery where you can do all crud operation and also i used iframe to display trailer of the movies.",
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
                  <img
                    className="project-img"
                    src={` https://drive.google.com/uc?id=${e.img}`}
                    alt={e.name}
                  />
                  {/* <p className="live">{live}</p> */}
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

{
  /* <div class="card">
          <div class="imgbox">
            <img src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>

          <div class="content">
            <h2>keep Smiling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div>
        <div class="card">
          <div class="imgbox">
            <img src="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>

          <div class="content">
            <h2>keep Smiling</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              doloribus vitae fugit enim repudiandae
            </p>
          </div>
        </div> */
}
