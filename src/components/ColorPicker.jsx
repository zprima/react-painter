import React from "react";
import "./ColorPicker.css";

function ColorPicker(props) {
  const colorOptions = () => {
    return props.colors.map(color => {
      return (
        <div
          key={color.name}
          className="color"
          style={{ backgroundColor: color.hex }}
          onClick={() => props.setColor(color)}
        />
      );
    });
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
