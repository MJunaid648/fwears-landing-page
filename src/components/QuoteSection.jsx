import React from 'react'
import styles from '../styles.module.css'

const QuoteSection = () => {
  return (
    <div className={styles.quoteSection} id='AboutUs'>
      <p className={styles.quoteText}>
        "I have enough clothes and shoes, I don't need to go shopping", said no
        woman ever.
      </p>
      <p className={styles.authorName}>Anonymous</p>
    </div>
  )
}

export default QuoteSection
