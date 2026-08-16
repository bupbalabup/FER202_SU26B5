import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState();

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>

      <div style={{
        backgroundColor: color,
        width: "150px",
        height: "150px",
        margin: "0 auto",
      }}
      ></div>
    </div>
  );
}

export default ColorSwitcher;
