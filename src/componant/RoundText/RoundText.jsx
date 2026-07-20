import React from 'react'
import "./RoundText.scss"

const RoundText = () => {
  return (
    <div className="round-text-badge">
      <svg viewBox="0 0 200 200" className="round-text-badge__svg">
        <defs>
          <path
            id="circlePath"
            d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
          />
        </defs>

        <circle cx="100" cy="100" r="98" className="round-text-badge__circle" />

        <text className="round-text-badge__text">
          <textPath href="#circlePath" startOffset="0%">
            LET&apos;S WORK TOGETHER &middot; LET&apos;S WORK TOGETHER &middot;
          </textPath>
        </text>

        <g className="round-text-badge__arrow">
          <line x1="78" y1="122" x2="122" y2="78" />
          <polyline points="98,78 122,78 122,102" />
        </g>
      </svg>
    </div>
  )
}

export default RoundText