import React from "react";
import FigureCard from "./FigureCard";
import './component.css';

const Figures = () => {
  return (
    <>
      <div className="card-group">
        <FigureCard figure= {5141} heading="No. of Donors" />

        <FigureCard figure= {6000} heading="Amount Collected" />

        <FigureCard figure= {1231} heading="Amount Used" />

        <FigureCard figure= {4124} heading="Remaining Amount" />

        <FigureCard figure= {553} heading="Receipts & Balance Sheet" />
      </div>
    </>
  );
};

export default Figures;
