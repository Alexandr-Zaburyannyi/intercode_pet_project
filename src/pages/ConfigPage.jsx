import { useState, useEffect } from "react";

import { useParams } from "react-router";
import classes from "./ConfigPage.module.scss";

import color1 from "../images/color1.png";
import color2 from "../images/color2.png";
import color3 from "../images/color3.png";
import color4 from "../images/color4.png";

import carpet1 from "../images/carpet1.png";
import carpet2 from "../images/carpet2.png";
import carpet3 from "../images/carpet3.png";
import carpet4 from "../images/carpet4.png";

import rim1 from "../images/rim1.png";
import rim2 from "../images/rim2.png";
import rim3 from "../images/rim3.png";
import rim4 from "../images/rim4.png";

import carbonDesign from "../images/carbon-interior.png";

import Image from "../components/UI/Image";

const ConfigPage = () => {
  const [imagesObj] = useState({
    models: [
      {
        model: 1,
        price: 20_000,
      },
      { model: 2, price: 25_000 },
      { model: 3, price: 30_000 },
      { model: 4, price: 80_000 },
    ],
    colors: [
      { color: color1, price: 40_000, key: 1 },
      { color: color2, price: 45_000, key: 2 },
      { color: color3, price: 50_000, key: 3 },
      { color: color4, price: 60_000, key: 4 },
    ],
    rims: [
      { rim: rim1, price: 10_000 },
      { rim: rim2, price: 10_100 },
      { rim: rim3, price: 11_000 },
      { rim: rim4, price: 12_000 },
    ],
    carpets: [
      { carpet: carpet1, price: 1000 },
      { carpet: carpet2, price: 1200 },
      { carpet: carpet3, price: 1200 },
      { carpet: carpet4, price: 1400 },
    ],
    carbonInterior: {
      carbonDesign,
      price: 30_000,
      selected: false,
    },
  });

  const { carId } = useParams();

  const [selectedModel] = useState(
    ...imagesObj.models.filter((model) => model.model === +carId)
  );
  const [selectedColor, setSelectedColor] = useState(imagesObj.colors[0]);
  const [selectedRim, setSelectedRim] = useState(imagesObj.rims[0]);
  const [selectedCarpet, setSelectedCarpet] = useState(imagesObj.carpets[0]);
  const [isCarbonInterior, setIsCarbonInterior] = useState(
    imagesObj.carbonInterior
  );
  const [totalPrice, setTotalPrice] = useState(
    selectedColor.price +
      selectedRim.price +
      selectedRim.price +
      selectedCarpet.price
  );

  useEffect(() => {
    let carbonInteriorPrice = 0;
    if (isCarbonInterior.selected === true) {
      carbonInteriorPrice = isCarbonInterior.price;
    }

    let totalSum =
      selectedModel.price +
      selectedColor.price +
      selectedRim.price +
      selectedCarpet.price +
      carbonInteriorPrice;
    setTotalPrice(totalSum);
  }, [
    selectedColor.price,
    selectedRim.price,
    selectedCarpet.price,
    isCarbonInterior.price,
    isCarbonInterior.selected,
    selectedModel.price,
  ]);

  const selectColorHandler = (color) => {
    setSelectedColor(color);
  };

  const selectedRimHandler = (rim) => {
    setSelectedRim(rim);
  };

  const selectedCarpetHandler = (carpet) => {
    setSelectedCarpet(carpet);
  };

  return (
    <div className={classes["configurator-page"]}>
      <div>{totalPrice}$</div>
      <Image carColor={selectedColor.key} carModel={selectedModel.model} />
      <div className={classes.configurator}>
        <div className={classes["options-container"]}>
          {imagesObj.colors.map((color) => {
            return (
              <button
                onClick={() => selectColorHandler(color)}
                key={color.color}
              >
                <img
                  src={color.color}
                  className={
                    selectedColor.color === color.color
                      ? classes["selected-option"]
                      : ""
                  }
                  alt="color"
                />
              </button>
            );
          })}
        </div>
        <div className={classes["options-container"]}>
          {imagesObj.rims.map((rim) => {
            return (
              <button key={rim.rim} onClick={() => selectedRimHandler(rim)}>
                <img
                  src={rim.rim}
                  className={
                    selectedRim.rim === rim.rim
                      ? classes["selected-option"]
                      : ""
                  }
                  alt="rim"
                />
              </button>
            );
          })}
        </div>

        <div className={classes["options-container"]}>
          {imagesObj.carpets.map((carpet) => {
            return (
              <button
                key={carpet.carpet}
                onClick={() => selectedCarpetHandler(carpet)}
              >
                <img
                  src={carpet.carpet}
                  className={
                    selectedCarpet.carpet === carpet.carpet
                      ? classes["selected-option"]
                      : ""
                  }
                  alt="carpet"
                />
              </button>
            );
          })}
        </div>
        <div className={classes["options-container"]}>
          <button
            onClick={() =>
              setIsCarbonInterior((prevState) => {
                return { ...prevState, selected: !prevState.selected };
              })
            }
          >
            <img
              className={
                isCarbonInterior.selected ? classes["selected-option"] : ""
              }
              src={imagesObj.carbonInterior.carbonDesign}
              alt="carbon-interior"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ConfigPage;
