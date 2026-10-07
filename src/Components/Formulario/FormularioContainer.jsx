import { useState } from "react";
import FormularioProducto from "./FormularioProducto";

function FormularioContainer () 
{
    const [DatosForm, SetDatosForm] = useState (
        {
            id: "",
            nombre: "",
            precio: "",
            stock: ""
        }
    )

    const manejarCambio = (evento) => {
        const {name, value} = evento.target;

        SetDatosForm (
            {
                ...DatosForm,
                [name]: value
            }
        );
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        console.log("Enviando los siguientes datos a la API", DatosForm)
    }

    return (
        <FormularioProducto
        DatosForm={DatosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        />
    );
    
}

export default FormularioContainer;