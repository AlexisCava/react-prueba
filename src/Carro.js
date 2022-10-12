import React from "react";
import "./style.css";

export default function Carro(props) {
  return (
    <div>
      <h1>Especificaciones! {props.marca}</h1>
      <h1></h1>
      <img src={props.imagen} 
      alt="Imagen del carro de un carro, esto sale cuando no encuentra el carro"
      width="500"
      />
      <p>{props.descripcion}</p>
    
    </div>
  );
}