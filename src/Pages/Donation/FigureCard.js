import React from "react";
import AnimatedNumbers from "./Animated_Numbers";
import "./component.css";


const FigureCard = ({ figure, heading }) => {
  return (
    <>
      <div
        className="card"
        style={{boxShadow : "0 0 80px rgba(0, 0, 0, 0.1)", height : '10rem'}}
      >
        <div className="card-heading">
          {heading}
        </div>

        <div className="card-text">
          <AnimatedNumbers figure={figure} />
        </div>
      </div>
    </>
  );
};

export default FigureCard;
