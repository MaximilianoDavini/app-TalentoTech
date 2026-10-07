import MostrarProductos from "./MostrarProductos";

function listaProductos({Productos})
{
    
    return (
        <div>
            {
                Productos.map(
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

export default listaProductos;