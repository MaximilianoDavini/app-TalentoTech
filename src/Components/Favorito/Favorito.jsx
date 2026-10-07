import { useState } from "react";

function Favorito () {

    const [esFavorito, setFavorito] = useState (true);
    
    function marcarFavorito () {
        setFavorito (!esFavorito);
    }

    if (!esFavorito) {
        return (
            <>
            <p onClick={marcarFavorito}>⭐</p>
            </>
        );
            
    } else
    {
        return (
        <p onClick={marcarFavorito}>☆</p>            
        );
        
    }

}

export default Favorito;