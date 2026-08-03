import React from 'react'
import Button from '../../../button/Buttonmain'
import img1 from "../../../../assets/1.jpg"
import "./Fifth_sec.scss"
const Fifth_Sec = () => {
    return (
        <>
            <div className="fifth-sec-parent parent">
                <div className="left-sec">
                    <img src={img1} alt="" />
                </div>
                <div className="right-sec">
                   <div className="content-box-cont cont">
                     <div className="heading">
                     The Visionaries Behind the Brands
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </div>
                    <Button text="Join Our Team" link="/team" />
                   </div>
                </div>
            </div>
        </>
    )
}

export default Fifth_Sec
