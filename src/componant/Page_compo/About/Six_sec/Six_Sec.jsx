
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./Six_Sec.scss";

import glow from "../../../../assets/background_stuck/glow.png";
import img1 from "../../../../assets/timeline/4.jpg"
import img2 from "../../../../assets/timeline/2.jpg";
import img3 from "../../../../assets/timeline/3.jpg";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const blogs = [
    {
        image: img1,
        title: "How to Create Stunning",
        date: "5 Jan 2026",
        author: "Mason Hayes",
        link: "/blog/how-to-create-stunning",
    },
    {
        image: img2,
        title: "Transform Your Ideas",
        date: "18 Feb 2026",
        author: "Henry Walker",
        link: "/blog/transform-your-ideas",
    },
    {
        image: img3,
        title: "How to Create Stunning",
        date: "19 May 2026",
        author: "Nathan Brooks",
        link: "/blog/how-to-create-stunning-2",
    },
    {
        image: img2,
        title: "Transform Your Ideas",
        date: "18 Feb 2026",
        author: "Henry Walker",
        link: "/blog/transform-your-ideas",
    },
    {
        image: img3,
        title: "How to Create Stunning",
        date: "19 May 2026",
        author: "Nathan Brooks",
        link: "/blog/how-to-create-stunning-2",
    },
    {
        image: img2,
        title: "Transform Your Ideas",
        date: "18 Feb 2026",
        author: "Henry Walker",
        link: "/blog/transform-your-ideas",
    },
    {
        image: img3,
        title: "How to Create Stunning",
        date: "19 May 2026",
        author: "Nathan Brooks",
        link: "/blog/how-to-create-stunning-2",
    },
    {
        image: img2,
        title: "Transform Your Ideas",
        date: "18 Feb 2026",
        author: "Henry Walker",
        link: "/blog/transform-your-ideas",
    },
];

const Six_Sec = () => {
    return (
        <div className="six-sec-parent parent">
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="cl_overlay">
                <img src={glow} alt="" />
            </div>
            <div className="cl_overlay1">
                <img src={glow} alt="" />
            </div>
            <div className="six-sec-cont cont">

                <div className="top">

                    <div className="heading">
                        Our Latest
                        Blog & Article
                    </div>

                    <div className="desc">
                        Explore our latest blog and articles for expert insights on web
                        design, SEO, and digital trends.
                    </div>

                    <Link to="/" className="view-btn">
                        View All
                        Post
                    </Link>

                </div>

                <div className="bottom">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        speed={1000}
                        initialSlide={1}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                centeredSlides: false,
                            },
                            768: {
                                slidesPerView: 2,
                                centeredSlides: false,
                            },
                            1200: {
                                slidesPerView: 3,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {blogs.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <Link to={blog.link} className="blog-card">

                                    <div className="image">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>

                                    <div className="headingg">{blog.title}</div>

                                    <p>
                                        {blog.date}
                                        <span> — By {blog.author}</span>
                                    </p>

                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default Six_Sec;