import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { NavLink, BrowserRouter as Router } from "react-router-dom";
import "../Navbar/Navbar.css";
import TokenService from "../../Components/Service/TokenService";

const classNameFunc = ({ isActive }) => (isActive ? "active_link" : "");

function Navbar() {

// const navLinkStyle = ({ isActive }) =>{
//   return{
//     backgroundcolor: isActive ? '#691b1b' : ' '
//   }

// }

  const projectDetails = TokenService.getProjectDetails();
  return (
    <div className="nav-container">
      <ul>
        <li>
          <NavLink
            to={
              projectDetails ? "/add-images/" + projectDetails.id : "/projects"
            }
            // style={{navLinkStyle}}
          >
            Images
          </NavLink>
        </li>
        <li>
          <NavLink
            to={projectDetails ? "/annotate/" + projectDetails.id : "/projects"}
            activeClassName="active-link"
          >
            Annotate
          </NavLink>
        </li>
        <li>
          <NavLink
            to={projectDetails ? "/training/" + projectDetails.id : "/projects"}
            activeClassName="active-link"
          >
            Train
          </NavLink>
        </li>
        <li>
          <NavLink
            to={projectDetails ? "/testing/" + projectDetails.id : "/projects"}
            activeClassName="active-link"
          >
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to={projectDetails ? "/deploy/" + projectDetails.id : "/projects"}
            activeClassName="active-link"
          >
            Deploy
          </NavLink>
        </li>
        <li className="last-li">
          <NavLink to="/download" activeClassName="active-link">
            Download
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
