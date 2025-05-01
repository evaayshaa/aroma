import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.container}>
            <div className={styles.general}>
               <div className={styles.image}>
                <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png" alt="" />
               </div>
               <div className={styles.info}>
                <h3>Shop is fun</h3>
                <h1>Browse Our Premium Product</h1>
                <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass</p>
                <button>Browse Now</button>
               </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
