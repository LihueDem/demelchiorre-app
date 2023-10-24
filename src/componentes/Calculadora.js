import { useState } from "react";
import { evaluate } from "mathjs";
import "../css/Calculadora.css";
import Boton from "../componentes/Boton";
import Display from "../componentes/Display";
import Limpiar from "../componentes/Limpiar";
import TituloCalculadora from "./Presentacion";
export default function Calculadora() {

  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los calculos");
    }
  };


  return (
    <>
    
      <TituloCalculadora></TituloCalculadora>
      <div className="App">
        <div className="calculadora">
          <Display input={input} />

          <div className="calculadora-fila">
            <Boton handleClick={agregarInput}>1</Boton>
            <Boton handleClick={agregarInput}>2</Boton>
            <Boton handleClick={agregarInput}>3</Boton>
            <Boton handleClick={agregarInput}>+</Boton>
          </div>
          <div className="calculadora-fila">
            <Boton handleClick={agregarInput}>4</Boton>
            <Boton handleClick={agregarInput}>5</Boton>
            <Boton handleClick={agregarInput}>6</Boton>
            <Boton handleClick={agregarInput}>-</Boton>
          </div>
          <div className="calculadora-fila">
            <Boton handleClick={agregarInput}>7</Boton>
            <Boton handleClick={agregarInput}>8</Boton>
            <Boton handleClick={agregarInput}>9</Boton>
            <Boton handleClick={agregarInput}>*</Boton>
          </div>
          <div className="calculadora-fila">
            <Boton handleClick={calcularResultado}>=</Boton>
            <Boton handleClick={agregarInput}>0</Boton>
            <Boton handleClick={agregarInput}>.</Boton>
            <Boton handleClick={agregarInput}>/</Boton>
          </div>
          <div className="calculadora-fila">
            <Limpiar handleClick={() => setInput("")}>Clear</Limpiar>
          </div>
        </div>
      </div>
    </>
  );
}
