// Imports for React App to work
import React from "react";
import { Link } from "react-router-dom";
// Import Home SVG as HomeIcon
import HomeIcon from "../icons/home.svg"

const PageNotFound = () => (
  <div>
    <h1 className="page-not-found">
      404 Error | Oops! Page Not Found
    </h1>
    
    <div className="back-home">
      <Link to="/">Let's Go Back Home!<img className="home-icon" src={HomeIcon} alt="Page Not Found"/></Link>
    </div>
  </div>
);
export default PageNotFound;