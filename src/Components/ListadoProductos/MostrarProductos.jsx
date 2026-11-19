import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../ListadoProductos/Productos.module.css";
import Contador from "../Contador/Contador";
import Favorito from "../Favorito/Favorito";
import { useCart } from "../../Context/CartContext";

function MostrarProductos({ id, nombre, detalle, stock, precio, imagen }) {

    const producto = { id, nombre, precio, stock, imagen };
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useCart(); // Traemos la función del contexto
    
    const handleAddToCart = () => {
        if (cantidad === 0) return;
         addToCart(producto, cantidad);
         alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
         setCantidad(0);
        };
    

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
            <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
            <Contador cantidad={cantidad} setCantidad={setCantidad} stock={stock} />
            <button onClick={handleAddToCart}> Agregar {cantidad} al carrito </button>
        </div>
    );
}

export default MostrarProductos;