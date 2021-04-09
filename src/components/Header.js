import React, { useState, useEffect, useRef } from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/images/posteoLogoMobile.png';
import logoDesktop from '../assets/images/posteoLogoDesktop.png';
import logoText from '../assets/images/posteoLogoText.png'


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
            <div className="nav__container">
                <button className="button__post">POST</button>
                <Menu></Menu>
            </div>
        </header>
    );
};

function Menu(props){
    const [open, setOpen] = useState(false);

    return (
        <>
            <a href="#" className="menu__button" onClick={() => setOpen(!open)}>
                Opciones
                
            </a>
            {open && props.children}
            <Dropdown />
        </>
    );
}

function Dropdown(){

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            {props.children}
        </a>
        );
    }
    return (
        <div className="dropdown">
            <DropdownItem>Mi perfil</DropdownItem>
            <DropdownItem>Mensajes</DropdownItem>
            <DropdownItem>Grupos</DropdownItem>
        </div>
    );
}

export default Header;