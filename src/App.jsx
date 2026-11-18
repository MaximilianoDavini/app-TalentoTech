import './App.css';
import Layout from './Components/Layout/Layout';
import FormularioContainer from './Components/Formulario/FormularioContainer';
import ListadoProductos from './Components/ListadoProductos/ListadoProductos';
import { Routes, Route } from 'react-router-dom';
import Bienvenida from './Bienvenida';
import ProductoDetalle from './Components/ListadoProductos/ProductoDetalle';
import Inicio from './Components/Inicio/Inicio';
import Cart from './Components/Carrito/Cart';

function App() {
  return (
 <Routes>
    <Route element={<Layout />}>
    <Route path='/' element={<Inicio/>}/>
    <Route path='/inicio' element={<Bienvenida/>} />
    <Route path='/carrito' element={<Cart/>} />
    <Route path='/productos' element={<ListadoProductos/>}/>
    <Route path="/producto/:id" element={<ProductoDetalle />} />
    <Route path='/contacto' element={<FormularioContainer/>}/>
    </Route>
   </Routes>   
  );
}

export default App;