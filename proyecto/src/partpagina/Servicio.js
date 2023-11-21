import React from "react";
import apariencia from "styled-components";
import { Link, Outlet } from "react-router-dom";
import imagene from './imgservicio/tecnico.jpg';
import seguridad from './imgservicio/seguridad.jpg';
import mantener from './imgservicio/mantenimiento.jpg';
import imagen1 from './imgservicio/reparo1.jpg';
import imagen2 from './imgservicio/reparo2.jpg';
import imagen3 from './imgservicio/reparo3.jpg';
import logo1 from './imgservicio/Yamaha.png';
import logo2 from './imgservicio/Bajaj.png';
import logo3 from './imgservicio/AKT.png';
import logo4 from './imgservicio/Suzuki.png';
import logo5 from './imgservicio/Honda.png';
import logo6 from './imgservicio/Hero.png';
import icono1 from './imgservicio/iconousua1.png';
import icono2 from './imgservicio/iconousua2.png';
import icono3 from './imgservicio/iconousua3.png';
import final from './imgservicio/usuariofinal.jpg';
import Registro from './Registro';

const Servicio = () => {
  return (
    <ContenedorPrincipal className="principal">
      <Contenedor className="introduccion">
        <Lista>
          <li>
            <Titulo className="introduccion">Servicio complejo para su motocicleta</Titulo>
            <Parrafo className="introduccion">
              Nuestros asesores de motocicleta de fácil contacto le <br />
              explicarán cualquier mantenimiento o reparación <br />
              sugeridos. No tomarán ninguna medida a menos que las <br />
              apruebe primero. Nuestros técnicos de motocicleta<br />
              certificados por ASE están cuidando su motocicleta y su <br />
              presupuesto.
            </Parrafo>
          </li>
          <li>
            <Imagenes className="introduccion" src={imagene} alt="imagen1" />
          </li>
        </Lista>

        <Titulo className="introduccion1">
          Una lista de verificación para preparar su motocicleta para un largo viaje por carretera
        </Titulo>
        <Lista >
          <li>
            <Imagenes className="introcontenido" src={mantener} alt="imagen2" />
            <Subtitulo className="introcontenido" >Mantenimiento general</Subtitulo>
            <Parrafo className="introcontenido">
              -Verifica el manual del propietario de tu motocicleta para conocer los intervalos de
              <br /> mantenimiento recomendados y asegúrate de que todo esté al día.
              -Realiza un cambio de aceite y filtros si es necesario.
              -Asegúrate de que los frenos estén en buen estado y ajusta las pastillas <br />
              o tambores si es necesario.
              -Comprueba el estado de la cadena, la tensión y la lubricación.
              -Revisa el sistema de escape en busca de fugas o daños.
              -Asegúrate de que los neumáticos estén en buen estado y con la presión <br />
              adecuada. Lleva una llanta de repuesto y las herramientas necesarias para cambiarla si <br />
              es posible.
            </Parrafo>
          </li>
          <li>
            <Imagenes className="introcontenido" src={seguridad} alt="imagen3" />
            <Subtitulo className="introcontenido" >Seguridad y visibilidad</Subtitulo>
            <Parrafo className="introcontenido">
              -Asegúrate de que todas las luces, incluidos los faros, las luces <br />
              de freno y las luces direccionales, funcionen correctamente.
              -Limpia y ajusta los espejos retrovisores.
              -Asegúrate de tener un chaleco reflectante y elementos reflectantes en tu equipo.
              -Lleva un kit de herramientas básico, una linterna y una navaja multiusos.
            </Parrafo>
          </li>
        </Lista>
      </Contenedor>

      <Contenedor>
        <Titulo className="centrocontenido">¿Por qué elegir nuestro servicio?</Titulo>
        <Parrafo className="centrocontenido">
          La principal ventaja de la cooperación con el centro<br />
          de reparación de motocicleta es la ventajosa relación<br />
          calidad-precio.
        </Parrafo>
        <Titulo className="centrocontenido">Reparacion de motocicleta de alta calidad</Titulo>
        <Lista className="centrocontenido">
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido" src={imagen1} alt="imagen4" />
            <Contenedor className="centrocontenido">
            <Subtitulo>Reparación</Subtitulo>
            <Parrafo>
              La reparación de una motocicleta es un proceso<br />
              fundamental para mantener su seguridad, rendimiento y <br />
              durabilidad a lo largo del tiempo.
            </Parrafo>
            </Contenedor>
            
          </Li>
          <Li className="centrocontenido1">
            <Imagenes  className="centrocontenido" src={imagen2} alt="imagen5" />
            <Contenedor className="centrocontenido">
            <Subtitulo>Cuidado de la motocicleta</Subtitulo>
            <Parrafo>
              El cuidado adecuado de la motocicleta es esencial<br />
              para garantizar su durabilidad, rendimiento y seguridad,<br />
              y para prevenir problemas mecánicos, eléctricos o de<br />
              otro tipo
            </Parrafo></Contenedor>
            
          </Li>
          
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido" src={imagen3} alt="imagen6" />
            <Contenedor className="centrocontenido">
            <Subtitulo>Calidad</Subtitulo>
            <Parrafo>
              nivel de rendimiento, grado de perfección o cumplimiento<br />
              de estándares específicos que se aplican a un servicio.
            </Parrafo>
            </Contenedor>
            
          </Li>
        </Lista>
        <Boton><Link1 to="/Perfil">Perfil de nuestro Equipo</Link1></Boton>
        <Outlet/>
        <Contenedor className="centrocontenido1">
        <Lista>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo1} alt="logo1" />
          </Li>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo2} alt="logo2" />
          </Li>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo3} alt="logo3" />
          </Li>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo4} alt="logo4" />
          </Li>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo5} alt="logo5" />
          </Li>
          <Li className="centrocontenido">
            <Imagenes className="centrocontenido1" src={logo6} alt="logo6" />
          </Li>
        </Lista>
        </Contenedor>
        
      </Contenedor>

      <Contenedor>
        <Titulo className="final">Lo que dicen los clientes</Titulo>
        <Parrafo className="final">
          Valoramos enormemente las relaciones sólidas y hemos visto los beneficios que<br />
          aportan a nuestro negocio. Los comentarios de los clientes son vitales para<br />
          ayudarnos a hacerlo bien.
        </Parrafo>
        <Lista className="final">
          <li>
            <Contenedor className="final">
              <Imagenes className="final" src={icono1} alt="icono1" />
              <Parrafo>
                El servicio en este taller de motocicletas <br />
                es excepcional! Llevo mi moto allí desde<br />
                hace años y nunca me han decepcionado.<br />
                Siempre son rápidos, amables y tienen precios<br />
                justos.
              </Parrafo>
              <Subtitulo>María123</Subtitulo>
            </Contenedor>
          </li>
          <li>
            <Contenedor className="final">
              <Imagenes className="final" src={icono2} alt="icono2" />
              <Parrafo>
                Mi experiencia en este taller ha sido <br />
                mixta. El personal es amable, y han<br />
                realizado un buen trabajo en algunas ocasiones.<br />
                Sin embargo, en otras ocasiones he tenido<br />
                problemas con la duración de las reparaciones.
              </Parrafo>
              <Subtitulo>JuanMoto</Subtitulo>
            </Contenedor>
          </li>
          <li>
            <Contenedor className="final">
              <Imagenes className="final" src={icono3} alt="icono3" />
              <Parrafo>
                No puedo recomendar este taller en absoluto. <br />
                Llevé mi moto para una reparación, <br />
                y después de esperar semanas, me entregaron<br />
                la moto con el mismo problema.
              </Parrafo>
              <Subtitulo>Descontento78</Subtitulo>
            </Contenedor>
          </li>
        </Lista>
        <Contenedor className="final1">
        <Lista>
          <li>
            <Titulo className="final">Envíanos un mensaje</Titulo>
            <Parrafo className="final">Escríbenos tus inquietudes o problemas</Parrafo>
            <Registro/>
          </li>
          <li>
            <Imagenes className="final1"src={final} alt="imagen7" />
          </li>
        </Lista>
        </Contenedor>
        
      </Contenedor>
    </ContenedorPrincipal>
  );
};

export default Servicio;

const ContenedorPrincipal = apariencia.section`
 
`;
const Contenedor = apariencia.section`
  &.final{
    background-color: #f9cd94;
    }

    &.centrocontenido{
      width: 400px;
      height: 300px;
      background-color: #cdcdcd;
    }
    &.introduccion{
      background-color: #fc8600;
    }
    &.centrocontenido1{
      background-color: #ffffff;
    }
    &.final1{
      background-color: #f9cd94;
      }
    `;
const Titulo = apariencia.h1`
  &.introduccion{
    font-size: 60px;
}
  &.introduccion1{
    font-size: 40px;
  }
  &.centrocontenido{
    font-size: 40px;
  }
  &.final{
    color: #ffffff; 
    font-size: 40px;
  }
  
`;
const Parrafo = apariencia.p`
  &.introduccion{
    font-size: 20px;
  }
  &.centrocontenido{
    font-size: 20px;
  }
  &.final{
    color: #ffffff; 
    font-size: 20px;
  }
`;
const Lista = apariencia.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between;
  margin: 90px 0;
  &.final{
    justify-content: space-evenly;
  }
  &.centrocontenido{
    justify-content: center;
  }
  
`;
const Li = apariencia.li`
  display: flex;
  &.centrocontenido{
    flex-direction: column;
  }
  &.centrocontenido1{
    flex-direction: column-reverse;
  }

`
const Imagenes = apariencia.img`
  &.introduccion{
    width: 100%;
    height: 100%;
  }
  &.introcontenido{
    width: 500px;
    height: 500px;
  }
  &.centrocontenido{
    width: 400px;
    height: 300px;
  }
  &.centrocontenido1{
    width: 100px;
    height: 100px;
  }
  &.final{
    width: 200px;
    height: 200px;
  }
  &.final1{
    width: 900px;
    height: 700px;
  }
`;
const Subtitulo = apariencia.h2``;
const Boton=apariencia.button`
    width: 300px;
    height: 70px; 
    padding: 0; 
    text-align: center;
    background-color: #fc8600;
    border: none;
    font-weight: bold;
`

 const Link1 = apariencia(Link)
 `
    text-decoration: none;
    color: #000000;
 `
