import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contacto.css";
export default function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //(id_formulario, id_template, id_cuenta)
    emailjs
      .sendForm(
        "service_jjvsz7m",
        "template_8y4lo19",
        form.current,
        "AyMEx9lMOL0qsQ3pH"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="contacto-texto">
          <p className="contacto-texto-p">
            ¡Gracias por explorar mi aplicación web creada con{" "}
            <strong>React.js</strong>! Si tienes alguna pregunta, sugerencia o
            simplemente quieres saludar, ¡no dudes en hacerlo!
          </p>
        </div>
        <div className="formulario-presentacion">
          <div className="formulario-texto">
            Contacto a través de Email En nuestra aplicación web, puedes ponerte en contacto conmigo de forma rápida y
            sencilla a través del correo electrónico. Valor tu opinión,
            preguntas y sugerencias, y estamos ansioso por escucharte.
          </div>
          <form ref={form} onSubmit={sendEmail} className="field">
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  );
}
