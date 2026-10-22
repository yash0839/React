
import React, { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("bg-red-500");

  const changeColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-yellow-500"
    ];

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    setColor(randomColor);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <div className={`w-64 h-40 ${color} rounded-xl`}></div>

      <button
        onClick={changeColor}
        className="bg-black text-white px-5 py-2 rounded-lg"
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorChange;
