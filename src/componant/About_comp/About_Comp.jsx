import React from 'react'
import "./About_Comp.scss";
import glow from "../../assets/background_stuck/glow.png"
const About_Comp = () => {
  return (
    <>
      <div className="abt_comp parent">
        <div className="overlay1"></div>
         <div className="overlay2"></div>
         <div className="cl_overlay">
          <img src={glow} alt="" />
         </div>
      </div>
    </>
  )
}

export default About_Comp
