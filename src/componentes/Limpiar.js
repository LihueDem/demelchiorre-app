import React from 'react'
import"../css/Limpiar.css";

const Limpiar = (props) => (
   <div className='boton-clear' onClick={props.handleClick}>
    {props.children}
   </div>
);

export default Limpiar;