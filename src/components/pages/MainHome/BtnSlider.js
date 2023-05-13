import React from "react";
import "../MainHome/Carousel.css";
import leftArrow from "./leftarrow1.png";
import rightArrow from "./rightarrow1.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  );
}