import React, { useState, useEffect, useRef } from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/posteoLogoMobile.png';
import logoDesktop from '../assets/images/posteoLogoDesktop.png';
import logoText from '../assets/images/posteoLogoText.png'
import Form from '../components/FormToPost'


const Header = () => {
    return (
        <header>
            <div class="logo__header">
                <picture>
                    <source media="(min-width: 700px)" srcset={logoDesktop}/>
                    <img src={logo} alt="Logo Posteo"/>
                </picture>
                <img src={logoText} alt="" className="logo__text"></img>
            </div>
            {/* prueba dropdown
            <div class="dropdownPrueba">
                    <label for="prueba">click</label>
                    <input type="checkbox" id="prueba"></input>
                    <div class="dropdown-content">
                        <p>Hello World!</p>
                    </div>
                </div>
                Cierra prueba dropdown */}
            <div className="nav__container">
                <button className="button__post">POST</button>
                <Menu></Menu>
            </div>
            <Form/>
        </header>
    );
};

function Menu(props){

    return (
        <div class="dropdown">
            <label for="prueba" className="menu__button">Opciones</label>
            <input type="checkbox" id="prueba" ></input>
            <div className="dropdown-content">
                <a href="#" className="menu-item">Mi perfil</a><br/>
                <a href="#" className="menu-item">Mensajes</a><br/>
                <a href="#" className="menu-item">Grupos</a><br/>
            </div>
        </div>
    );
}


export default Header;