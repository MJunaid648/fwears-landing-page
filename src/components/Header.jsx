import React from 'react'
import styles from '../styles.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}><img alt='' src="./images/logo.svg" /></div>
      <ul>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#AboutUs">About us</a></li>
        <li><a href="#SignUp">Sign up</a></li>
      </ul>
    </div>
  )
}

export default Header