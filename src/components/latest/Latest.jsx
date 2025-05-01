import React from 'react'
import styles from './Latest.module.scss'

const Latest = () => {
  return (
    <div className={styles.latest}>
        <div className={styles.container}>
            <div className={styles.info}>
                <p>Popular Item in the market</p>
                <h1>Latest News</h1>
            </div>

            <div className={styles.cards}>
                <div className={styles.card}>
                  
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png" alt="" />
                    <p>By Admin <span> 2 comments</span></p>
                    <h3>The Richland Center Shopping <br />  News and weekly shooper</h3>
                    <p>Let one fifth i bring fly to divided face for <br /> bearing divide unto seed. Winged divided light Forth.</p>
                    <p>Read More</p>

                </div>
                <div className={styles.card}>
                    
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png" alt="" />
                    <p>By Admin <span> 2 comments</span></p>
                    <h3>The Richland Center Shopping <br /> News and weekly shooper</h3>
                    <p>Let one fifth i bring fly to divided face for  <br />bearing divide unto seed. Winged divided light Forth.</p>
                    <p>Read More</p>

                </div>
                <div className={styles.card}>
                   
                    <img src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png" alt="" />
                    <p>By Admin <span> 2 comments</span></p>
                    <h3>The Richland Center Shopping <br />  News and weekly shooper</h3>
                    <p>Let one fifth i bring fly to divided face for <br />bearing divide unto seed. Winged divided light Forth.</p>
                    <p>Read More</p>

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Latest
