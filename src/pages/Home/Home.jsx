import React from 'react'
import Hero from '../../componant/Hero/Hero'
import About_Comp from '../../componant/About_comp/About_Comp'
import MyProject from '../../componant/My Project/MyProject'
import Service from '../../componant/Services/Service'
import Works from '../../componant/Works/Works'
import Home_blog from '../../componant/Home_blog/Home_blog'
import Faq from '../../componant/Faq/Faq'
import Testimonial from '../../componant/Testimonial/Testimonial'

const Home = () => {
  return (
    <>
    <Hero />
    <About_Comp />
    <MyProject />
    <Service />
    <Works />
    <Home_blog />
    <Testimonial/>
    <Faq />
    </>
  )
}

export default Home
