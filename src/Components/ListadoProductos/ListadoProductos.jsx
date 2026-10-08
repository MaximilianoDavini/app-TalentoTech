// import Productos from "../ListadoProductos/Productos.json";
import MostrarProductos from "../ListadoProductos/MostrarProductos";
import { useEffect, useState } from "react";
function ListadoProductos()
{
const [ProductosArray, setProductosArray] = useState([]);
// const url = "/Productos.json"; // asi queda para local
const url = `${import.meta.env.BASE_URL}Productos.json`; //asi queda para githb pages
useEffect(
    () => {
    async function Api() {
    try {
        const response = await fetch (url);
        const data = await response.json();
        setProductosArray(data);
    }
    catch {
        console.log("Error");
    }
    }
    Api();
    },[]
);

    
    return (
        <div>
            {
                ProductosArray.map(
                    (Producto,index) => ( 
                    <MostrarProductos 
                    key={index}
                    nombre={Producto.nombre}
                    detalle={Producto.detalle}
                    stock={Producto.stock}
                    precio={Producto.precio}
                    />
                    )
                )
            }
        </div>
    );
}

export default ListadoProductos;