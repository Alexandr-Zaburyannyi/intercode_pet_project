import { useNavigate } from "react-router-dom";
import classes from "./Button.module.scss";

const Button = (props) => {
  const navigate = useNavigate();
  const redirectBtnHandler = () => {
    navigate(props.pathToRedirect ? props.pathToRedirect : "/not-found");
  };

  return (
    <button
      onClick={redirectBtnHandler}
      className={classes.button}
      type="button"
    >
      {props.children}
    </button>
  );
};
export default Button;
