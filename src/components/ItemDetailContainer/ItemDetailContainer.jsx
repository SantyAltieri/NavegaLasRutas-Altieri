import React from 'react'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useNavigate, useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        getProductsById(id).then( res => setProducto(res))
    }, [id])

  return (
  <>
        <ItemDetail producto ={producto} />
        </>
  )
}

export default ItemDetailContainer