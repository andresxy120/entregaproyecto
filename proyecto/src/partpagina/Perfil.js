import React from "react";
import stylos from "styled-components";

import perfil1 from "./imgperfil/perfil1.jpg";
import perfil2 from "./imgperfil/perfil2.jpg";
import perfil3 from "./imgperfil/perfil3.jpg";
import perfil4 from "./imgperfil/perfil4.jpg";

const Perfil=()=>{
    return(
        
        <Contenedor>
                <Listas className="principal">
                    <Li>
                        <Listas className="constenido">
                            <Li><Foto className="constenido" src={perfil1}/></Li>
                            <Li>
                                <Titulo>JUAN DAVID GONZALES</Titulo>
                                <Subtitulo>
                                Tecnico Especializado
                                </Subtitulo>
                                <Parrafo>
                                3 años de experiencia en la profesion, sus funciones como Tecnico son:
                                <Listas className="central">
                                <li>Mantenimiento preventivo y correctivo de motocicletas.</li>
                                <li>Diagnóstico de problemas mecánicos y eléctricos.</li>
                                <li>Reparación de sistemas de frenos, suspensión, transmisión y motor.</li>
                                <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                                </Listas>
                            </Parrafo>
                            </Li>
                        </Listas>
                    </Li>
                    <Li>
                        <Contenedor className="diseño">
                        <Listas className="constenido">
                            <Li><Foto className="constenido" src={perfil2}/></Li>
                            <Li> <Titulo>CARLOS SALDARRIAGA MARTINEZ</Titulo>
                        <Subtitulo>
                        Tecnico Especializado
                        </Subtitulo>
                        <Parrafo>
                        4 años de experiencia en la profesion, sus funciones como Tecnico son:
                        <Listas className="central">
                            <li>Conocimiento de sistemas de encendido y electricidad de motocicletas.</li>
                            <li>Montaje y equilibrado de neumáticos.</li>
                            <li>Inspección y mantenimiento de sistemas de escape.</li>
                            <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                        </Listas>
                        </Parrafo>
                        </Li>
                        </Listas>
                        </Contenedor>
                    </Li>
                    <Li>
                        <Listas className="constenido">
                            <Li><Foto className="constenido" src={perfil3}/></Li>
                            <Li><Titulo>MANUEL URRUTIA RESTREPO</Titulo>
                            <Subtitulo>
                             Tecnico Especializado
                            </Subtitulo>
                            <Parrafo>
                            2 años de experiencia en la profesion, sus funciones como Tecnico son:
                            <Listas className="central">
                            <li>Uso de herramientas y equipos de diagnóstico.</li>
                            <li>Montaje y equilibrado de neumáticos.</li>
                            <li>Inspección y mantenimiento de sistemas de escape.</li>
                            <li>Cumplimiento de estándares de seguridad en la reparación.</li>
                            </Listas>
                            </Parrafo>
                            </Li>
                        </Listas>
                    </Li>
                    <Li>
                        <Contenedor className="diseño">
                        <Listas className="constenido">
                            <Li><Foto className="constenido" src={perfil4}/></Li>
                            <Li><Titulo>ANDRES FELIPE USUGA</Titulo>
                            <Subtitulo>
                            Tecnico Especializado
                            </Subtitulo>
                            <Parrafo>
                            5 años de experiencia en la profesion, sus funciones como Tecnico son:
                            <Listas className="central">
                            <li>Conocimiento de sistemas de encendido y electricidad de motocicletas.</li>
                            <li>Mantenimiento preventivo y correctivo de motocicletas.</li>
                            <li>Diagnóstico de problemas mecánicos y eléctricos.</li>
                            <li>Ajuste y sincronización de carburadores e inyección electrónica.</li>
                            </Listas>
                            </Parrafo>
                            </Li>
                        </Listas>
                        </Contenedor>
                    </Li>
                </Listas>
            </Contenedor>
    );
}
export default Perfil;
const Contenedor=stylos.section`
    display: flex;
    justify-content: center;
    &.diseño{
        background-color: #f9cd94;
    }

`
const Titulo=stylos.h2`
`
const Subtitulo=stylos.h3`
`

const Parrafo=stylos.p`
    text-align: left;
`
const Foto=stylos.img`
    &.constenido{
        width: 600px;
        height: 500px;
    }
`
const Listas=stylos.ul`
    list-style-type: none;
    &.constenido{
        flex-direction: row;
        display: flex;
        align-items: center;
    }
    &.central{
        list-style-type: disc;
    }
`
const Li = stylos.li`
    margin: 20px 10px;
`

