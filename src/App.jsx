import Button from "./components/UI/Button";
import backgroundImage from "./images/ferrari2.jpg";
import carImage from "./images/ferarri.png";
import trainersImage from "./images/trainers.png";
import driverImage from "./images/driver.png";
import blueCarImage from "./images/bllue-car.png";
import carPicture from "./images/picture.png";
import redCarImage from "./images/red-car.png";
import oldRedCarImage from "./images/old-red-car.png";

import classes from "./App.module.scss";
function App() {
  return (
    <div>
      <div className={classes["image-container"]}>
        <img className={classes.image} src={backgroundImage} alt="" />
      </div>
      <div className={classes.news}>
        <div className={classes["news-text"]}>
          <h1 className={classes["news-header"]}>the 2023 ferrari yearbook</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quis
            consectetur cupiditate debitis necessitatibus modi, vitae sapiente
            eligendi fugit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quod veniam officiis minima qui vitae unde eligendi earum
            exercitationem voluptatibus molestias illo magnam, nostrum
            dignissimos modi error, reiciendis libero ex fugiat?
          </p>
          <Button>read more</Button>
        </div>
        <div>
          <img className={classes["news-image"]} src={carImage} alt="" />
        </div>
      </div>

      <div className={classes.promotions}>
        <div className={classes["promotion-row"]}>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={trainersImage}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h5 className={classes["promotion-h5"]}>Collections</h5>
              <h3 className={classes["promotion-h3"]}>
                sneaker ultimate nitro
              </h3>{" "}
              <Button>discover the new models made with puma</Button>
            </div>
          </div>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={driverImage}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h5 className={classes["promotion-h5"]}>Magazine</h5>
              <h3 className={classes["promotion-h3"]}>
                stamp of approval
              </h3>{" "}
              <Button>discover more</Button>
            </div>
          </div>
        </div>
        <div className={classes["promotion-row"]}>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={blueCarImage}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h5 className={classes["promotion-h5"]}>Ferrari approver</h5>
              <h3 className={classes["promotion-h3"]}>pre-owned</h3>{" "}
              <Button>discover more</Button>
            </div>
          </div>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={carPicture}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h5 className={classes["promotion-h5"]}>museums</h5>
              <h3 className={classes["promotion-h3"]}>roading 50s</h3>{" "}
              <Button>discover more</Button>
            </div>
          </div>
        </div>
        <div className={classes["promotion-row"]}>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={redCarImage}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h3 className={classes["promotion-h3"]}>Corso pilota on ice</h3>{" "}
              <Button>discover more</Button>
            </div>
          </div>
          <div className={classes["promotion-cell"]}>
            <img
              className={classes["promotion-image"]}
              src={oldRedCarImage}
              alt=""
            />
            <div className={classes["promotion-text"]}>
              <h3 className={classes["promotion-h3"]}>past models</h3>{" "}
              <Button>discover more</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
