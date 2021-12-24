import {useState} from 'react'
import Form from './Component/Form'


function AppFormIndex()
{
    var text = 'Click'

    function click(){
        //Pausa o submit do formulario e executa as outras linhas...
        // preventDefault()
        console.log('teste, clicado!')
    }


    return(
        <div>
            <Form click={click} valorButton={text} />
        </div>
    )       
}
export default AppFormIndex