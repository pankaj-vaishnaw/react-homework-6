import React from 'react';
import ColorCard from './ColorCard';
import colorsData from './colorsData.json';

const ColorPicker = () => {
  return (
    <div className="card-container">
    {colorsData.map((color) => (
      <ColorCard key={color.id} title={color.title} hexCode={color.hexCode} />
    ))}
  </div>
  );
};

export default ColorPicker;