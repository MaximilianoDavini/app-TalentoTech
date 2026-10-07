import ListadoProductos from "./ListadoProductos";


function Productos () {

    const ListaProductos = [
        {nombre: "producto 1", detalle: "detalle producto 1", stock: 20, precio: 50},
        {nombre: "producto 2", detalle: "detalle producto 2", stock: 12, precio: 60},
        {nombre: "producto 3", detalle: "detalle producto 3", stock: 13, precio: 70},
        {nombre: "producto 4", detalle: "detalle producto 4", stock: 156, precio: 80},
    ];
    
    return ( 
        <ListadoProductos Productos={ListaProductos} />
    );
}

export default Productos;