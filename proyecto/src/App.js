import logo from './logo.svg';
import './App.css';
import Productos from './partpagina/Productos';
import Carrito from './partpagina/Carrito';
import Header from './partpagina/Header'
import Inicio from './partpagina/Inicio';
import Servicio from './partpagina/Servicio';
import Registrar from './partpagina/Registro';
import Noticias from './partpagina/Noticias';
import Perfil from './partpagina/Perfil';
import Pagos from './partpagina/Pagos';
function App() {
  return (
    <section className="App">
      <Routes>
          <Route path='/' element={<Header/>}>
              <Route path='/' element={<Inicio/>}></Route>
              <Route path='Productos' element={<Productos/>}></Route>
              <Route path='Servicio' element={<Servicio/>}></Route>
              <Route path='Carrito' element={<Carrito/>}></Route>
              <Route path='Registrar' element={<Registrar/>}></Route>
              <Route path='Noticias' element={<Noticias/>}></Route>
              <Route path='Perfil' element={<Perfil/>}></Route>
              <Route path='Pagos' element={<Pagos/>}></Route>
              <Route path='*' element={<Inicio/>}></Route>
          </Route>
      </Routes>
    </section>
  );
}

export default App;
