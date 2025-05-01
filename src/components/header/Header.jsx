import React from 'react'
import styles from './Header.module.scss'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  return (
    <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.genereal}>
            <div className={styles.logo}>
                <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="" />
            </div>
            
            <div className={styles.navbar}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/basket">Basket</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                </ul>
            </div>

            <div className={styles.icon}>
            <FaMagnifyingGlass />
            <FaShoppingCart />
            </div>
            <div className={styles.button}>
                <button>BUY NOW</button>
            </div>

            <div className={styles.hamburger}>
            <RxHamburgerMenu />
            </div>

        </div>
        </div>

      
    </div>
  )
}

export default Header
