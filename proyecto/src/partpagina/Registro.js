import React from "react";
import stylos from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import {db} from "./firebase/firebase-config";

const Registro=()=>{
    const handleSubmit = async (e) => {
        e.preventDefault();
        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const opinion = e.target.opinion.value;
        try {
          // Agregar un documento a la colección "usuarios" en Firestore
          await addDoc(collection(db, 'usuarios'), {
            nombre,
            email,
            opinion,
          });
          // Limpia los campos después de enviar los datos
          e.target.nombre.value = '';
          e.target.email.value = '';
          e.target.opinion.value = '';

          console.log('Datos enviados a Firestore correctamente');
        } catch (error) {
          console.error('Error al enviar datos a Firestore:', error);
        }
      };
    return(
        <Contenedor>
      <form onSubmit={handleSubmit}>
        <Lista>
          <Li>
            <Input type="text" name="nombre" placeholder="Ingrese tu nombre completo" />
          </Li>
          <Li>
            <Input type="text" name="email" placeholder="Ingrese tu correo electrónico" />
          </Li>
          
          <Li>
            <Textarea className="opinion" name="opinion" placeholder="Escribe tu opinión aquí..." required></Textarea>
          </Li>
          <Li className="opinion">
            <Boton type="submit">Enviar</Boton>
          </Li>
          
          
        </Lista>
      </form>
    </Contenedor>
    );
}
export default Registro;
const Contenedor=stylos.section`
  
`
const Lista=stylos.ul`
  list-style-type: none;
  
`
const Input = stylos.input`
  padding: 8px 60px;
  
`
const Li = stylos.li`
  
  margin: 10px 0;
  &.opinion{
    margin-left: 200px;
  }
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
const Textarea=stylos.textarea`
  &.opinion{
    padding: 60px;
    text-align: left;
  }
`


