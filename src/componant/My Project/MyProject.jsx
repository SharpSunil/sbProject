import { useEffect, useRef, useState } from "react";
import "./MyProject.scss";
import img1 from "../../assets/1.jpg";
import { GoArrowUpRight } from "react-icons/go";

const projects = [
    {
        id: 1,
        title: "Dynamic E-Commerce Platform",
        image: img1,
    },
    {
        id: 2,
        title: "Dynamic E-Commerce Platform",
        image: img1,
    },
    {
        id: 3,
        title: "Dynamic E-Commerce Platform",
        image: img1,
    },
    {
        id: 4,
        title: "Dynamic E-Commerce Platform",
        image: img1,
    },
];

export default function MyProject() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            const track = trackRef.current;

            if (!section || !track) return;

            const rect = section.getBoundingClientRect();

            const scrollLength = section.offsetHeight - window.innerHeight;

            const p = Math.min(Math.max(-rect.top / scrollLength, 0), 1);

            setProgress(p);

            const maxMove = track.scrollWidth - window.innerWidth;

            track.style.transform = `translateX(-${p * maxMove}px)`;
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="myProject-parent" ref={sectionRef}>

                <div className="sticky-wrapper">
                    <div className="bg-heading">WORK</div>
                    <div className="progress-circle">
                        <svg viewBox="0 0 100 100">
                            <circle
                                className="bg"
                                cx="50"
                                cy="50"
                                r="42"
                            />

                            <circle
                                className="progress"
                                cx="50"
                                cy="50"
                                r="42"
                                style={{
                                    strokeDashoffset: 264 - progress * 264,
                                }}
                            />
                        </svg>

                        <span>{Math.round(progress * 100)}%</span>
                    </div>

                    <div className="slider-track" ref={trackRef}>
                        {projects.map((item) => (
                            <div className="card" key={item.id}>
                                <img src={item.image} alt={item.title} />

                                <div className="overlay" />

                                <div className="content">
                                    <div className="icon">
                                        <GoArrowUpRight />
                                    </div>

                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

          
        </>
    );
}