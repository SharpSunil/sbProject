import React, { useState } from "react";
import "./Header.scss";

import { Link } from "react-router-dom";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import Button from "../button/Buttonmain";
import logo from "../../assets/favicon.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="header-parent">
      <div className="parent">
        <div className="header-cont cont">
          <div className="left-box">
            <Link to="/" className="logo">
              <img src={logo} alt="logo" />
            </Link>

            <div className="toggle" onClick={() => setMenuOpen(true)}>
              <IoMenu />
              <span>Menu</span>
            </div>
          </div>

          <div className="right-box">
            <Button text="Let's Connect" link="/contact" />
          </div>
        </div>
      </div>

      <div className={`main-full ${menuOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={closeMenu}>
          <IoClose />
        </div>

        <div className="first-group">
          {/* LEFT */}
          <div className="left-group">
            <div className="contact-row">
              <div className="item">
                <h4>Send a message</h4>
                <a href="mailto:hello@company.com">hello@company.com</a>
                <a href="mailto:info@company.com">info@company.com</a>
              </div>

              <div className="item">
                <h4>Call us</h4>
                <a href="tel:+919876543210">+91 98765 43210</a>
                <a href="tel:+919876543211">+91 98765 43211</a>
              </div>
            </div>

            <div className="address">
              <h4>Visit Us</h4>
              <p>
                501 Business Avenue
                <br />
                Pune, Maharashtra
                <br />
                India
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="right-menu">
            <ul>

              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              {/* Pages */}

              <li className="has-sub">
                <div
                  className="menu-title"
                  onClick={() => toggleMenu("pages")}
                >
                  <span>Pages</span>

                  <IoChevronDown
                    className={`arrow ${
                      activeMenu === "pages" ? "active" : ""
                    }`}
                  />
                </div>

                <ul
                  className={`submenu ${
                    activeMenu === "pages" ? "show" : ""
                  }`}
                >
                  <li>
                    <Link to="/about" onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/team" onClick={closeMenu}>
                      Our Team
                    </Link>
                  </li>

                  <li>
                    <Link to="/faq" onClick={closeMenu}>
                      FAQ
                    </Link>
                  </li>

                  <li>
                    <Link to="/pricing" onClick={closeMenu}>
                      Pricing
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Services */}

              <li className="has-sub">
                <div
                  className="menu-title"
                  onClick={() => toggleMenu("services")}
                >
                  <span>Services</span>

                  <IoChevronDown
                    className={`arrow ${
                      activeMenu === "services" ? "active" : ""
                    }`}
                  />
                </div>

                <ul
                  className={`submenu ${
                    activeMenu === "services" ? "show" : ""
                  }`}
                >
                  <li>
                    <Link to="/web-design" onClick={closeMenu}>
                      Web Design
                    </Link>
                  </li>

                  <li>
                    <Link to="/development" onClick={closeMenu}>
                      Development
                    </Link>
                  </li>

                  <li>
                    <Link to="/branding" onClick={closeMenu}>
                      Branding
                    </Link>
                  </li>

                  <li>
                    <Link to="/seo" onClick={closeMenu}>
                      SEO
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/portfolio" onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Let's Talk
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="bottom-group">
         

          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><BsTwitterX /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;