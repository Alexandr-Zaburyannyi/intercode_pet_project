import { Link, useLocation } from "react-router-dom";
import classes from "./Footer.module.scss";
import shellLogo from "../images/shell-logo.png";
const Footer = () => {
  const { pathname } = useLocation();

  const footerClassName = `${classes.footer} ${
    pathname === "/not-found" ? classes["fixed-not-found"] : ""
  } ${pathname.includes("/cars/") ? classes["fixed-config-page"] : ""}`;
  // const footerSecondClassName = ``;
  return (
    <footer className={`${footerClassName}`}>
      <div>
        <ul className={classes["link-container"]}>
          <li>
            <Link className={classes.link} to="/not-found">
              legal
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              privacy policy
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              cookie policy
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              submit your privacy request
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              contacts
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              corporate <span>eng</span>
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              corporate <span>ita</span>
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              responsible disclosure
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              reward anticounfeiting
            </Link>
          </li>
          <li>
            <Link className={classes.link} to="/not-found">
              media centre
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes["logo-container"]}>
        <img className={classes["shell-logo"]} src={shellLogo} alt="" />
      </div>
    </footer>
  );
};
export default Footer;
