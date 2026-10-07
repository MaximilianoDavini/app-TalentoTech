import React from "react";
import styles from "../Productos/Productos.module.css";
import Contador from "../Contador/Contador";
import Favorito from "../Favorito/Favorito";


function MostrarProductos({nombre, detalle, stock, precio}) {
  
  return (
    <div className={styles.productoContainer}>
      <Favorito />
    <p>nombre: {nombre}</p>
    <p>detalle: {detalle}</p>
    <p>Stock: {stock}</p>
    <p>precio: {precio}</p>
    
    <Contador />
    </div>
  );
}

export default MostrarProductos;