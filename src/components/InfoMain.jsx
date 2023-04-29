import React from 'react'
import styles from '../styles.module.css'


const InfoMain = () => {
  return (
    <div className={styles.infoSection}>
      <h3 className={styles.infoHeaderText} id="categories">Our special categories.</h3>
      <div className={styles.infoSectionImages}>
        <div className={styles.image + ' ' + styles.image1}>
          <img alt='' src="./images/img1.jpg" />
          <p className={styles.imageText}>Traditionally crafted for the Modern Bride</p>
        </div>
        <div className={styles.image + ' ' + styles.image2}>
          <img alt='' src="./images/img2.jpg" />
          <p className={styles.imageText}>New collection of elegant dresses</p>
        </div>
        <div className={styles.image + ' ' + styles.image3}>
          <img alt='' src="./images/img3.jpg" />
          <p className={styles.imageText}>Perfect choice for a summer wedding</p>
        </div>
      </div>
    </div>
  )
}

export default InfoMain
