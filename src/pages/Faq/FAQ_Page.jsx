import React, { useState } from "react";
import "./Faq_page.scss";

import glow from "../../assets/background_stuck/glow.png";
const FAQ_Page = () => {
    const [activeCategory, setActiveCategory] = useState("General Questions");
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = {
        "General Questions": [
            {
                question: "What services do you offer?",
                answer:
                    "We offer professional website design, web development, UI/UX design, e-commerce development, custom web applications, and digital solutions tailored to your business needs.",
            },
            {
                question: "What industries do you specialize in?",
                answer:
                    "We work with businesses across multiple industries including real estate, healthcare, education, finance, e-commerce, hospitality, technology, and professional services.",
            },
            {
                question:
                    "Do you provide custom website design or use templates?",
                answer:
                    "We primarily create custom website designs based on your brand, requirements, and business goals. Templates can also be customized when they are suitable for the project.",
            },
            {
                question: "What platforms do you work with?",
                answer:
                    "We work with React.js, Next.js, WordPress, WooCommerce, Node.js, and other modern web technologies depending on the project requirements.",
            },
            {
                question: "How do you price your services?",
                answer:
                    "Pricing depends on the project scope, number of pages, features, design requirements, integrations, and development complexity. We provide a customized quotation after understanding your requirements.",
            },
        ],

        "Process & Workflow": [
            {
                question: "What is your website development process?",
                answer:
                    "Our process generally includes requirement gathering, planning, UI/UX design, development, testing, revisions, deployment, and post-launch support.",
            },
            {
                question: "How long does it take to build a website?",
                answer:
                    "The timeline depends on the project's size and complexity. A simple website may take a few days, while a larger custom application may require several weeks.",
            },
            {
                question: "Can I request changes during development?",
                answer:
                    "Yes. We provide opportunities for feedback and revisions during the development process to ensure the final website matches your expectations.",
            },
            {
                question: "Do you provide website maintenance?",
                answer:
                    "Yes. We can provide ongoing maintenance, updates, security checks, content updates, bug fixes, and technical support.",
            },
        ],

        "Technical Questions": [
            {
                question: "Will my website be mobile responsive?",
                answer:
                    "Yes. All websites are designed and developed to work smoothly across desktops, tablets, and mobile devices.",
            },
            {
                question: "Do you provide API integration?",
                answer:
                    "Yes. We can integrate REST APIs, third-party APIs, payment systems, CRM systems, Google services, WhatsApp integrations, and other required services.",
            },
            {
                question: "Can you build a custom admin panel?",
                answer:
                    "Yes. We can develop custom admin dashboards for managing users, products, properties, blogs, orders, leads, and other website content.",
            },
            {
                question: "Do you provide hosting and deployment?",
                answer:
                    "Yes. We can assist with hosting configuration, domain setup, SSL, deployment, DNS configuration, and production setup.",
            },
        ],

        "Marketing & SEO": [
            {
                question: "Do you provide SEO services?",
                answer:
                    "Yes. We can help with technical SEO, on-page SEO, metadata, sitemap configuration, robots.txt, image optimization, page speed, and other SEO requirements.",
            },
            {
                question: "Will my website be optimized for Google?",
                answer:
                    "We follow SEO-friendly development practices including semantic HTML, optimized images, responsive layouts, proper metadata, clean URLs, and performance optimization.",
            },
            {
                question: "Can you integrate Google Analytics?",
                answer:
                    "Yes. Google Analytics, Google Search Console, conversion tracking, and other analytics tools can be integrated into your website.",
            },
        ],

        Support: [
            {
                question: "Do you provide technical support after launch?",
                answer:
                    "Yes. We provide post-launch technical support depending on the selected service and project requirements.",
            },
            {
                question: "What happens if I find a bug after delivery?",
                answer:
                    "If a bug is related to the delivered functionality, we will investigate and fix it according to the project's support or warranty terms.",
            },
            {
                question: "Can you update my existing website?",
                answer:
                    "Yes. We can modify, redesign, optimize, or add new features to an existing website or web application.",
            },
        ],
    };

    const categories = Object.keys(faqData);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setOpenIndex(null);
    };

    const handleFAQClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-page-parent parent">
            <div className="overlay1"></div>
            <div className="overlay2"></div>
            <div className="cl_overlay">
                <img src={glow} alt="" />
            </div>
            <div className="faq-page-cont cont">

                {/* Heading */}
                <div className="faq-heading">
                    <h1>
                        Frequently Asked
                        <br />
                        Questions
                    </h1>
                </div>

                {/* Category Tabs */}
                <div className="faq-tabs-wrapper">
                    <div className="faq-tabs">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`faq-tab ${activeCategory === category ? "active" : ""
                                    }`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* FAQ List */}
                <div className="faq-list">
                    {faqData[activeCategory].map((faq, index) => (
                        <div
                            className={`faq-item ${openIndex === index ? "open" : ""
                                }`}
                            key={index}
                        >
                            <button
                                className="faq-question"
                                onClick={() => handleFAQClick(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>

                                <span className="faq-icon">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </button>

                            <div
                                className={`faq-answer ${openIndex === index ? "show" : ""
                                    }`}
                            >
                                <div className="faq-answer-inner">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ_Page;