import { useState } from "react";

import car1Rim1Color1 from "../../images/car1-rim1-color1.jpg";
import car2Rim1Color1 from "../../images/car2-rim1-color1.jpg";
import car3Rim1Color1 from "../../images/car3-rim1-color1.jpg";
import car4Rim1Color1 from "../../images/car4-rim1-color1.jpg";

import car1Rim1Color2 from "../../images/car1-rim1-color2.jpg";
import car2Rim1Color2 from "../../images/car2-rim1-color2.jpg";
import car3Rim1Color2 from "../../images/car3-rim1-color2.jpg";
import car4Rim1Color2 from "../../images/car4-rim1-color2.jpg";

import car1Rim1Color3 from "../../images/car1-rim1-color3.jpg";
import car2Rim1Color3 from "../../images/car2-rim1-color3.jpg";
import car3Rim1Color3 from "../../images/car3-rim1-color3.jpg";
import car4Rim1Color3 from "../../images/car4-rim1-color3.jpg";

import car1Rim1Color4 from "../../images/car1-rim1-color4.jpg";
import car2Rim1Color4 from "../../images/car2-rim1-color4.jpg";
import car3Rim1Color4 from "../../images/car3-rim1-color4.jpg";
import car4Rim1Color4 from "../../images/car4-rim1-color4.jpg";

import car1Rim2Color1 from "../../images/car1-rim2-color1.jpg";
import car2Rim2Color1 from "../../images/car2-rim2-color1.jpg";
import car3Rim2Color1 from "../../images/car3-rim2-color1.jpg";
import car4Rim2Color1 from "../../images/car4-rim2-color1.jpg";

import car1Rim2Color2 from "../../images/car1-rim2-color2.jpg";
import car2Rim2Color2 from "../../images/car2-rim2-color2.jpg";
import car3Rim2Color2 from "../../images/car3-rim2-color2.jpg";
import car4Rim2Color2 from "../../images/car4-rim2-color2.jpg";

import car1Rim2Color3 from "../../images/car1-rim2-color3.jpg";
import car2Rim2Color3 from "../../images/car2-rim2-color3.jpg";
import car3Rim2Color3 from "../../images/car3-rim2-color3.jpg";
import car4Rim2Color3 from "../../images/car4-rim2-color3.jpg";

import car1Rim2Color4 from "../../images/car1-rim2-color4.jpg";
import car2Rim2Color4 from "../../images/car2-rim2-color4.jpg";
import car3Rim2Color4 from "../../images/car3-rim2-color4.jpg";
import car4Rim2Color4 from "../../images/car4-rim2-color4.jpg";

const Image = (props) => {
  const { carColor, carModel, rimModel, styles } = props;
  const [carImages] = useState({
    rim1: {
      color1Cars: {
        car1Rim1Color1,
        car2Rim1Color1,
        car3Rim1Color1,
        car4Rim1Color1,
      },
      color2Cars: {
        car2Rim1Color2,
        car1Rim1Color2,
        car3Rim1Color2,
        car4Rim1Color2,
      },
      color3Cars: {
        car1Rim1Color3,
        car2Rim1Color3,
        car3Rim1Color3,
        car4Rim1Color3,
      },
      color4Cars: {
        car1Rim1Color4,
        car2Rim1Color4,
        car3Rim1Color4,
        car4Rim1Color4,
      },
    },
    rim2: {
      color1Cars: {
        car1Rim2Color1,
        car2Rim2Color1,
        car3Rim2Color1,
        car4Rim2Color1,
      },
      color2Cars: {
        car2Rim2Color2,
        car1Rim2Color2,
        car3Rim2Color2,
        car4Rim2Color2,
      },
      color3Cars: {
        car1Rim2Color3,
        car2Rim2Color3,
        car3Rim2Color3,
        car4Rim2Color3,
      },
      color4Cars: {
        car1Rim2Color4,
        car2Rim2Color4,
        car3Rim2Color4,
        car4Rim2Color4,
      },
    },
  });
  const imagePath =
    carImages[`rim${rimModel}`][`color${carColor}Cars`][
      `car${carModel}Rim${rimModel}Color${carColor}`
    ];
  return <img src={imagePath} className={styles} alt="" />;
};
export default Image;
