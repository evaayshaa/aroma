import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductThunk } from '../../redux/reducers/productSlice'
import { postBasketThunk } from '../../redux/reducers/basketSlice'
import styles from './Products.module.scss'

const Products = () => {

  const dispatch=useDispatch()
  const {product}=useSelector(state =>state.product)
 useEffect(() => {
  dispatch(getProductThunk())
 
 }, [])
  return (
    <div  className={styles.cards}>
     {product&& product.map(item=>
      <div className={styles.card}>
        <p>{item.title}</p>
        <img src={item.thumbnail} alt="" />
        <p>{item.price}</p>
        <button onClick={() => dispatch(postBasketThunk(item))}>Add Basket</button>
        
      </div>
     
     )}
     fskdnjcdsk
    </div>
    
  )
}

export default Products
