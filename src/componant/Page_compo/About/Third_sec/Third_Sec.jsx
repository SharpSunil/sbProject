import React, { useLayoutEffect, useRef } from "react";
import "./Third_sec.scss";
import img1 from "../../../../assets/timeline/5.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Third_Sec = () => {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.75,
          opacity: 0.8,
        },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "center center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="third-sec-parent parent">
      <div className="third-sec-cont cont">
        <div className="image-wrapper">
          <img
            ref={imageRef}
            src={img1}
            alt="Third Section"
          />
        </div>
      </div>
    </div>
  );
};

export default Third_Sec;