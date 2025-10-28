/* Import React */
import { useState } from "react";

/* Import CSS */
import "./scss/header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false); //Menu visibility state

  return (
    <>
      <header className="header">
        {/* Logo */}
        <h3 className="logo">Control</h3>
        {/* Hamburger button */}
        <button
          onClick={() => setIsActive(!isActive)} ////Make menu visable
          className={`hamburger ${isActive ? "active" : ""}`}
        >
          <span className="line up"></span>
          <span className="line down"></span>
        </button>
        <nav
          className={`${
            isActive ? "active" : ""
          } text-[3rem] md:text-[3.5rem] lg:text-[4rem]`}
        >
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Sign in</a>
        </nav>
      </header>
    </>
  );
};

export default Header;
