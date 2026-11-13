import { useEffect, useState } from "react";
import Style from "../TarjetaEmpleados/TarjetaEmpleados.module.css"
import TarjetaEmpleados from "./TarjetaEmpleados";
function TarjetaEmpleadosContainer () {
    const [Listado, SetListado] = useState([]);
    const url = "/Empleados.json";
    useEffect( () => {
        async function ObtenerEmpleados() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        SetListado (data);   
        } catch {
        console.log("error")
        }
    }
    ObtenerEmpleados();
 },[]);
//     return (
//         <>
//         {
//         Listado.map(
//             (Lista, index) => (
//                 <TarjetaEmpleados key={index}
//                  id={Lista.id} nombre={Lista.nombre} email={Lista.email} puesto={Lista.puesto}/>
//             )
//         )
//     }
//     </>
//     );
  //PREVIO HECHO  
return (
    <div className={Style.moduloCard}>
        {
            Listado.map(
                (Lista,index) => ( 
                <TarjetaEmpleados 
                key={index}
                img={Lista.img}
                nombre={Lista.nombre}
                email={Lista.email}
                puesto={Lista.puesto}
                />
                )
            )
        }
    </div>
);
    }   

export default TarjetaEmpleadosContainer;