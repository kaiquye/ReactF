import React from "react"
function Botao ({click, textM}){
    return(
    <>
        <button onClick={click}>{textM}</button>
    </>
    )
}

export default Botao;