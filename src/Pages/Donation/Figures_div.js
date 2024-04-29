import React from "react";
import FigureCard from "./FigureCard";
import './component.css';

const Figures = () => {
  return (
    <>
      <div className="card-group">
        <FigureCard figure="25141" heading="No. of Donors" />

        <FigureCard figure="600000" heading="Amount Collected" />

        <FigureCard figure="12312454" heading="Amount Used" />

        <FigureCard figure="4124255" heading="Remaining Amount" />

        <FigureCard figure="55363" heading="Receipts & Balance Sheet" />
      </div>
    </>
  );
};

export default Figures;
