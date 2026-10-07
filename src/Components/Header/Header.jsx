import React from "react";
import Style from "../Header/Header.module.css";


function Header () {
    return (
    <div className={Style.headerStyle}>
    <p className={Style.logoHeader}>MUNDO IMPRESORAS</p>        
    <nav>
            <a id="inicio" href="#">INICIO</a>
            <a id="productos" href="#">PRODUCTOS</a>
            <a id="contaco" href="#">CONTACTO</a>
    </nav>
    </div>
    );
}

export default Header;