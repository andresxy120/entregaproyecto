import React from "react";
import stilos from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from "react-router-dom";
import { addObjectToArray, increment, decrement,updateTotal,eliminarProducto } from './feauters/arraySlice';

  const Carrito = () => {
    const unidades = useSelector((state) => state.guardar.guardado);
    const dispatch = useDispatch();
    const handleIncrement = (id) => {
      dispatch(increment({ id }));
      dispatch(updateTotal({ id }));
    };
  
    const handleDecrement = (id) => {
      dispatch(decrement({ id }));
      dispatch(updateTotal({ id }));
    };
    const obtenerSumaTotales = () => {
      return unidades.reduce((total, unidades) => total + unidades.total, 0);
    };
  
    const sumaTotales = obtenerSumaTotales();

    const handleEliminarProducto = (id) => {
      dispatch(eliminarProducto({ id }));
    };
    return (
      <Contenedor className="principal">
        {unidades.map((producto) => (
          <Contenedor className="producto" key={producto.id}>
          <Imagenes className="producto"src={producto.imagen} alt="" />
          <Subtitulo>{producto.titulo}</Subtitulo>
          <Parrafo>Precio: ${producto.precio}</Parrafo>
          <Contenedor>
            <Boton onClick={() => handleIncrement(producto.id)}>+</Boton>
            <span> {producto.cantidad} </span>
            <Boton onClick={() => handleDecrement(producto.id)}>-</Boton>
          </Contenedor>
          <Boton onClick={()=> handleEliminarProducto(producto.id)}>Eliminar</Boton>
          <p>Total: ${producto.total}</p>
        </Contenedor>
        ))}
        <Contenedor>
          <Parrafo>Total de la compra: ${sumaTotales}</Parrafo>
          <Boton><Link1 to="/Pagos">Pagos</Link1></Boton>
          <Outlet/>
        </Contenedor>
      </Contenedor>
    );
  };
  
  export default Carrito;

const Contenedor=stilos.section`
  &.principal{
    display: flex;
    justify-content: center;
  }
`
const Titulo=stilos.h1`
`
const Parrafo=stilos.p`
  font-size: 30px;
`
const Lista=stilos.ul`
`
const Imagenes=stilos.img`
  &.producto{
    width: 200px;
    height: 200px;
  }
`
const Subtitulo=stilos.h2`
`
const Boton=stilos.button`
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
