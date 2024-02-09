import React from 'react'
import styles from "./Game.module.css"
const Rules = () => {
  return (
    <div className={styles.rules}>
       <h2>How to play dice game</h2>
       <div className='text'>
        <p>Select any Number</p>
        <p>After click on the  dice if selected number is equal to dice number you will get same point as dice("")</p>
        <p>if you get wrong guess then 2 point will be deducted</p>
       </div>
    </div>
  )
}

export default Rules



