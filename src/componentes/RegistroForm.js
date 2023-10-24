import React, { useState } from "react";
import RegistroLogin from "./RegistroLogin";
export default function RegistroForm() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleRegister = (formData) => {
    // Agrega lógica para manejar el registro del usuario aquí
    setRegisteredUsers([...registeredUsers, formData]);
    console.log({formData})
  };
  return (
    <>
      <div>
        <h1>Registro de Usuarios</h1>
        <RegistroLogin onRegister={handleRegister} />
      </div>
    </>
  );
}
