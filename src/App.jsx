import './App.css';
import {Layout} from './Components/Layout/Layout';
import FormularioContainer from './Components/Formulario/FormularioContainer';
import ListadoProductos from './Components/ListadoProductos/ListadoProductos';

function App() {
  return (
   <Layout>
    <h1>Nuestros productos</h1>
    <ListadoProductos />
    <FormularioContainer />
    <p>¿Queres saber más de nosotros? Contactanos haciendo click <a href="#contacto">ACÁ</a></p>
   </Layout>
  );
}

export default App;