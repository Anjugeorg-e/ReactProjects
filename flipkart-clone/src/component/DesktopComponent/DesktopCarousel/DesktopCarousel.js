import React, { useEffect, useRef, useState } from "react";
import arrow from "../Asset/img/prevarrow.svg";
import "./DesktopCarousel.css";

function CarouselDesktop(props) {
  let [index, setIndex] = useState(0);
  const image = useRef();

  const length = props?.length;
  console.log(length);

  const callIndex = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  useEffect(() => {
    const interval = setInterval(callIndex, 3000);
    return () => clearInterval(interval);
  }, [props.desktopCarousel.length]);

  const handleClickRight = () => {
    setIndex(index + 1);
    clearInterval();
  };

  const handleClickLeft = () => {
    index = index - 1;
    callIndex();
    clearInterval();
  };

  return (
    <div className="carousel-desktop-container">
      <div className="carousel-main-container">
        <div className="left-slider" onClick={handleClickLeft}>
          <img src={arrow} alt="move to previous value" />
        </div>

        {props.desktopCarousel.map((item) => {
          return (
            <div
              className="carousel-image"
              key={item}
              style={{
                transform: ` translateX(${-100 * index}%)`,
                transition: "transform ease-out 0.45s",
              }}
              ref={image}
            >
              <img src={item} alt="carousel images" />
            </div>
          );
        })}
        <div className="right-slider" onClick={handleClickRight}>
          <img src={arrow} alt="move to right " />
        </div>
      </div>
    </div>
  );
}

export default CarouselDesktop;
