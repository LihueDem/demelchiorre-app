import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
export default function Header() {
  return (
    <>
      <header className="header">
          <ul className="header-ul">
          {/* <li>
            <Link to="/" className="link">Iniciar Sesion</Link>
            </li> */}
            <li>
            <Link to="/Login" className="link">Inicio</Link>
            </li>
            <li>
            <Link to="/calculadora" className="link">Calculadora</Link>
            </li>
            <li>
              <Link to="/producto" className="link">Producto</Link>
            </li>
            <li>
              <Link to="/contacto" className="link">Contacto</Link>
            </li>
            <li>
              <Link to="/RegistroLogin" className="link">Registrarse</Link>
            </li>
          </ul>
      </header>
    </>
  );
}
