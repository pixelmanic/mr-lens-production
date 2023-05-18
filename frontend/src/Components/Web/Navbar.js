import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../../Styles/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const navbarStyle = {
    background: scrolled ? "rgba( 255, 255, 255, 0.35 )" : "transparent",
    transition: "background 0.5s ease",
    boxShadow: scrolled ? "0 8px 32px 0 rgba( 0,0,0,0.65 )" : "none",
    backdropFilter: scrolled ? "blur( 14px )" : "none",
    WebkitBackdropFilter: scrolled ? "blur( 14px )" : "none",
  };

  const textStyle = {
    color: scrolled ? "black" : "white",
    transition: "0.3s ease-in-out",
  };

  return (
    <div>
      <nav className="navbar fixed-top Navbar" style={navbarStyle}>
        <div className="container-fluid mainNav">
          <div className="linksNav">
            <Link
              key="about"
              to="about"
              sp={true}
              smooth={true}
              duration={500}
              className="link"
              style={textStyle}
            >
              About
            </Link>
            <Link
              key="works"
              to="works"
              sp={true}
              smooth={true}
              duration={500}
              className="link"
              style={textStyle}
            >
              Works
            </Link>
            <Link
              key="home"
              to="home"
              sp={true}
              smooth={true}
              duration={500}
              className="navbar-brand"
              style={{cursor:'pointer'}}
            >
              <img
                className="brandNavMain"
                alt="..."
                src=".\Images\Artboard 1.png"
              ></img>
            </Link>
            <Link
              key="packages"
              to="packages"
              sp={true}
              smooth={true}
              duration={500}
              className="link"
              style={textStyle}
            >
              Packages
            </Link>
            <Link
              key="contact"
              to="contact"
              sp={true}
              smooth={true}
              duration={500}
              className="link"
              style={textStyle}
            >
              Contact
            </Link>
          </div>
          <a key="home" href="#home" className="navbar-brand brandNavs">
            <img
              className="brandNavsmall"
              alt="..."
              src=".\Images\Artboard 1.png"
            ></img>
          </a>
          <button
            className="navbar-toggler togglerButton"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a
                    key="about"
                    href="#about"
                    className="nav-link active"
                    aria-current="page"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a
                    key="works"
                    href="#works"
                    className="nav-link"
                    aria-current="page"
                  >
                    Works
                  </a>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a
                    key="packages"
                    href="#packages"
                    className="nav-link"
                    aria-current="page"
                  >
                    Packages
                  </a>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <a
                    key="contact"
                    href="#contact"
                    className="nav-link"
                    aria-current="page"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
