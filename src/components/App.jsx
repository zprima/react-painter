import React, { useState } from "react";
import "./App.css";
import ColorPicker from "./ColorPicker";
import PaintGrid from "./PaintGrid";
import ColorPreview from "./ColorPreview";

function App() {
  const colors = [
    { name: "white", hex: "#fff" },
    { name: "black", hex: "#000000" },
    { name: "red", hex: "#ff0000" },
    { name: "green", hex: "#00ff00" },
    { name: "blue", hex: "#0000ff" },
    { name: "pink", hex: "#ffa6c9" },
    { name: "yellow", hex: "#ffff00" },
    { name: "brown", hex: "#a52a2a" },
    { name: "light blue", hex: "#add8e6" },
    { name: "purple", hex: "#9370db" }
  ];

  const [color, setColor] = useState(colors[0]);

  return (
    <div className="App container">
      <ColorPicker colors={colors} color={color} setColor={setColor} />
      <ColorPreview colors={colors} color={color} setColor={setColor} />
      <br />
      <PaintGrid colors={colors} color={color} />
    </div>
  );
}

export default App;
