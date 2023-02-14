import "./navbar.css";
import React from 'react';
import { Logo, CartShoppingIcon, UserIcon} from '../../assets/Images';

const Navbar = (props)=>{
    return(
        <header className="navbar">
            <figure id="logo">
                <img id="image" src={Logo} alt="Logo no encontrado"/>
            </figure>
            <ul className="navbar__item--links">
                <a href="#inicio">{props.Home}</a>
                <a href="#mangas">{props.Mangas}</a>
                <a href="#novelasLigeras">{props.Novelas}</a>
                <a href="#figuras">{props.Figuras}</a>
                <a href="#contacto">{props.Contacto}</a>
            </ul>
            <div className="icons">
                <img className="icon" src={CartShoppingIcon} alt="Icono no encontrado"/>
                <img className="icon" src={UserIcon} alt="Icono no encontrado"/>
            </div>
        </header>
    );
};

export default Navbar;