import React from "react";
import styles from "../ListadoProductos/Productos.module.css";
import Contador from "../Contador/Contador";
import Favorito from "../Favorito/Favorito";

function MostrarProductos({nombre, detalle, stock, precio}) {
  return (
    
    <div className={styles.productoContainer}>
      <>
    <Favorito />
    <p>Nombre: {nombre}</p>
    <p>Detalle: {detalle}</p>
    <p>Stock: {stock}</p>
    <p>Precio: ${precio}</p>
    <Contador />
    </>
    </div>
  );
}

export default MostrarProductos;