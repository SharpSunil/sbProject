import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About_Comp.scss";
import glow from "../../assets/background_stuck/glow.png";
import circle_img from "../../assets/background_stuck/circle.webp"
import RoundText from "../RoundText/RoundText";
import heroVideo from "../../assets/1.mp4"
gsap.registerPlugin(ScrollTrigger);

const About_Comp = () => {
  const compRef = useRef(null);
  const imageRef = useRef(null);
  const testimonealRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: compRef.current,
        start: "top top",
        endTrigger: testimonealRef.current,
        end: "top bottom",
        pin: imageRef.current,
        pinSpacing: false,
        markers: false, // uncomment while debugging
      });
    }, compRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <>
      <div className="abt_comp parent" ref={compRef}>
        <div className="overlay1"></div>
        <div className="overlay2"></div>
        <div className="cl_overlay">
          <img src={glow} alt="" />
        </div>

        <div className="abt_comp_cont cont">
          <div className="left">
            <div class="circle">
              <img src={circle_img} alt="" />
            </div>
            <div className="image" ref={imageRef}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="hero-video"
              >
                <source src={heroVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="count">
                <h3>120k</h3>
                <p>
                  Active members <br /> inside the program
                </p>
              </div>
              <div className="count">
                <h3>72k</h3>
                <p>
                  Active members <br /> inside the program
                </p>
              </div>
              <RoundText />
            </div>
            <div className="ct">
              <h4>
                Lets build with <span>Plexify</span>
              </h4>
              <p>
                Empower your brand with cutting-edge digital solutions, drive
                engagement, and accelerate growth with our innovative marketing
                strategies.
              </p>
            </div>
            <div className="services">
              <div className="sr_left">
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <div className="sr_right">
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimoneal" ref={testimonealRef}></div>
    </>
  );
};

export default About_Comp;