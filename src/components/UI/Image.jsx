import { useState } from "react";
// import car1 from "../../images/car1.jpg";
// import car2 from "../../images/car2.jpg";
// import car3 from "../../images/car3.jpg";
// import car4 from "../../images/car4.jpg";

import car1Color1 from "../../images/car1-color1.jpg";
import car2Color1 from "../../images/car2-color1.jpg";
import car3Color1 from "../../images/car3-color1.jpg";
import car4Color1 from "../../images/car4-color1.jpg";

import car1Color2 from "../../images/car1-color2.jpg";
import car2Color2 from "../../images/car2-color2.jpg";
import car3Color2 from "../../images/car3-color2.jpg";
import car4Color2 from "../../images/car4-color2.jpg";

import car1Color3 from "../../images/car1-color3.jpg";
import car2Color3 from "../../images/car2-color3.jpg";
import car3Color3 from "../../images/car3-color3.jpg";
import car4Color3 from "../../images/car4-color3.jpg";

import car1Color4 from "../../images/car1-color4.jpg";
import car2Color4 from "../../images/car2-color4.jpg";
import car3Color4 from "../../images/car3-color4.jpg";
import car4Color4 from "../../images/car4-color4.jpg";

const Image = (props) => {
  const { carColor, carModel } = props;
  const [carImages] = useState({
    color1Cars: { car1Color1, car2Color1, car3Color1, car4Color1 },
    color2Cars: { car2Color2, car1Color2, car3Color2, car4Color2 },
    color3Cars: { car1Color3, car2Color3, car3Color3, car4Color3 },
    color4Cars: { car1Color4, car2Color4, car3Color4, car4Color4 },
  });
  return (
    <img
      src={carImages[`color${carColor}Cars`][`car${carModel}Color${carColor}`]}
      className={""}
      alt=""
    />
  );
};
export default Image;
