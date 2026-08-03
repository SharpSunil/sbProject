import React, { useState } from "react";
import img1 from "../../../../assets/1.jpg";
import { IoIosArrowUp } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./faq.scss"
const faqData = [
    {
        question: "Am I a good candidate for plastic surgery?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloribus recusandae quidem consectetur nam accusamus a est quasi, neque enim modi quibusdam corrupti aspernatur nulla sint incidunt ipsa voluptas vero.",
    },
    {
        question: "How long does recovery take?",
        answer:
            "Recovery time depends on the procedure. Most patients can return to light activities within a few days, while complete recovery may take several weeks.",
    },
    {
        question: "Is plastic surgery safe?",
        answer:
            "Yes, when performed by a qualified and experienced surgeon in an accredited facility, plastic surgery is generally safe.",
    },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-parent parent">
            <div className="faq-cont cont">
                <div className="left-faq">
                    <img src={img1} alt="FAQ" />
                      <span className="shape shape1 bg-contain"></span>
                <span className="shape shape2 bg-contain" ></span>
                <span className="shape shape3 bg-contain"></span>
                <span className="shape shape4 bg-contain"></span>
                </div>

                <div className="right-faq">
                    <div className="heading">Frequently Asked Questions</div>
                    <div className="desc">
                        We have professional experts around the world.
                    </div>

                    {faqData.map((item, index) => (
                        <div
                            className={`question-bank ${activeIndex === index ? "active" : ""
                                }`} key={index} >
                            <div className="question"
                                onClick={() => toggleFaq(index)} >
                                {item.question}

                                <span className={activeIndex === index ? "icon active" : "icon"}>
                                    <MdKeyboardArrowDown />
                                </span>
                            </div>

                            <div className="answer">
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;