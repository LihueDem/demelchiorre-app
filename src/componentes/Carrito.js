import React from "react";
import '../css/Carrito.css';
import iconoCarrito from "../img/carrito.png";
import iconoVolver from "../img/volver.png";
export default function Carrito() {
  return (
    <>
      <div className="iconos">
        <ul className="iconos-ul">
          <li className="iconos-ul-li">
            <a href="/">
              <img src={iconoVolver} alt="" className="iconoVolver" />
            </a>
          </li>
          <li className="iconos-ul-li">
            <a href="/">
              <img src={iconoCarrito} alt="" className="iconoCarrito" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
