import React from 'react'
import styles from './Winter.module.scss'

const Winter = () => {
  return (
    <div className={styles.winter}>
        <div className={styles.container}>
            
            
              <div className={styles.info}>
                <p>Popular Item in the market</p>
                <h1>Best Sellers</h1>
              </div>


              <div className={styles.cards}>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product1.png" alt="" />
                    <p>Accesories</p>
                    <h3>Quartz Belt Watch</h3>
                    <p>$153</p>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png" alt="" />
                    <p>Accesories</p>
                    <h3>Quartz Belt Watch</h3>
                    <p>$153</p>
                </div>
                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png" alt="" />
                    <p>Accesories</p>
                    <h3>Quartz Belt Watch</h3>
                    <p>$153</p>
                </div>

                <div className={styles.card}>
                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png" alt="" />
                    <p>Accesories</p>
                    <h3>Quartz Belt Watch</h3>
                    <p>$153</p>
                </div>
              </div>
            </div>
        </div>
      
  
  )
}

export default Winter
