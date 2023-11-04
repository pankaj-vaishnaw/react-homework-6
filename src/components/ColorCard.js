import React from 'react';
import "../App.css"

const ColorCard = ({ title, hexCode }) => {
  return (
    <div className="card">
      <div className="card-color" style={{ backgroundColor: hexCode }}></div>
      <div className="card-title">{title}</div>
      <div>{hexCode}</div>
    </div>
  );
};

export default ColorCard;