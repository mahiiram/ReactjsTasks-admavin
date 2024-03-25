import React, { useState } from "react";
import "./splitbox.css";
import Navbar from "../Navbar/Navbar";

function SplitBox() {
  const [boxes, setBoxes] = useState([{ x: 0, y: 0, size: 500 }]);

  function splitBox(index) {
    const box = boxes[index];
    const newBoxes = [
      { x: box.x, y: box.y, size: box.size / 2 },
      { x: box.x + box.size / 2, y: box.y, size: box.size / 2 },
      { x: box.x, y: box.y + box.size / 2, size: box.size / 2 },
      { x: box.x + box.size / 2, y: box.y + box.size / 2, size: box.size / 2 },
    ];
    setBoxes([
      ...boxes.slice(0, index),
      ...newBoxes,
      ...boxes.slice(index + 1),
    ]);
  }

  return (
    <>
      <div>
        <Navbar/>
      <div className="splitBox">
        <div>
          <button
            className="resetButton"
            onClick={() => {
              setBoxes([{ x: 0, y: 0, size: 500 }]);
            }}
          >
           {" "}
            Reset
          </button>
        </div>
      </div>

      <div className="box" style={{ width: boxes[0].size }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            className="box-child"
            style={{
              width: box.size,
              height: box.size,
              top: box.y,
              left: box.x,
            }}
            onClick={() => splitBox(index)}
          />
        ))}
      </div>
      </div>
    </>
  );
}

export default SplitBox;