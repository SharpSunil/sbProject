import React, { useRef } from "react";
import "./Forth_sec.scss";

import glow from "../../../../assets/background_stuck/glow.png";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import img1 from "../../../../assets/team/pic1.png";
import img2 from "../../../../assets/team/pic2.png";
import img3 from "../../../../assets/team/pic3.png";
import img4 from "../../../../assets/team/pic4.png";
import { Link } from "react-router-dom";
const team = [
    {
        name: "Sophia Carter",
        role: "Creative Director",
        image: img1,
    },
    {
        name: "Ethan Brooks",
        role: "Brand Strategist",
        image: img2,
    },
    {
        name: "Liam Patel",
        role: "Marketing Specialist",
        image: img3,
    },
    {
        name: "Olivia Bennett",
        role: "Content Writer",
        image: img4,
    },
];

const Forth_Sec = () => {
    const imageRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const img = imageRefs.current[index];
        if (!img) return;

        const rect = e.currentTarget.getBoundingClientRect();

        // Gap between cursor and image
        const offsetX = 160;
        const offsetY = -30;

        const x = e.clientX - rect.left + offsetX;
        const y = e.clientY - rect.top + offsetY;

        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
    };

    const handleMouseEnter = (index) => {
        const img = imageRefs.current[index];
        if (!img) return;

        img.style.opacity = "1";
        img.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const handleMouseLeave = (index) => {
        const img = imageRefs.current[index];
        if (!img) return;

        img.style.opacity = "0";
        img.style.transform = "translate(-40%, -40%) scale(.8)";
    };
    return (
        <div className="forth-sec-parent">
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="cl_overlay">
                <img src={glow} alt="" />
            </div>
            <div className="cl_overlay1">
                <img src={glow} alt="" />
            </div>
            <div className="top-section cont">

                <div className="heading">
                    The Faces
                    <br />
                    Behind the Work
                </div>

                <div className="view-btn">
                    View All
                    <br />
                    Team
                </div>

            </div>

            <div className="bottom-section">

                {team.map((item, index) => (
                    <div
                        className="team-row"
                        key={index}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div
                            className="hover-image"
                            ref={(el) => (imageRefs.current[index] = el)}
                        >
                            <img src={item.image} alt={item.name} />
                        </div>

                        <div className="content cont">

                            <div className="left">

                                <div className="line">
                                    {item.name}
                                    <span>/ {item.role}</span>
                                </div>

                            </div>

                            <div className="social">

                                <a href="#">
                                    <FaFacebookF />
                                </a>

                                <a href="#">
                                    <BsTwitterX />
                                </a>

                                <a href="#">
                                    <FaLinkedinIn />
                                </a>

                                <a href="#">
                                    <AiFillInstagram />
                                </a>

                            </div>

                            <Link to="/team" className="details">
                                More Details
                                <GoArrowUpRight />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Forth_Sec;