import notFound from "../images/not-found.jpg";
import classes from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <img src={notFound} className={classes.img} alt="" />
      <div className={classes.message}>
        <h1>Not found</h1>
        <h3>404</h3>
      </div>
    </div>
  );
};
export default NotFound;
