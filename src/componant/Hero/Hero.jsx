import "./Hero.scss";

const Hero = () => {
    return (
        <section className="hero-parent parent">



            <div className="hero-cont cont">
                {/* Decorative Elements */}
                <span className="shape shape1 bg-contain"></span>
                <span className="shape shape2 bg-contain" ></span>
                <span className="shape shape3 bg-contain"></span>
                <span className="shape shape4 bg-contain"></span>


                <div className="top-text">
                    <h3>WE</h3>
                    <span>ARE A</span>


                    <h1 className="digital">digital</h1>

                    <div className="tagline">
                        <span>{`{`}</span>

                        <p>
                            Boost Your Brand with Cutting-Edge Digital Marketing!
                        </p>

                        <span>{`}`}</span>
                    </div>
                </div>
                <div className="bottom-row">

                    <h1 className="marketing">
                        marketing
                    </h1>

                    <h2>AGENCY</h2>

                </div>

                <div className="social">
                    <span>LN</span>
                    <span>IN</span>
                    <span>X</span>
                    <span>FB</span>
                </div>

            </div>
        </section>
    );
};

export default Hero;