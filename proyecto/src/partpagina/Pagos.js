import React from "react";
import stylos from "styled-components";

const Pagos=()=>{
    return(
        <Contenedor>
             <form>
                <Lista>
                    <Li>
                        <label>Nombre de la Tarjeta</label>
                        <Input type="text" id="nombre-tarjeta"/>
                    </Li>
                    <Li>
                        <label>Tipos de Documento</label>
                        <select>
                            <option>C.C</option>
                            <option>C.E</option>
                            <option>CC DIG</option>
                        </select>
                    </Li>
                    <Li>
                        <label>Numero de la Tarjeta</label>
                        <Input type="text" id="numero-tarjeta"/>
                    </Li>
                    <Li>
                        <label>Codigo de Seguridad</label>
                        <Input type="text" id="codigo"/>
                    </Li>
                    <Li>
                        <label>Fecha de Vencimiento</label>
                        <Input type="text" id="mes" placeholder="MM"/>
                        <Input type="text" id="año" placeholder="AA"/>
                    </Li>
                    <Li>
                        <label>Telefono celular</label>
                        <Input type="text" id="telefono"/>
                    </Li>
                    <Li>
                        <Boton type="submit">Pagar</Boton>
                    </Li>
                </Lista>
             </form>
        </Contenedor>
    );
};

export default Pagos;
const Contenedor=stylos.section`
display: flex;
justify-content: center;
`
const Lista=stylos.ul`
    list-style-type: none;
`
const Input = stylos.input`
    display: flex;
  padding: 8px 60px;
  margin: 0 20px;
  justify-content: flex-end;

  
`
const Boton = stylos.button`
  width: 100px;
  height: 50px; 
  padding: 0; 
  text-align: center;
  background-color: #fc8600;
  border: none;
  font-weight: bold;
`
const Li=stylos.li`
display: flex;
justify-content: flex-start;
align-items: 
margin:10px;

`
