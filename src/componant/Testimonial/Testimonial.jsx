import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { IoStarSharp } from "react-icons/io5";
import Button from '../button/Buttonmain';
import "./Testimonial.scss"
import img1 from "../../assets/background_stuck/pic2.png";
import img2 from "../../assets/background_stuck/pic3.png";
import img3 from "../../assets/background_stuck/pic2.png";
import logo from "../../assets/logo.png";

const Testimonial = () => {


    const testimonialData = [
        {
            id: 1,
            rating: 5,
            review:
                "Building with this template was a breeze. Well-documented and beautifully designed — exactly what I needed.",
            name: "Sophie Blake",
            designation: "Power XR2 Module",
            userImage: img1,
            companyLogo: logo,
        },
        {
            id: 2,
            rating: 5,
            review:
                "The flexibility is unmatched. Every component feels thoughtfully crafted, and integrating it was seamless.",
            name: "Isla Morgan",
            designation: "Power XR2 Module",
            userImage: img2,
            companyLogo: logo,
        },
        {
            id: 3,
            rating: 5,
            review:
                "Outstanding support and a clean design system. Highly recommended for modern websites.",
            name: "John Smith",
            designation: "Creative Director",
            userImage: img3,
            companyLogo: logo,
        },
    ];
    return (
        <>
            <div className="testimonial-parent parent">
                <div className="testimonial-cont cont">
                    <div className="top-side">
                        <div className="heading">Success Stories: How Feedback Fuels Our Growth</div>
                        <div className="highlight">
                            Plexify is rated 4.5 / 5 average from 200 reviews on Google, Clutch!
                        </div>
                    </div>

                    <div className="bottom-side">
                        <div className="left-card">
                            <div className="h2">4.5 </div>
                            <div className='desc'>
                                Star Rating on<span><IoStarSharp /></span>
                                Trustpilot
                            </div>

                            <div className="second-heading">
                                10 Years Experience in Digital marketing
                            </div>
                            <Button text="Rate Us on Trustpilot" link="/contact" />

                        </div>
                        <div className="right-card">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 30000000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {testimonialData.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="testimonial-card">

                                            <div className="testimonial-left">

                                                <div className="stars">
                                                    {[...Array(item.rating)].map((_, index) => (
                                                        <IoStarSharp key={index} />
                                                    ))}
                                                </div>

                                                <h3>{item.review}</h3>

                                                <div className="bottom-row">
                                                    <div className="custom-pagination"></div>

                                                    <div className="custom-navigation">
                                                        <button className="prev-btn">←</button>
                                                        <button className="next-btn">→</button>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="testimonial-right">

                                                <img
                                                    src={item.companyLogo}
                                                    alt={item.designation}
                                                    className="company-logo"
                                                />

                                                <div className="user-box">
                                                    <img
                                                        src={item.userImage}
                                                        alt={item.name}
                                                        className="user-img"
                                                    />

                                                    <h4>{item.name}</h4>
                                                    <p>{item.designation}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
