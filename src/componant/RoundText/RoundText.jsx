import React from "react";
import "./RoundText.scss";

const RoundText = () => {
  return (
    <div className="round-text-badge">
      {/* Rotating SVG */}
      <svg
        viewBox="0 0 200 200"
        className="round-text-badge__rotate"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100
               m-72,0
               a72,72 0 1,1 144,0
               a72,72 0 1,1 -144,0"
          />
        </defs>

        <circle
          cx="100"
          cy="100"
          r="98"
          className="round-text-badge__circle"
        />

        <text className="round-text-badge__text">
          <textPath href="#circlePath" startOffset="0%">
            LET'S WORK TOGETHER • LET'S WORK TOGETHER •
          </textPath>
        </text>
      </svg>

      {/* Static Arrow */}
      <svg
        viewBox="0 0 200 200"
        className="round-text-badge__static"
      >
        <g className="round-text-badge__arrow">
          <line x1="78" y1="122" x2="122" y2="78" />
          <polyline points="98,78 122,78 122,102" />
        </g>
      </svg>
    </div>
  );
};

export default RoundText;