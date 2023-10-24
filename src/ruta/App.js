import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../componentes/Layout";
import Contacto from "../componentes/Contacto";
import Producto from "../componentes/Producto";
import Calculadora from "../componentes/Calculadora";
import Login from "../componentes/Login";
import RegistroLogin from "../componentes/RegistroLogin";
import "../css/App.css";

function App() {
  

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/Calculadora" element={<Calculadora />}></Route>
            <Route exact path="/Contacto" element={<Contacto />}></Route>
            <Route exact path="/Producto" element={<Producto />}></Route>
            <Route exact path="/RegistroLogin" element={<RegistroLogin />}></Route>
            <Route exact path="/" element={<Login />}></Route>

          </Routes>
        </Layout>
      </BrowserRouter>

     
    </>
  );
}




export default App;
