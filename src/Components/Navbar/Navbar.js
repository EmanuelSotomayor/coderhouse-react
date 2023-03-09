import "./navbar.scss";
import React from 'react';
import { LogoWithTitle } from "../../assets/Images";
import { Link } from "react-router-dom";

const Navbar = ({ children, ...params })=>{
    return(
        <header className="navbar">
            <div id="navbarContainer">
                <figure id="logo">
                    <Link to={"/"}>
                        <img id="image" src={LogoWithTitle} alt="Logo no encontrado"/>
                    </Link>
                </figure>
                <nav id="isClosed">
                    <button id="closeMenu">
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <ul className="navbar__item--links">
                        <li>
                            <Link to={"/"}>
                                {params.Home}
                            </Link>
                        </li>
                        <li>
                            <Link to={"/mangas"}>
                                {params.Mangas}
                            </Link>
                        </li>
                        <li>
                            <a href="#novelasLigeras">{params.Novelas}</a>
                        </li>
                        <li>
                            <a href="#figuras">{params.Figuras}</a>
                        </li>
                        <li>
                            <a href="#contacto">{params.Contacto}</a>
                        </li>
                    </ul>
                </nav>
                <div className="iconsContainer">
                {children}
                <button id="openMenu">
                    <i className="bi bi-list"></i>
                </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;