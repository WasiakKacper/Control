/* Import React */
import { useState } from "react";
import { Link } from "react-scroll";

/* Import CSS */
import "./scss/Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false); //Menu visibility state

  return (
    <div className="headerWrapper">
      <header className={`header ${isActive ? "active" : ""}`}>
        {/* Logo */}
        <h3 className="headerLogo">
          <img src="/streak.svg" alt="Control" className="headerImg" />
          Control
        </h3>
        {/* Hamburger button */}
        <button
          onClick={() => setIsActive(!isActive)} //Make menu visable
          className={`hamburger ${isActive ? "active" : ""}`}
        >
          <span className="line up"></span>
          <span className="line down"></span>
        </button>
        <nav className={isActive ? "active" : ""}>
          <Link
            to="home"
            duration={500}
            smooth={true}
            onClick={() => {
              setIsActive(false);
            }}
            className="navBtn"
          >
            Home
          </Link>
          <Link
            to="about"
            duration={500}
            smooth={true}
            onClick={() => {
              setIsActive(false);
            }}
            className="navBtn"
          >
            About
          </Link>
          <Link
            to="login"
            duration={500}
            smooth={true}
            onClick={() => {
              setIsActive(false);
            }}
            className="navBtn"
          >
            Sign in
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
