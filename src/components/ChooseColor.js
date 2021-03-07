import React, { useState } from "react";

function ChooseColor() {
  const [colorState, setColorState] = useState("");

  return (
    <div className="optionsDiv">
      <h3>Player One select a color: </h3>
      <select
        className="colorOptions"
        onChange={(e) => {
          const selectColor = e.target.value;
          setColorState(selectColor);
        }}
      >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
      </select>
      {colorState}
    </div>
  );
}

export default ChooseColor;
