import React from "react";
import { Link } from "react-router-dom";
import styles from "../ListadoProductos/Productos.module.css";
import Contador from "../Contador/Contador";
import Favorito from "../Favorito/Favorito";

function MostrarProductos({ id, nombre, detalle, stock, precio, imagen }) {
    return (
        <div className={styles.productoContainer}>
            <Favorito />

            <Link to={`/producto/${id}`}>
                <h2>{nombre}</h2>
                <img src={imagen} alt={nombre} width="150" height="150" />
                <p>Precio: ${precio}</p>
            </Link>
            <p>Detalle: {detalle}</p>
            <p>Stock: {stock}</p>
            <Contador />
        </div>
    );
}

export default MostrarProductos;