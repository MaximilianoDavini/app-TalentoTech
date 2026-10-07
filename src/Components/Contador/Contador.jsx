import { useState } from "react";

function Contador () {
    
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
    <button onClick={resProducto}>-</button>
    <p>{contador}</p>
    <button onClick={sumProducto}>+</button>
    </div>
)

}
export default Contador;