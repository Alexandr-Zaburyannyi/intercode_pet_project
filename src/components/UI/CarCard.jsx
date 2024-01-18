import { useRef } from "react";
import { Link } from "react-router-dom";
import classes from "./CarCard.module.scss";
const CarCard = (props) => {
  const { index, onSelect, styles } = props;
  const myRef = useRef(null);

  const clickHandler = () => {
    onSelect(index);
    myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      ref={myRef}
      onClick={clickHandler}
      className={`${classes["car-container"]} ${styles}`}
      id={index}
    >
      <img src={props.image} className={classes["car-image"]} alt="" />
      <div className={classes["link-container"]}>
        <Link className={classes["car-link"]} to="/not-found">
          read more
        </Link>
        <Link className={classes["car-link"]}>configure</Link>
      </div>
    </div>
  );
};
export default CarCard;
