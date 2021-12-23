import Mensagem from "./Mensagem"
function AppMensagem ({_name, password}){
    return (
        <div>
            <Mensagem _name={_name} password={password}/>
            <Mensagem _name={'_name'} password={'password'}/>
        </div>
    )
}
export default AppMensagem