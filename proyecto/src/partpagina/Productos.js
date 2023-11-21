import React, { useState } from "react";
import stilos from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {addObjectToArray, increment, decrement, updateTotal} from './feauters/arraySlice'





const Productos = () => {
  const Todos = useSelector((state) => state.cart.producto); 
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
  const dispatch = useDispatch();

  const moveObject = (selectedId) => {
    const selectedObject = Todos.find(producto => producto.id === selectedId);
    if (selectedObject) {
      dispatch(addObjectToArray(selectedObject));
    }
  };

  const productosFiltrados = categoriaSeleccionada === 'todos' ? Todos : Todos.filter(producto => producto.categoria === categoriaSeleccionada);
  return (
    <Contenedor className="principal1">
      <Titulo>Productos Disponibles</Titulo>
      <Contenedor className="principal">
      <Contenedor>
        <nav>
          <Lista>
            <li><Boton onClick={() => setCategoriaSeleccionada('todos')}>Todos</Boton></li>
            <li><Boton onClick={() => setCategoriaSeleccionada('motor')}>Motor</Boton></li>
            <li><Boton onClick={() => setCategoriaSeleccionada('accesorios')}>Accesorios</Boton></li>
            <li><Boton onClick={() => setCategoriaSeleccionada('exterior')}>Exterior</Boton></li>
            <li><Boton onClick={() => setCategoriaSeleccionada('diseño')}>Diseño</Boton></li>
            <li><Boton><Link1 to="/Carrito">carrito</Link1></Boton></li>
          </Lista>
        </nav>
        <Outlet/>
      </Contenedor>
      
      <Contenedor className="productos-list">
        {productosFiltrados.map((producto) => (
          <Contenedor className="producto" key={producto.id}>
            <Imagenes className="producto" src={producto.imagen} alt="" />
            <Subtitulo>{producto.titulo}</Subtitulo>
            <Parrafo>Precio: ${producto.precio}</Parrafo>
            <Boton onClick={()=>moveObject(producto.id)}>Agregar al Carrito</Boton>
          </Contenedor>
        ))}
      </Contenedor>
     
    </Contenedor>
    </Contenedor>
  );
}

export default Productos;

const Contenedor = stilos.section`
    &.principal{
      display: flex;
      justify-content: center;
    }
    &.productos-list{
      margin: 0 20px;
    }
    &.principal1{
      background-color: #ffdbad;
    }
`
const Titulo = stilos.h1`
`
const Parrafo = stilos.p`
`
const Lista = stilos.ul`
  list-style-type: none;
`
const Imagenes = stilos.img`
    &.producto{
      width: 200px;
      height: 200px;
    }
`
const Subtitulo = stilos.h2`
`
const Boton = stilos.button`
  width: 100px;
  height: 50px; 
  padding: 0; 
  text-align: center;
  background-color: #fc8600;
  border: none;
  font-weight: bold;
`
const Link1 = stilos(Link)
 `
    text-decoration: none;
    color: #000000;
 `

