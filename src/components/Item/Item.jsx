import React from 'react';
import { Link, NavLink } from "react-router-dom";
import '../Item/Item.css';

const Item = ({product}) => {
  return (
    <div className='itemDiv'>
        <br></br>
        <h3>{product.name}</h3>
        <i>{product.description}</i>
        <img src= {product.img} widht="400" height="200"/>
        <Link to={`/producto/${product.id}`}>Ver detalles</Link>                
    </div>
  )
}

export default Item