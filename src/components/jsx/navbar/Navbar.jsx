import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo/logo-light.svg";

function Navbar() {
  const [loginToggle, setLoginToggle] = useState("");
  const[username,setUserName] = useState()
  const navigate = useNavigate();

  const logOutFn = () => {
    if (loginToggle === "Login") {
      navigate("/login");
    } else if (loginToggle === "LogOut") {
      localStorage.clear();
      setLoginToggle("Login");
      window.location.reload();
    }
  };

  useEffect(() => {
    const refresh = localStorage.getItem("refreshToken");
    const user = localStorage.getItem("username");
    setUserName(user ? user : "Logout");

    setLoginToggle(refresh ? "LogOut" : "Login");

    const handleStorageChange = () => {
      const updatedRefreshToken = localStorage.getItem("refreshToken");
      setLoginToggle(updatedRefreshToken ? "LogOut" : "Login");
    };

    // Listen for localStorage changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <input type="checkbox" className="hamburger-init" />
              <div className="menu">
                <div className="bar1"></div>
                <div className="bar2"></div>

                <div className="bar3">
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="bar4"></div>
              </div>
            </div>
          </button>
          <div className="d-flex  align-items-center gap-xl-5 gap-3">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About{" "}
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/bids">
                    Bids{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>

                <li className="nav-item userbtn">
                  <div className="nav-link login-btn">
                    {" "}
                    <span>{loginToggle == "LogOut"?username:loginToggle} <i class="fa-solid fa-arrow-down arrow_direction" ></i></span>{" "}
                  </div>
                 
                  <ul class="show_box">
                   
                    {loginToggle == "LogOut"?
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    :''}
                     <li onClick={logOutFn}>
                      <Link>{loginToggle}</Link>
                    </li>
                  </ul>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
