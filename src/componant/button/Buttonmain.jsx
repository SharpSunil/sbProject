import { useRef } from "react";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ text = "Let's Talk", link = "/", onClick }) => {
    const btnRef = useRef(null);

    const handleMouseMove = (e) => {
        const btn = btnRef.current;
        const rect = btn.getBoundingClientRect();

        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    };

    const handleMouseLeave = () => {
        btnRef.current.style.transform = "translate(0px,0px)";
    };

    return (
        <Link
            ref={btnRef}
            to={link}
            className="magnetic-btn"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <span className="text">{text}</span>

            <span className="icon">
                <TiArrowRight />
            </span>
        </Link>
    );
};

export default Button;