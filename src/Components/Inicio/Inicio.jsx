import React from "react";
import Style from "../Inicio/Inicio.module.css";
import Layout from "../Layout/Layout";

function Inicio () {

    return (
        <div className={Style.inicioCss}>
            <h1>Bienvenidos a MUNDO IMPRESORAS</h1>
            <p>Aquí encontraras impresoras de primera marca y de la mejor calidad, precio y beneficios.</p>
            
        </div>
    );
};

export default Inicio;