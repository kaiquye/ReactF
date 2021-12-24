import {useState} from 'react'
import Botao from './MensagemComponet/Button'

import Components from './MensagemComponet/index'
function Form (){

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    function eventClick(){
        console.log('Button click.....')
    }

    function form(e){
        //Pausa o submit do formulario e executa as outras linhas...
        e.preventDefault()


        console.log('Ola, botão acionado !')
        console.log('nome : ')
        console.log(name)
        console.log('password')
        console.log(password)
    }
    return(
        <div>  
            <h1>Forms : </h1>
            <form onSubmit={form}>
                <label>Nome : </label>
                <input type='text' placeholder="input" id="nome" name="nome"
                // dispara uma ação quando uma mudança ocorre em algum elemento (Event : e)
                onChange={(e)=>{
                    // function para passa o valor do input para o useState()
                    setName(e.target.value)
                }}/> 
                 <br/>
                <label>Passaword : </label>
                <input type='text' placeholder="input" id="passaword" name="passaword" 
                // dispara uma ação quando uma mudança ocorre em algum elemento (Event : e)
                onChange={(e)=>{
                    // function para passa o valor do input para o useState()
                    setPassword(e.target.value)
                }}/> 
            </form>
                <Botao click={eventClick} textM={'CLICK     '}/>
                // Mensagem...
            <Components _name={name} password={password} />
                
        </div>
    )
}

export default Form;