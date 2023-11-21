import React from "react";
import styled from "styled-components"
import fondo from './imagenes/fondomoto.jpg'
import imgportada from './imagenes/piloto.jpg'
import imgportada1 from './imagenes//lampara-faro.jpg'
import icono1 from './imagenes/localizacion.png'
import icono2 from './imagenes/moto.png'
import icono3 from './imagenes/trabajo-en-equipo.png'
import foto1 from './imagenes/imagen-muestra-motocicleta-ducati-negra-naranja.jpg'
import foto2 from './imagenes/foto-motocicleta-retro-hecha-medida-contra-rascacielos.jpg'
import foto3 from './imagenes/motocicleta-gris-negra-casco-rojo.jpg'
import galeria1 from './imagenes/galeria 1.jpg'
import galeria2 from './imagenes/galeria 2.jpg'
import galeria3 from './imagenes/galeria 3.jpg'
import galeria4 from './imagenes/galeria 4.jpg'
import galeria5 from './imagenes/galeria 5.jpg'
import galeria6 from './imagenes/galeria 6.jpg'
import icono4 from './imagenes/hablar-burbuja.png'
import icono5 from './imagenes/llamada-telefonica.png'
import icono6 from './imagenes/correo-electronico.png'
import { Link, Outlet } from "react-router-dom";
import "./Inicio.css";
const Inicio=()=>{
    return(
       
        <Contenedor className="principal">
            <Contenedor className="portada">
            <Titulos className="portada">SERVICIO COMPLETO DE MOTOCICLETAS</Titulos>
                <Parrafo className="portada">Como propietario de una motocicleta, es su deber legal asegurarse de que <br/> esté en condiciones de circular y no represente un peligro para usted,<br/> los pasajeros, otros usuarios de la vía o el público en general.</Parrafo>
            </Contenedor>
            <Contenedor className="introduccion">
                <Listas>
                <li><Imagenes className="introduccion" src={imgportada} alt=""/></li>
                <li><Titulos className="introduccion">Hemos ampliado <br/>nuestros <br/><b>servicios para</b><br/><b>incluir</b> <br/> almacenamiento <br/>de <br/>motocicletas</Titulos></li>
                <li><Imagenes className="introduccion1" src={imgportada1} alt=""/>
                <p>Hace casi 20 años, nos dimos cuenta de que no <br/>existía una  asistencia en carretera segura <br/> diseñada únicamente para motocicletas. Después <br/> de haber visto demasiadas bicicletas encadenadas, <br/> peligrosamente, a las barras de remolque de las <br/> grúas regulares, y una extensa investigación de <br/>mercado, comenzamos nuestra empresa ...</p></li>
                </Listas>
            </Contenedor>
            <Contenedor className="contenido">
                <Listas className="contenido">
                    <Li>
                    <Titulos className="contenido"><b>Servicios</b> de coches de alquiler </Titulos>
                    <Parrafo className="portada">Encuentre la mejor tarifa de coche de alquiler <br/> posible. Compare tarifas en todo el mundo y ahorre hasta un 60% en ofertas de más de 1.053 empresas de alquiler de coches.</Parrafo>
                    </Li>
                    <Li><Imagenes className="iconos" src={icono1} alt="icono1"/>
                    <Subtitulo className="contenido">UBICACION</Subtitulo>
                    </Li>
                    <Li><Imagenes className="iconos" src={icono2} alt="icono2"/>
                    <Subtitulo className="contenido">20+MOTOCICLETAS</Subtitulo>
                    </Li>
                    <Li>
                    <Imagenes className="iconos" src={icono3} alt="icono3"/>
                    <Subtitulo className="contenido">USUARIOS FELICES</Subtitulo>
                    </Li>
                </Listas>
            </Contenedor>
            <Contenedor className="foto">
                <Listas>
                    <Li className="fotoscentral">
                    <Imagenes className="Foto1" src={foto1} alt="foto1"/>
                    </Li>
                    <Li className="fotoscentral">
                    <Imagenes className="Foto" src={foto2} alt="foto2"/>
                    <Imagenes className="Foto" src={foto3} alt="foto3"/>
                    </Li>
                </Listas>
            </Contenedor>
            <Contenedor className="galeria">
                <h1>Nuestra <b>Galería</b></h1>
                <Listas className="centrar">
                    <li><Imagenes className="galeria" src={galeria1} alt="galeria1"/></li>
                    <li><Imagenes className="galeria" src={galeria2} alt="galeria2"/></li>
                    <li><Imagenes className="galeria" src={galeria3} alt="galeria3"/></li>
                </Listas>
                <Listas className="centrar">
                    <li><Imagenes className="galeria" src={galeria4} alt="galeria4"/></li>
                    <li><Imagenes className="galeria" src={galeria5} alt="galeria5"/></li>
                    <li><Imagenes className="galeria" src={galeria6} alt="galeria6"/></li>
                </Listas>
                
                <Boton><Link1 to="/Noticias">Noticias</Link1></Boton>
                
                <Outlet/>
            </Contenedor>
            <Contenedor className="iconos">
                <h1>Contáctenos</h1>
                <Listas>
                    <li><Imagenes className="iconos" src={icono4} alt="icono4"/>
                        <h1>Habla a</h1>
                        <h2>27 13 Lowe Haven</h2>
                    </li>
                    <li>
                        <Imagenes className="iconos" src={icono5} alt="icono5"/>
                        <h1>teléfono</h1>
                        <h2>111 343 43 43</h2>
                    </li>
                    <li>
                        <Imagenes className="iconos" src={icono6} alt="icono6"/>
                        <h1>correo electrónico</h1>
                        <h2>business@info.com</h2>
                    </li>
                </Listas>
            </Contenedor>
        </Contenedor>
        
    )
}
export default Inicio;

const Contenedor = styled.section`
    

    &.portada{
        margin: 40px 0;
        background-image: url(${fondo});
        background-size: cover; /* Ajusta la imagen al tamaño del contenedor */
        background-repeat: no-repeat; /* Evita la repetición de la imagen */
        background-position: center center;
        padding: 300px 0;
    }
    &.contenido{
        background-color: #000000;
    }
    &.ladoizquierda{
        display: flex;
        justify-content: flex-start;
        margin: 0; 
        padding: 0;
    }
    &.ladoderecho{
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        padding: 0;
        margin: 0; 
        
    }
    &.foto{
        flex-direction: row;
    }
    &.galeria{
        margin:0;
        padding 0;
    }
    &.centrar{
        margin:0;
        padding 0;
    }
    &.iconos{
        background-color: #fc8600;
    }
   
`
const Titulos=styled.h1`
    &.portada{
        font-size: 70px;
        color: #FFFFFF;
    }
    &.contenido{
        font-size: 40px;
        color: #FFFFFF;
        text-align: left;
    }
    &.introduccion{
        font-size: 30px;
    }
`
const Subtitulo=styled.h2`
    &.contenido{
        font-size: 15px;
        color: #FFFFFF;
    }
`
const Parrafo=styled.p`
    &.portada{
        color: #FFFFFF;
        font-size: 25px;
        text-align: center;
    }
`
const Listas=styled.ul
`   
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    &.contenido{
        align-items: center;
    }
    
`
const Li=styled.li`
    margin:10px;
    &.fotoscentral{
        margin:0;
        padding 0;
    }
`
const Imagenes=styled.img`
    &.introduccion{
        width: 300px;
        height: 500px;
    }
    &.introduccion1{
        width: 400px;
        height: 300px;
    }
    &.Foto1{
        width: 800px;
        height: 1000px;
    }
    &.Foto{
        width: 800px;
        height: 500px;
    }
    &.iconos{
        width: 90px;
        height: 90px;
    }
    &.galeria{
        width: 500px;
        height: 500px;
    }
`
 const Boton=styled.button`
    width: 300px;
    height: 70px; 
    padding: 0; 
    text-align: center;
    background-color: #fc8600;
    border: none;
    font-weight: bold;
    
 `
 const Link1 =styled(Link)`
    text-decoration: none;
    color: #000000;
 `

