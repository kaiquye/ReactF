
import {Link} from 'react-router-dom'
 

function NavBar(){

    return(
        <ul className='list' >
            <li>
                <Link to='/'>Main</Link>
            </li> 
            <li>
                <Link to='/sobreEmpresa'>Sobre-Empresa</Link>
            </li> 
            <li>
                <Link to='/contato'>Contato</Link>
            </li>
        </ul>
    ) 
 
}

export default NavBar;