import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])

  const { category } = useParams()

  useEffect(() => {
     category ? 
    getProductsByCategory (category).then(response => {
          setProducts(response)
        }):
        getProducts() .then (response => {
          setProducts(response)
        })
  }, [category])

  return (
    <ItemList products = {products}/>
  )
}

export default ItemListContainer