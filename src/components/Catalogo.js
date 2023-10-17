import React, { useEffect, useState } from 'react'
import Producto from './Producto'

const url=process.env.REACT_APP_API_URL;

const Catalogo = () => {

  const [catalogo, setCatalogo] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch(url)
      .then(response => response.ok ? response.text() : Promise.reject(response))
      .then(res => {
          res=JSON.parse(res.substring(47,res.length-2));
          setCatalogo(res.table.rows);
      })},[])

  const obtenerBusqueda=(valor)=>{
    setBusqueda(valor.target.value);
  }

let result=[];  
if(!busqueda){
  result=catalogo;
}else{
  result=catalogo.filter((element)=>{
    if(element.c[1].v.toString().includes(busqueda.toString()) || element.c[2].v.toLowerCase().includes(busqueda.toLowerCase())){
      return element;
    }else return null
   });
}


  return (
      <>
        <input type='text' className='buscador' name='buscador' value={busqueda} onChange={obtenerBusqueda} placeholder='Buscar por nombre o código'></input>
        <div className='catalogo'>
          {
            result.length === 0 ? console.log("array vacío") : (
            result.map(element => {
              return element.c[5].v > 0 && (<Producto key={element.c[1].v} id={element.c[1].v} name={element.c[2].v} description={element.c[3].v} price={element.c[4].f} foto={element.c[6].v} />)       
            })) 
          }
        </div>
    </>
  )
}

export default Catalogo


