import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/images/posteoLogoMobile.png";
import logoDesktop from "../assets/images/posteoLogoDesktop.png";
import logoText from "../assets/images/posteoLogoText.png";

/**
 * Return Component Header
 *
 * @component
 * return (
 *  <header />
 * )
 */
const Header = ({ setShowFormModal }) => {
  return (
    <header>
      <div className="logo__header">
        <picture>
          <source media="(min-width: 700px)" srcSet={logoDesktop} />
          <img src={logo} alt="Logo Posteo" />
        </picture>
        <img src={logoText} alt="" className="logo__text"></img>
      </div>
      <div className="nav__container">
        <button className="button__post" onClick={() => setShowFormModal(true)}>
          POST
        </button>
        <Menu></Menu>
      </div>
    </header>
  );
};

/**
 * Return Subomponent Menu-dropdown
 *
 * @component
 * return (
 *  <div className='dropdown' />
 * )
 */
function Menu() {
  return (
    <div className="dropdown">
      <label htmlFor="prueba" className="menu__button">
        Opciones
      </label>
      <input type="checkbox" id="prueba"></input>
      <div className="dropdown-content">
        <a href="#" className="menu-item">
          Mi perfil
        </a>
        <br />
        <a href="#" className="menu-item">
          Mensajes
        </a>
        <br />
        <a href="#" className="menu-item">
          Grupos
        </a>
        <br />
      </div>
    </div>
  );
}

export default Header;
