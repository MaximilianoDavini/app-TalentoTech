import { useState } from "react";

function Contador({ cantidad, setCantidad, stock }) {
    
    const [contador, setContador] = useState(0);
    
    function sumProducto () {
        setContador(contador + 1)
        }

        function resProducto () {
            setContador(contador - 1)
        }

return (
    <div style={{
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        alignContent:"center",
        gap:"5 px",
        background:"transparent"
    }}>
        <button onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 0}>-</button>
        <hr />
        <span>{cantidad}</span>
        <button onClick={() => setCantidad(cantidad + 1)} disabled={cantidad >= stock}>+</button>
    </div>
)

}
export default Contador;