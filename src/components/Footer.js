import React from 'react'
import '../assets/styles/components/Footer.scss'
import logoWhite from '../assets/images/posteoLogoWhite.png'
import instagram from '../assets/images/instagram-icon.png'
import twitter from '../assets/images/twitter-icon.png'
import facebook from '../assets/images/facebook-icon.png'

/**
 * Return Component Footer
 * 
 * @component
 * return (
 *  <footer className="container__footer" />
 * )
 */
const Footer = () => {
    return (
        <footer className="container__footer">
            <div className="container__copy">
                <img src={logoWhite} alt=""></img>
                <p>Creado por <span>@untalinfo</span></p>
            </div>
            <ul className="container__socialMedia">
                <li><img src={facebook} alt=""></img></li>
                <li><img src={instagram} alt=""></img></li>
                <li><img src={twitter} alt=""></img></li>
            </ul>
        </footer>
    );
}

export default Footer;