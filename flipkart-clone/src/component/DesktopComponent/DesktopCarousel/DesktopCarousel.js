import React, { useEffect, useRef, useState } from "react";
import leftarrow from "../Asset/img/prevarrow.svg";
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
    <div className="carouselDesktopContainer">
      <div className="carousalMainContainer">
        <div className="leftSlider" onClick={handleClickLeft}>
          <img src={leftarrow} />
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
              <img src={item} />
            </div>
          );
        })}
        <div className="rightSlider" onClick={handleClickRight}>
          <img src={leftarrow} />
        </div>
      </div>
    </div>
  );
}

export default CarouselDesktop;
