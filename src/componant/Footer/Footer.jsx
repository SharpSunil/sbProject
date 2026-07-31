import React from 'react'
import Button from '../button/Buttonmain'
import { Link } from 'react-router-dom'
import ch1 from "../../assets/background_stuck/character.webp"
import "./Footer.scss"
import logo1 from "../../assets/favicon.png"
import glow from "../../assets/background_stuck/glow.png";
const Footer = () => {
    return (
        <>
            <div className="footer-parent parent">
                <div className="overlay1"></div>
                <div className="overlay2"></div>
                <div className="cl_overlay">
                    <img src={glow} alt="" />
                </div>
                <div className="footer-cont cont">
                    <div className="top-panel">
                        <div className="left-footer">
                            <div className="top-group"><div className="heading">
                                Take your brand to the next level with <span>Plexify</span></div> <Button text="Let's Connect" link="/contact" /></div>
                            <div className="bottom-group">
                                <a href='#'>LINKEDIN</a>
                                <a href='#'>INSTAGRAM</a>
                                <a href='#'>TWITTER</a>
                                <a href='#'>FACEBOOK</a>
                            </div>

                        </div>
                        <div className="right-footer">
                            <div className="top-side">
                                <img src={ch1} alt='footer character ' />
                            </div>
                            <div className="bottom-side">
                                <div className="group1">
                                    <h5>Company</h5>
                                    <Link to="#">Home</Link>
                                    <Link to="#">About Us</Link>
                                    <Link to="#">Service</Link>
                                </div>
                                <div className="group2">
                                    <h5>Send a Message</h5>
                                    <a href='#'>hellow@example.com</a>
                                    <a href='="#'>info@example.com</a>
                                </div>
                                <div className="group3">
                                    <h5>Call us</h5>
                                    <a href='#'>+917083445507</a>
                                    <a href='#'>+917083445507</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* //bottom panel  */}
                    <div className="bottom-panel">
                        <div className="left-sides">
                            Copyright © 2026 Sunil Shelke. All Rights Reserved Copyright
                        </div>
                        <div className="right-sides">
                            <img src={logo1} />
                            <div className="txt">SB Project</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer
