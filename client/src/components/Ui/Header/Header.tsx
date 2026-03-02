import { useState } from "react";
import { Link } from "react-scroll";
import "./scss/Header.scss";

type linkType = {
  link: string;
  label: string;
};

const LINKS: linkType[] = [
  {
    link: "home",
    label: "Home",
  },
  {
    link: "about",
    label: "About",
  },
  {
    link: "login",
    label: "Sign in",
  },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`header ${isActive ? "active" : ""}`}>
      <h3 className="headerLogo">
        <img src="/streak.svg" alt="Control" className="headerImg" />
        Control
      </h3>
      <button
        onClick={handleToggle}
        className={`hamburger ${isActive ? "active" : ""}`}
      >
        <span className="line up"></span>
        <span className="line down"></span>
      </button>
      <nav className={isActive ? "active" : ""}>
        {LINKS.map((link) => (
          <Link
            to={link.link}
            duration={500}
            smooth={true}
            onClick={handleToggle}
            className="navBtn"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
