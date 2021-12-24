import Mensagem from "./Mensagem";
import {useState} from 'react'
function Form({click, valorButton}){


     var [use, setUse] = useState('')

     
    function LimparP (){
          setUse('')
    }

    return(
        <div>
            <form>
                <label>Email :</label>
                <input type='email' placeholder="Digite o seu e-mail" id='inpEmail' name="inpEmail"
                    onChange={(e) => setUse(e.target.value)}
                />
                <label>Nome :</label>
                <input type='text' placeholder="Digite o seu nome" id=' ' name=" "/>
                <label>Senha :</label>
                <input type='text' placeholder="Digite o sua senha" id=' ' name=" "/>
                <button onClick={click}>{valorButton}</button>
            </form>
            {/* condicao IF  */}
            {use &&(
                <>
                    <p> email valido! </p>
                    <button onClick={LimparP} >Teste</button>
                </>
            )}
            {/* ------------ */}
            <Mensagem email={use} />
        </div>
    )

}

export default Form;