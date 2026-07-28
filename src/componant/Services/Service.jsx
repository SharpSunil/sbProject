import React, { useState } from "react";
import "./service.scss";

import { FaCheck } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

// Images
import heroImg from "../../assets/pic1.webp";

import seoImg from "../../assets/pic1.webp";
import emailImg from "../../assets/pic2.webp";
import socialImg from "../../assets/pic3.png";
import Button from "../button/Buttonmain";
const Service = () => {
    const services = [
        {
            id: 1,
            tag: "SEO",
            title: "Search Engine Optimization",
            image: seoImg,
            link: "/seo-service",
            points: [
                "On-page and off-page SEO",
                "Keyword research and optimization",
                "Technical SEO",
                "Link building",
            ],
        },

        {
            id: 2,
            tag: "Email Campaign",
            title: "Email Marketing",
            image: emailImg,
            link: "/email-marketing",
            points: [
                "Email campaign design",
                "Personalized email sequences",
                "Newsletter creation",
                "List segmentation and lead nurturing",
            ],
        },

        {
            id: 3,
            tag: "Social Media",
            title: "Social Media Marketing",
            image: socialImg,
            link: "/social-media-marketing",
            points: [
                "Community engagement",
                "Influencer marketing",
                "Paid social advertising",
            ],
        },
    ];

    const [activeCard, setActiveCard] = useState(0);

    return (
        <section className="service-parent parent">
         
            <div className="service-cont cont">

                {/* ================= TOP ================= */}

                <div className="top-side">

                    <div className="left-side">
                        <h2>
                            Find Our Best
                            <br />
                            Services
                        </h2>
                    </div>

                    <div className="right-side">

                        <div className="tag-line">
                            <span>{"{"}</span>

                            <p>
                                Achieve Top Rankings with
                                <br />
                                Cutting-Edge SEO Services!
                            </p>

                            <span>{"}"}</span>
                        </div>

                        <button className="circle-btn">
                            <GoArrowUpRight />
                        </button>

                    </div>

                </div>

                {/* ================= GRID ================= */}

                <div className="bottom-side">

                    {/* IMAGE CARD */}

                    <div className="image-card">

                        <img
                            src={activeCard === 0 ? heroImg : services[activeCard].image}
                            alt=""
                        />

                    </div>

                    {/* SEO CARD */}

                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-card ${activeCard === index ? "active" : ""
                                }`}
                            onMouseEnter={() => setActiveCard(index)}
                        >
                            <div className="card-tag">
                                {service.tag}
                            </div>

                            <h3>{service.title}</h3>

                            <ul>

                                {service.points.map((item, i) => (

                                    <li key={i}>

                                        <FaCheck />

                                        <span>{item}</span>

                                    </li>

                                ))}

                            </ul>

                            <div className="card-footer">

                                <Button
                                    text="View Details"
                                    link={service.link}
                                />
                            </div>
                            <div className="img-box">
                                <img
                                    src={service.image}
                                    alt=""
                                />
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Service;