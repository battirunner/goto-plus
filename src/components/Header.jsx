import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="nav__wrapper">
          <div className="nav__logoImage">
            <a href="#">
              <img src="/assets/img/logo.png" alt="GOTO PLUS" />
            </a>
          </div>
          <nav className="nav pc">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#">トップ</a>
              </li>
              <li className="nav__item">
                <a href="#about">私たちの取り組み</a>
              </li>
              <li className="nav__item">
                <a href="#image">支援イメージ</a>
              </li>
              <li className="nav__item">
                <a href="#message">運営者の想い</a>
              </li>
              <li className="nav__item nav__item--tel">
                <a href="tel:07076675252">ご相談はこちら</a>
              </li>
            </ul>
          </nav>
          <div className={`openbtn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav id="g-nav" className={isMenuOpen ? 'panelactive' : ''}>
            <div id="g-nav-list">
              <ul>
                <li className="nav__item">
                  <a href="#" onClick={toggleMenu}>トップ</a>
                </li>
                <li className="nav__item">
                  <a href="#about" onClick={toggleMenu}>私たちの取り組み</a>
                </li>
                <li className="nav__item">
                  <a href="#image" onClick={toggleMenu}>支援イメージ</a>
                </li>
                <li className="nav__item">
                  <a href="#message" onClick={toggleMenu}>運営者の想い</a>
                </li>
                <li className="nav__item nav__item--tel">
                  <a href="tel:07076675252" onClick={toggleMenu}>ご相談はこちら</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;