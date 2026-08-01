import React from 'react'
import img1 from "../../assets/1.jpg"
import "./About.scss"
// import glow from "../../assets/background_stuck/glow.png";
import Timeline from '../../componant/Timeline/Timeline';

const About = () => {
    return (
        <>
            <div className="about-parent parent">
                <div className="overlay1"></div>
                <div className="overlay2"></div>

                <div className="about-cont cont">
                    <span className="shape shape1 bg-contain"></span>
                    <span className="shape shape2 bg-contain" ></span>
                    <span className="shape shape3 bg-contain"></span>
                    <span className="shape shape4 bg-contain"></span>
                    <div className="left">
                        <div className="heading">Where Imagination Meets Strategy</div>
                        <div className="second-box">
                            <div className="first">About Us</div>
                            <div className="line"></div>
                            <div className="desc">We are a team of passionate professionals dedicated to delivering exceptional results.   To provide innovative solutions that drive success for our clients. To provide innovative solutions that drive success for our clients.</div>
                        </div>
                        <div className="last-box">
                            <div className="left"><img src={img1} alt="Image 1" /></div>
                            <div className="right">
                                {/* <div className="icon"></div> */}
                                <div className="first-heading">Our Mission</div>
                                <div className="desc">To provide innovative solutions that drive success for our clients.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={img1} alt="Image 2" />
                    </div>
                </div>

                <div className="about-second-section">
                    <div className="top">Our Journey Through Time</div>
                    <div className="bottom">
                        <Timeline />

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
