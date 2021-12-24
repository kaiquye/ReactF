
import {useState} from 'react'
import Form from './Componet/FormInput'
import Nome from './Componet/nome'

function StateLift (){
    
    const [nome, setNome] = useState('')
     
    return(
        <>
            <Form setNome={setNome} />
            <Nome nome={nome}/>
        </>
    )
}
export default StateLift