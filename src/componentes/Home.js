import React from "react";
import "../css/Home.css";
import Login from "./Login";

export default function Home() {
  return (
    <>
      <div className="titulo">
        <h1>Iniciar Sesión</h1>
      </div>
      <div className="componente">
        <Login />
      </div>
    </>
  );
}
