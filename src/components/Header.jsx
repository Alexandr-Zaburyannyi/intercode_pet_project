import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../images/white-horse.png";
const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const navigate = useNavigate();

  const navigateHomeHandler = () => {
    navigate("/");
  };

  const toggleMenuHandler = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <img
          src={logo}
          onClick={navigateHomeHandler}
          className={classes.logo}
          alt=""
        />
        <div className={classes["hamburger-menu"]} onClick={toggleMenuHandler}>
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul
          className={`${classes["link-container"]} ${
            isOpened ? classes["adaptive-link-container"] : ""
          }`}
        >
          <li>
            <NavLink className={classes["nav-link"]} to="/not-found">
              racing
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classes["nav-link"]} ${classes["active-link"]}`
                  : classes["nav-link"]
              }
              to="/cars"
            >
              sports cars
            </NavLink>
          </li>
          <li>
            <NavLink className={classes["nav-link"]} to="/not-found">
              collections
            </NavLink>
          </li>
          <li>
            <NavLink className={classes["nav-link"]} to="/not-found">
              experiences
            </NavLink>
          </li>
          <li>
            <NavLink className={classes["nav-link"]} to="/not-found">
              about us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
