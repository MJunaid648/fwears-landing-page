import React from 'react'
import styles from '../styles.module.css'

const CallToAction = () => {
  return (
    <div className={styles.callToAction} id="SignUp">
      <div className={styles.card}>
        <div className={styles.cardText}>
          <p className={styles.cTAHeading}>Call to action! It's time!</p>
          <p className={styles.cTAText}>
            Sign up for our product by clicking that button right over there!
          </p>
        </div>

        <button className={styles.signupButton} onMouseOver="">Sign up</button>
      </div>
    </div>
  )
}

export default CallToAction
