import styles from "./Game.module.css"
import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from "./RollDice"
import { useState } from "react"
import Rules from "./Rules"

const GamePlay = () => {
const [score, setScore] = useState(0);

  const [selectNum, setNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber =(min, max)=> {

    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const rollDice = ()=> {
    const randomNumber = generateRandomNumber(1,7);
  
    setCurrentDice((prev)=> randomNumber)

    if(!selectNum) {
      setError("You have not selected any number");
      return
    
    };

  

if (selectNum == randomNumber){
  setScore((prev) => prev + randomNumber)
}else{
  setScore((prev)=> prev - 2)
}

setNum (undefined);

  }

  const roleDice = () => {

  }

  const resetScore = () => {
    setScore (0);
  }


  return (
    <main >
      <div className={styles.top_section}>
      <TotalScore score={score
      }/>
      <NumberSelector 
      error={error} 
      setError={setError}
      selectNum={selectNum}
      setNum = {setNum}/>
      </div>
      <RollDice  currentDice={currentDice} rollDice={rollDice}/>
      <div className={styles.btn_container}>
        <button onClick={resetScore}  className={styles.btns}>Reset</button>
        <button onClick={()=> setShowRules((prev) => !prev)} className={styles.btns}>{
          showRules ? "Hide " :  "Show "
        }
        Rules </button>
      </div>

    { showRules && <Rules/>}
     
    </main>
  )
}

export default GamePlay




