import React from "react";
import logo from './imagenes/BlackMotorcycle.png'
import stylos from 'styled-components'
import { Link, Outlet } from "react-router-dom";
const Header=()=>{
    return(
        <Seccion>
            <Seccion className="principal">
                <nav>
            <Lista className="header">
                <li><Imagen src={logo} alt="logo"/></li>
                <li><Link1 to="/Inicio">Inicio</Link1></li>
                <li><Link1 to="/Servicio">Servicio</Link1></li>
                <li><Link1 to="/Productos">Productos</Link1></li>
                <li><Link1 to="/Pagos">Pagos</Link1></li>
            </Lista>
            </nav>
            </Seccion>
            <Outlet/>
            
            
        </Seccion>
        
    );
}
export default Header

const Seccion=stylos.section`
    &.principal{
        background-color: #fc8600;
    }
    
`
const Lista=stylos.ul`
    &.header{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        align-items: center;
    }
`
const Imagen=stylos.img`
    width: 150px;
    height: 150px;
`
const Link1=stylos(Link)`
    text-decoration: none;
    font-weight: bold;
    color: #000000;
`