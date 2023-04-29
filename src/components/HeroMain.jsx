import React from 'react'
import styles from '../styles.module.css'

const HeroMain = () => {
  return (
    <div className={styles.heroMain}>
      <div className={styles.writtenContent}>
        <p className={styles.heroMainText}><span>F.wears</span> is awesome</p>
        <p>
          <span>F.wears</span> has some special dress variety that you will love
          to wear on your loved ocassions. Here are some categories displayed below. Sign up to stay in touch.
        </p>
        <button className={styles.signupButton}>Sign up</button>
      </div>
      <div className={styles.imgPlaceholder}><img alt='' src="./images/front-pic.jpg" /></div>
    </div>
  )
}

export default HeroMain
