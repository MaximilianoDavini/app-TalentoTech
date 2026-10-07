import React from "react";

function FormularioProducto ({DatosForm,manejarCambio, manejarEnvio}) {
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '20px auto',
        padding: '20px',
        border: '2px solid white',
        borderRadius: '8px',
        gap: '10px',
        color: 'white'
        };

    return (
    <form style={formStyle} onSubmit={manejarEnvio}>
        <h3>Agregar producto nuevo</h3>
        <div>
            <label htmlFor="id">Numero del Producto</label>
            <input type="text" name="id" onChange={manejarCambio} />
        </div>
        <div>
            <label htmlFor="nombre">Nombre del Producto</label>
            <input type="text" name="nombre" onChange={manejarCambio} />
        </div>
        <div>
            <label htmlFor="precio">Precio del Producto</label>
            <input type="number" name="precio" onChange={manejarCambio} />
        </div>
        <div>
            <label htmlFor="stock">Stock del Producto</label>
            <input type="number" name="stock" onChange={manejarCambio} />
         </div>
        {/*<div>
            <label htmlFor="">Imagen del Producto</label>
            <input type="file" onChange={manejarCambio} />
        </div> */}
        <button type="submit">Guardar producto</button>
    </form>        
    );
}

export default FormularioProducto;