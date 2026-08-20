import React from "react";
import Button from "../../componant/button/Buttonmain";
import "./Error.scss";

const Error = () => {
  return (
    <div className="error-parent parent">
      <div className="error-cont cont">
        <div className="error-number">404</div>

        <div className="desc">Oops! 404 Error</div>

        <div className="heading">Page Not Found</div>

        <p className="error-text">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <Button text="Back To Home" link="/" />
      </div>
    </div>
  );
};

export default Error;