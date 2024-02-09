import React from 'react'
import styles from "./Game.module.css"

const  StartGame = ({toggle}) => {
    
  return (
   <div className={styles.container}>
    <div className="box">
    <img src="dice.png" alt="" />
    </div>
    <div className={styles.content}>
        <h1>DICE GAME</h1>
        <button
        onClick={toggle} className={styles.btn}>Play Now</button>
    </div>
   </div>
  )
}

export default StartGame


