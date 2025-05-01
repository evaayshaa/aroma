import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketThunk, getBasketThunk } from '../../redux/reducers/basketSlice'
import styles from './BasketSec.module.scss'

const BasketSec = () => {
    const dispatch =useDispatch()
    const {basket}=useSelector(state=>state.basket)
useEffect(() => {
    dispatch(getBasketThunk())

}, [])
  return (
    <div className={styles.cards
    }>
      {basket&&basket.map(item=>
        <div className={styles.card}>
            <p>{item.title}</p>
            <img src={item.thumbnail} alt="" />
            <p>{item.price}</p>
            <button onClick={()=>dispatch(deleteBasketThunk(item.id))}>Clear</button>

        </div>
      )}
    </div>
  )
}

export default BasketSec
