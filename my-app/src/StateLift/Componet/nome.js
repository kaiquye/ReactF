function Nome ({nome}){

    return (
      <div>
         { nome && 
         (<>
            <div>
                <h1>Ola! {nome}</h1> 
                <p>{nome}</p>
            </div>

         </>)
         }
      </div>
    )
}

export default Nome