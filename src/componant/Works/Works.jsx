import React, { useEffect, useRef } from "react";
import "./works.scss";

import rocket from "../../assets/rocket.webp";
import { LuScanEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BsRocket } from "react-icons/bs";

import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { SiGrapheneos } from "react-icons/si";
const Works = () => {
  const progressPathRef = useRef(null);
  const helperPathRef = useRef(null);
  const rocketRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {

    const progressPath = progressPathRef.current;
    const helperPath = helperPathRef.current;
    const rocket = rocketRef.current;
    const section = sectionRef.current;

    if (
      !progressPath ||
      !helperPath ||
      !rocket ||
      !section
    )
      return;

    const length = helperPath.getTotalLength();

    progressPath.style.strokeDasharray = length;
    progressPath.style.strokeDashoffset = length;

    const updateRocket = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.75;
      const end = -(rect.height - viewport * 0.3);
      let progress =
        (start - rect.top) /
        (start - end);
      progress = Math.max(0, Math.min(progress, 1));
      const currentLength = progress * length;

      progressPath.style.strokeDashoffset =
        length - currentLength;
      const point =
        helperPath.getPointAtLength(currentLength);

      rocket.style.left = `${point.x}px`;

      rocket.style.top = `${point.y}px`;

      const next =
        helperPath.getPointAtLength(
          Math.min(currentLength + 1, length)
        );

      const angle =
        Math.atan2(
          next.y - point.y,
          next.x - point.x
        ) *
        (180 / Math.PI);
      rocket.style.transform =
        `translate(-50%,-50%) rotate(${angle + 360}deg)`;
    };

    updateRocket();
    window.addEventListener("scroll", updateRocket);
    window.addEventListener("resize", updateRocket);

    return () => {
      window.removeEventListener(
        "scroll",
        updateRocket
      );
      window.removeEventListener(
        "resize",
        updateRocket
      );
    };
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
            height="1100"
            viewBox="0 0 700 1100"
          >

            {/* White Path */}

            <path
              className="path-bg"
              d="
        M350 40
        C540 170 180 280 350 390
        C520 520 180 640 350 760
        C540 900 180 980 350 1080
        "
            />

            {/* Green Path */}

            <path
              ref={progressPathRef}
              className="path-progress"
              d="
        M350 40
        C540 170 180 280 350 390
        C520 520 180 640 350 760
        C540 900 180 980 350 1080
        "
            />

            {/* Hidden Helper */}

            <path
              ref={helperPathRef}
              d="
        M350 40
        C540 170 180 280 350 390
        C520 520 180 640 350 760
        C540 900 180 980 350 1080
        "
              fill="none"
              stroke="transparent"
              strokeWidth="2"
            />

          </svg>

          {/* CARD 1 */}

          <div className="work-card left card1">
            <div className="number">01</div>
            <div className="content-group">
              <div className="icon"><LuScanEye /></div>
              <div className="right-body">
                <Link to="#">Competitor analysis and keyword research</Link>
                <p>
                  Gain insights to stay ahead
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}

          <div className="work-card right card2">
            <div className="number">02</div>
            <div className="content-group">
              <div className="icon"><TbDeviceDesktopAnalytics /></div>
              <div className="right-body">
                <Link to="#">Craft a tailored SEO and digital plan</Link>
                <p>
                  Tailored strategies for your brand.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}

          <div className="work-card left card3">
            <div className="number">03</div>
            <div className="content-group">
              <div className="icon"><BsRocket /></div>
              <div className="right-body">
                <Link to="#">Optimize your website for search engines</Link>
                <p>
                  Improve rankings & visibility
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}

          <div className="work-card right card4">
            <div className="number">04</div>
            <div className="content-group">
              <div className="icon"><SiGrapheneos /></div>
              <div className="right-body">
                <Link to="#">Focus on long-term success & growth</Link>
                <p>
                  Build sustainable success
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Works;