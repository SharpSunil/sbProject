import React, { useEffect, useRef } from "react";
import "./works.scss";

import rocket from "../../assets/rocket.webp";

const Works = () => {
  const pathRef = useRef(null);
  const rocketRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const rocketImg = rocketRef.current;
    const section = sectionRef.current;

    if (!path || !rocketImg || !section) return;

    const length = path.getTotalLength();

    const moveRocket = () => {
      const rect = section.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      let progress =
        (windowHeight - rect.top) /
        (windowHeight + rect.height);

      progress = Math.min(Math.max(progress, 0), 1);

      const point = path.getPointAtLength(progress * length);

      rocketImg.style.left = point.x + "px";
      rocketImg.style.top = point.y + "px";

      // rotation

      const nextPoint = path.getPointAtLength(
        Math.min(progress * length + 1, length)
      );

      const angle =
        Math.atan2(
          nextPoint.y - point.y,
          nextPoint.x - point.x
        ) *
        (180 / Math.PI);

      rocketImg.style.transform = `translate(-50%,-50%) rotate(${angle + 360}deg)`;
    };

    moveRocket();

    window.addEventListener("scroll", moveRocket);

    return () =>
      window.removeEventListener("scroll", moveRocket);
  }, []);

  return (
    <section
      className="works-parent parent"
      ref={sectionRef}
    >
      <div className="overlay1"></div>
      <div className="overlay2"></div>

      <div className="works-cont cont">

        <div className="heading">
          How It Works
        </div>

        <div className="desc">
          Our Step-by-Step Marketing Process
        </div>

        <div className="timeline">

          {/* Rocket */}

          <img
            ref={rocketRef}
            src={rocket}
            alt=""
            className="rocket"
          />

          {/* SVG */}

          <svg
            className="svg-track"
            width="700"
            height="1700"
            viewBox="0 0 700 1700"
          >
            <path
              ref={pathRef}
              d="
              M350 40

              C540 180 180 330 350 520

              C520 710 180 860 350 1050

              C540 1240 180 1420 350 1640
              "
            />
          </svg>

          {/* CARD 1 */}

          <div className="work-card left card1">
            <span>01</span>

            <h3>Discovery & Research</h3>

            <p>
              We analyze your business,
              competitors and audience to
              create the perfect strategy.
            </p>
          </div>

          {/* CARD 2 */}

          <div className="work-card right card2">
            <span>02</span>

            <h3>Planning</h3>

            <p>
              We prepare a custom marketing
              roadmap for your business.
            </p>
          </div>

          {/* CARD 3 */}

          <div className="work-card left card3">
            <span>03</span>

            <h3>Execution</h3>

            <p>
              Our experts launch SEO,
              Ads and Social campaigns.
            </p>
          </div>

          {/* CARD 4 */}

          <div className="work-card right card4">
            <span>04</span>

            <h3>Growth</h3>

            <p>
              Track performance and keep
              improving every month.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Works;