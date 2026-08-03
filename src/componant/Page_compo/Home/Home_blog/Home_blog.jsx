import React, { useRef, useState } from "react";
import Button from '../../../button/Buttonmain'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Home_blog.scss"
import { Link } from "react-router-dom";
import img1 from "../../../../assets/1.jpg"
import { Autoplay, Pagination } from "swiper/modules";

const Home_blog = () => {
  return (
    <>
      <div className="home_blog-parent parent">

        <div className="home_blog-cont cont">
          <div className="top-box">
            <div className="main-heading">
              Start your dream project today
            </div>
            <Button text="Let's Connect" link="/contact" />
          </div>

          {/* //bottom slider  */}
          <div className="bottom-box">
            <div className="left-side">
              <div className="heading">Our Latest Blog & Article</div>
              <div className="desc">Explore our latest blog and articles for expert insights on web design, SEO, and digital trends.</div>
              <Button text="Let's Connect" link="/blog" />
            </div>
            <div className="right-side">
              <Swiper
                className="mySwiper"
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                }}
              >
                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>

                  <div className="card-main">
                    <div className="card-left">
                      <Link to="/" className="title">How to create a stunnig</Link>
                      <div className="card-desc">Explore our latest blog and articles for expert insights on web design,</div>
                      <div className="details">15 MAY 2026 / BY SUNIL SHELKE</div>
                    </div>
                    <div className="card-right">
                      <img src={img1} />
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_blog
