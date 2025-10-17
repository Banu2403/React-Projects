import React from "react";

const directions = [
  "to right",
  "to left",
  "to top",
  "to bottom",
  "to top right",
  "to top left",
  "to bottom right",
  "to bottom left",
];

export default function DirectionSelector({ direction, setDirection }) {
  return (
    <div className="direction-selector">
      <label>Direction:</label>
      <select
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
      >
        {directions.map((dir) => (
          <option key={dir} value={dir}>
            {dir}
          </option>
        ))}
      </select>
    </div>
  );
}
