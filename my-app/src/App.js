
// import Form from './components/Form';

// import FormRender from './RenderizacaoCondicional/index'

// import StateLift from './StateLift/index'

import {BrowserRouter as Browser, Routes, Route, Link} from 'react-router-dom'
import Contato from './Router/contato';
import SobreEmpresa from './Router/sobre-empresa';
import NavBar from './Router/NavBar';
function App() {
  return (
    // <div>
    //     {/* <Form/> */}
    //     {/* <FormRender /> */}
    //     {/* <StateLift/> */}
    // </div>

    <div>
 
      <Browser>
          
          <NavBar />

          <Routes>

            <Route path='/' element={App}/>

            <Route path='/sobreEmpresa' element={<SobreEmpresa/>}/>
           
            <Route path='/contato' element={<Contato />}/>
            
          </Routes>

      </Browser>
      </div>


  );
}

export default App;
