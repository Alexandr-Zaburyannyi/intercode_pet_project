import { Outlet, useLocation } from "react-router";
import { useState } from "react";
import CarCard from "../components/UI/CarCard";
import car1 from "../images/car1-rim1-color2.jpg";
import car2 from "../images/car2-rim1-color1.jpg";
import car3 from "../images/car3-rim1-color3.jpg";
import car4 from "../images/car4-rim2-color4.jpg";
import classes from "./CarsPage.module.scss";

const CarsPage = () => {
  const [selectedEl, setSelectedEl] = useState(0);
  const location = useLocation();
  const cars = [car1, car2, car3, car4];
  const selectHandler = (index) => {
    setSelectedEl(index);
  };
  return (
    <>
      {location.pathname.includes("/cars/") && <Outlet />}
      {!location.pathname.includes("/cars/") && (
        <div className={classes.cars}>
          <div className={classes["cars-title-container"]}>
            <h1 className={classes["cars-title"]}>configure</h1>
            <h3 className={classes["cars-subtitle"]}>
              choose your next ferrari
            </h3>
          </div>
          <div className={classes["cars-container"]}>
            {cars.map((car, i) => {
              return (
                <CarCard
                  styles={selectedEl === i ? classes["selected-car"] : ""}
                  onSelect={selectHandler}
                  selectedEl={selectedEl}
                  key={i}
                  index={i}
                  image={car}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default CarsPage;
