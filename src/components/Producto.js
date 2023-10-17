//import React from 'react'

import { useState } from "react"

const Producto = (props) => {
  const waNumber=process.env.REACT_APP_WHATSAPP_NUMBER;
  const [estado, setEstado] = useState(false);  

  function getDescription(){
    setEstado(!estado);
  }

  return estado ? (
  <div className="producto">
    <div className="producto-body" onClick={getDescription}>
      <h3>{props.name}</h3>
      <p className="description">{props.description}</p>
      <div className="producto-footer">
          <strong onClick={getDescription}>{props.price}</strong>
          <a href={"https://api.whatsapp.com/send?phone="+waNumber+"&text=Hola, me interesa el producto *"+props.name+"*, código *"+props.id+"*"}><button>Ordenar</button></a>
        </div>
    </div>
</div>) : (
    <div className="producto">
      <img src={props.foto} onClick={getDescription} alt="product" />
      <div className="producto-body">
      <p onClick={getDescription}>{props.id}</p>
        <h3 onClick={getDescription}>{props.name}</h3>
        <div className="producto-footer">
          <strong onClick={getDescription}>{props.price}</strong>
          <a href={"https://api.whatsapp.com/send?phone="+waNumber+"&text=Hola, me interesa el producto *"+props.name+"*, código *"+props.id+"*"}><button>Ordenar</button></a>
        </div>
      </div>
    </div>
  )
}


export default Producto