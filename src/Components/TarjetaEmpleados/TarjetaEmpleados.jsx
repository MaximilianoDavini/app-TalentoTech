import React from "react";
import Style from "../TarjetaEmpleados/TarjetaEmpleados.module.css"

function TarjetaEmpleados({nombre,email,puesto,img}) {

    return(
            <div className={Style.empleadosCard}>
            <img src={img} alt="Imagen empleado" />
            <h4>{nombre}</h4>
            <p>{email}</p>
            <p>{puesto}</p>
            </div>
     );
}

export default TarjetaEmpleados;