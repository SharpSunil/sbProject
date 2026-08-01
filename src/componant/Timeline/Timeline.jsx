import React, { useRef, useState, useLayoutEffect } from "react";
import "./Timeline.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { IoArrowForward } from "react-icons/io5";
import gsap from "gsap";


// Images
import img1 from "../../assets/timeline/2.jpg";
import img2 from "../../assets/timeline/3.jpg";
import img3 from "../../assets/timeline/4.jpg";
import img4 from "../../assets/timeline/2.jpg";
import img5 from "../../assets/timeline/5.jpg";
import img6 from "../../assets/timeline/6.jpg";

const timelineData = [
    {
        year: "2020",
        title: "Where It All Began",
        description:
            "Our journey started with a vision to build creative digital experiences for brands around the world.",
        leftImage: img1,
        rightImage: img2,
    },
    {
        year: "2021",
        title: "Growing Together",
        description:
            "We expanded our team and delivered high-quality solutions to clients across different industries.",
        leftImage: img3,
        rightImage: img4,
    },
    {
        year: "2022",
        title: "Global Presence",
        description:
            "Our work reached international markets with a strong focus on design, performance and innovation.",
        leftImage: img5,
        rightImage: img6,
    },
];

const Timeline = () => {
    const leftImage = useRef(null);
    const rightImage = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const buttonRef = useRef(null);
    const yearRef = useRef(null);
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useLayoutEffect(() => {

        animateSlide();

    }, []);
    const animateSlide = () => {

        const tl = gsap.timeline();

        tl.fromTo(

            leftImage.current,

            {
                x: -120,
                rotate: -18,
                opacity: 0
            },

            {
                x: 0,
                rotate: -8,
                opacity: 1,
                duration: .9,
                ease: "power3.out"
            }

        )

            .fromTo(

                rightImage.current,

                {
                    x: 120,
                    rotate: 18,
                    opacity: 0
                },

                {
                    x: 0,
                    rotate: 8,
                    opacity: 1,
                    duration: .9,
                    ease: "power3.out"
                },

                "-=.7"

            )

            .from(

                yearRef.current,

                {

                    y: 40,
                    opacity: 0,
                    duration: .5

                },

                "-=.6"

            )

            .from(

                titleRef.current,

                {

                    y: 60,
                    opacity: 0,
                    duration: .6

                },

                "-=.4"

            )

            .from(

                descRef.current,

                {

                    y: 50,
                    opacity: 0,
                    duration: .6

                },

                "-=.4"

            )

            .from(

                buttonRef.current,

                {

                    y: 40,
                    opacity: 0,
                    duration: .5

                },

                "-=.4"

            );

    };

    return (
        <section className="timeline-parent">

            <div className="timeline-container">

                <Swiper
                    modules={[EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={900}
                    slidesPerView={1}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {

                        setActiveIndex(swiper.realIndex);

                        setTimeout(() => {

                            animateSlide();

                        }, 50);

                    }}
                >
                    {timelineData.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className="timeline-slide">

                                {/* LEFT */}

                                <div className="timeline-image left" ref={leftImage}>

                                    <div className="image-card">
                                        <img src={item.leftImage} alt="" />
                                    </div>

                                </div>

                                {/* CENTER */}

                                <div className="timeline-content">

                                    <span ref={yearRef}>{item.year}</span>

                                    <h2 ref={titleRef}>
                                        {item.title}
                                    </h2>

                                    <p ref={descRef}>
                                        {item.description}
                                    </p>

                                    <button ref={buttonRef}>

                                        Learn More

                                        <div className="icon">
                                            <IoArrowForward />
                                        </div>

                                    </button>

                                </div>

                                {/* RIGHT */}

                                <div className="timeline-image right" ref={rightImage}>

                                    <div className="image-card">
                                        <img src={item.rightImage} alt="" />
                                    </div>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Navigation */}

                <div className="timeline-bottom">

                    <button
                        className="nav-btn"
                        onClick={() => swiperRef.current.slidePrev()}
                    >
                        <FiArrowLeft />
                    </button>

                    <div className="timeline-years">

                        {timelineData.map((item, index) => (
                            <span
                                key={index}
                                className={activeIndex === index ? "active" : ""}
                                onClick={() => swiperRef.current.slideToLoop(index)}
                            >
                                {item.year}
                            </span>
                        ))}

                    </div>

                    <button
                        className="nav-btn"
                        onClick={() => swiperRef.current.slideNext()}
                    >
                        <FiArrowRight />
                    </button>

                </div>

            </div>

        </section>
    );
};

export default Timeline;