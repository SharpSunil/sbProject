import React from 'react'
import Button from '../button/Buttonmain'
import "./Home_blog.scss"

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsum, tenetur delectus laudantium nesciunt, magni molestiae ad repellat accusamus dignissimos similique, at perferendis. Quisquam ipsum quae magnam, quia eveniet accusamus.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_blog
