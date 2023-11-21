import React from "react";
import stylos from "styled-components";

import noticia1 from "./imgnoticia/honda.jpg"
import noticia2 from "./imgnoticia/horario-de-atencion2.jpg"
import noticia3 from "./imgnoticia/images.jpg"
import noticia4 from "./imgnoticia/manzana.jpg"
import noticia5 from "./imgnoticia/mecanico-motos.jpg"

const Noticias=()=>{
    return(
        <Contenedor className="principal">
            <Listas>
                <Li>
                <Contenedor className="noticia">
                <Imagenes src={noticia1}/>
                <Fechas>03/11/2023</Fechas>
                <Titulo>Llegaron los nuevas <br/>pasta de frenos de honda</Titulo>
                </Contenedor>
                </Li>
            
                <Li>
                <Contenedor className="noticia">
                <Imagenes src={noticia2}/>
                <Fechas>29/10/2023</Fechas>
                <Titulo>Los lunes festivos se <br/>presta atencion de las 8:00 am a 2:00pm </Titulo>
                </Contenedor>
                </Li>
            
                <Li>
                <Contenedor className="noticia">
                <Imagenes src={noticia3}/>
                <Fechas>25/10/2023</Fechas>
                <Titulo>5% de Descuentos en acite para motos</Titulo>
                </Contenedor>
                </Li>
            </Listas>
            <Listas>
                <Li><Contenedor className="noticia">
                <Imagenes src={noticia4}/>
                <Fechas>22/10/2023</Fechas>
                <Titulo>10% en Descuentos en manzana de closh</Titulo>
                </Contenedor>
                </Li>
            
                <Li>
                <Contenedor className="noticia">
                <Imagenes src={noticia5}/>
                <Fechas>15/10/2023</Fechas>
                <Titulo>Por la compra de acite <br/>para motos el cambio es gratis</Titulo>
                </Contenedor>
                </Li>
            
            </Listas>
                
            
            
        </Contenedor>
    );
};
export default Noticias;
const Contenedor=stylos.section`
    
    &.principal{
        background-color: #cdcdcd;
    }
    &.noticia{
        background-color: #f9cd94;
        width: 500px;
        height: 500px;
        aling-items: center;
    }
    
`

const Imagenes=stylos.img`
    width: 400px;
    height: 300px;
    margin: 30px;
`
const Titulo=stylos.h1`
    font-size: 20px;
    text-align: justify;
    text-align: center;
`
const Fechas=stylos.h5`
`
const Li = stylos.li`
    margin: 20px 0;
`
const Listas = stylos.ul`
    display: flex;
    list-style-type: none;
    flex-direction: row;
    justify-content: space-around;
`