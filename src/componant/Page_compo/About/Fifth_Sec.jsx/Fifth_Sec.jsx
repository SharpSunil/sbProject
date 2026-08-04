import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../../../button/Buttonmain";

import img1 from "../../../../assets/1.jpg";
import img2 from "../../../../assets/1.jpg";

import "./Fifth_sec.scss";

gsap.registerPlugin(ScrollTrigger);

const Fifth_Sec = () => {
  const container = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".fifth-panel");

      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "+=100%",
          pin: true,
          pinSpacing: false,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      {/* First Section */}
      <section className="fifth-panel">
        <div className="fifth-sec-parent">

          <div className="left-sec">
            <img src={img1} alt="" />
          </div>

          <div className="right-sec">
            <div className="content-box-cont">

              <div className="heading">
                The Visionaries Behind the Brands
              </div>

              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum tempore eaque, magnam cum beatae vitae? A nemo earum laboriosam voluptate quidem! At obcaecati saepe impedit repellendus voluptas earum. Inventore nemo expedita vero? Aliquid quidem ut cum velit soluta voluptate fugit tempore temporibus aspernatur, enim voluptates, nemo perferendis, voluptatibus saepe perspiciatis?
              </div>

              <Button text="Join Our Team" link="/team" />

            </div>
          </div>

        </div>
      </section>

      {/* Second Section */}
      <section className="fifth-panel">
        <div className="fifth-sec-parent">

          <div className="left-sec">
            <img src={img2} alt="" />
          </div>

          <div className="right-sec">
            <div className="content-box-cont">

              <div className="heading">
                Creative Designers
              </div>

              <div className="desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, tenetur vel iusto nesciunt error deleniti molestias, ab aut officia ea non, veritatis quis ipsa atque incidunt sit qui id deserunt aliquid. Atque aut provident quis consequuntur tenetur commodi corrupti dolores autem tempore, nobis enim, sapiente consectetur. Nihil accusamus perferendis consequatur officia quia quas, quibusdam ea praesentium? Accusantium libero animi ipsum.
              </div>

              <Button text="Explore More" link="/team" />

            </div>
          </div>

        </div>
      </section>
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default Fifth_Sec;