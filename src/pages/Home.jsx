import React from 'react'

import Hero from "../componant/Page_compo/Home/Hero/Hero"
import About_Comp from "../componant/Page_compo/Home/About_comp/About_Comp"
import MyProject from "../componant/Page_compo/Home/My Project/MyProject"
import Service from "../componant/Page_compo/Home/Services/Service"
import Works from "../componant/Page_compo/Home/Works/Works"
import Home_blog from "../componant/Page_compo/Home/Home_blog/Home_blog"
import Testimonial from "../componant/Page_compo/Home/Testimonial/Testimonial"
import Faq from "../componant/Page_compo/Home/Faq/Faq"
const Home = () => {
  return (
    <>
      {/* <Hero /> */}
      {/* <About_Comp /> */}
      {/* <MyProject /> */}
      <Service />
      <Works />
      <Home_blog />
      <Testimonial />
      <Faq />
    </>
  )
}

export default Home
