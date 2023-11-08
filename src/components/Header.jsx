import React from "react";

const Header = () => {
  return (
    <header id="header" role="banner">
      <div className="header_inner">
        <div className="header__logo">
          <a href="#">
            portfolio <em>developer</em>
          </a>
        </div>
        <nav className="header__nav" role="navigation" aria-label="메인 메뉴">
          <ul>
            <li>
              <a href="#intro">intro</a>
            </li>
            <li>
              <a href="#skill">skill</a>
            </li>
            <li>
              <a href="#site">site</a>
            </li>
            <li>
              <a href="#port">port</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
        <div
          id="headerToggle"
          className="header__nav__mobile"
          aria-controls="primary-menu"
          aria-expanded="false"
          role="button"
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
