import React from 'react'
import styles from "./Game.module.css"

const TotalScore = ({score}) => {
  return (
    <div>
      <div className={styles.ScoreContainer}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
    </div>
  )
}

export default TotalScore
