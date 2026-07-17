import React from 'react'
import "./About_Comp.scss"
import video from "../../assets/1.mp4";
const About_Comp = () => {
  return (
    <>
      <div className="about_comp-parent parent">
        <div className="about_comp-cont cont">
          <div className="left-side">
            <div className="group1"></div>
           <div className="video-sec">
  <video
    src={video}
    autoPlay
    muted
    loop
    playsInline
  />
</div>

          </div>
          <div className="right-side">
            <div className="top">
              <div className="one">
                120k
                <span>Active members inside the program</span>
              </div>
              <div className="two">
                72+
                <span>of customers are repeat customers</span>
              </div>
              <div className="three">

              </div>

              <div className="bottom">
                <h2>Lets build with <span>Plexify</span></h2>
                <p>
                  Empower your brand with cutting-edge digital solutions, drive engagement, and accelerate growth with our innovative marketing strategies.
                </p>
                <div className="card-main">
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                  <div className="card">
                    <div className="icon"></div>
                    <div className="text">Paid Search Marketing</div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About_Comp
