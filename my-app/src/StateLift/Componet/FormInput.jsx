function Form ({setNome}){
    return(
        <div>
            <form>
                <input type='text' id='inputId' placeholder="digite o seu nome : " 
                onChange={(e) => setNome(e.target.value)} />
            </form>
        </div>
    )
}

export default Form