
import styles from "./Game.module.css"

const RollDice = ({currentDice, rollDice}) => {





  return (
    <div className={styles.Dice}>
        <div className={styles.Dicecontainer} onClick={rollDice}>
        <img src={`dice_${currentDice}.png`} alt="dice 1" />
      
    </div>
    <p className={styles.dice_para}>Roll the Dice !</p>
    </div>
    
  )
}

export default RollDice
