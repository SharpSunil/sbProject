import React from 'react'
import "./Header.scss"
import { IoMenu } from "react-icons/io5";
import Button from '../button/Buttonmain';
const Header = () => {
    return (
        <>
            <div className="header-parent parent">
                <div className="header-cont cont">
                    <div className="left-box">
                        <div className="logo">SB</div>
                        <div className="toggle"><IoMenu /> <span>Menu</span></div>
                    </div>
                    <div className="right-box">
                        <Button text="Let's Connect" link='/contact' onClick={() => console.log("Clicked")} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
