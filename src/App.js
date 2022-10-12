import React from "react";
import "./style.css";
import Carro from "./Carro.js";
import Moto from "./Moto.js";


export default function App() {
  return (
    <div>
      <h1>Vehiculos!</h1>
      <p>Este es tu nuevo Carro ----------- ;-;</p>
      <Carro marca="Corvette C6" 
      imagen="https://s3-us-west-2.amazonaws.com/my-car-mexico/modelos/8b9b5c39/featured_image.png" 
      descripcion="8 Cilindros"
      />
      <Carro marca="Chevrolet 1-160" />
      <Moto/>
    </div>
  );
}
