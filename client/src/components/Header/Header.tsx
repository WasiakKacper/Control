/* Import React */
import { useState } from "react";

/* Import CSS */
import "./scss/Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false); //Menu visibility state

  return (
    <>
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
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Sign in</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
