import React from "react";
import Style from "../Header/Header.module.css";
import {Link} from "react-router-dom";
import { useCart } from '../../Context/CartContext';

function Header () {
    const { getCantidadCart } = useCart();
    const totalItems = getTotalCart();
    return (
    <div className={Style.headerStyle}>
    <p className={Style.logoHeader}>MUNDO IMPRESORAS</p>        
    <nav>
           <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/productos">PRODUCTOS</Link></li>
            <li><Link to="/contacto">CONTACTO</Link></li>
            <li><Link to="/carrito">Carrito 🛒 {totalItems > 0 && <span>{totalItems}</span>}</Link></li>
           </ul>
    </nav>
    </div>
    );
}

export default Header;