import React from 'react'
import "./Second_sec.scss"
import Timeline from "../../Timeline/Timeline"
const Second_sec = () => {
    return (
        <>
            <div className="second-sec-parent parent">

                <div className="second-sec-section">
                    <div className="top">Our Journey Through Time</div>
                    <div className="bottom">
                        <Timeline />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Second_sec
