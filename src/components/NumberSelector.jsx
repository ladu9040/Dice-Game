
import styles from "./Game.module.css"



const NumberSelector = ({ setError ,error ,selectNum, setNum})=>{
 
  const arrNumber = [1,2,3,4,5,6];
  console.log(selectNum);

  const numberSelectorHandler = (value) => {
    setNum(value)
    
    setError("")
  }

  return (

<div className={styles.flex_container}>
  <p className={styles.error} >{error}</p>
<div className={styles.numberSelector}>
      {arrNumber.map((value, i)=>(
      <boxy   key={i} className={styles.box} onClick=  {() => numberSelectorHandler(value) }>{value}</boxy>
        ))}
    </div>
    <p className={styles.para}>Select Number</p>
  
</div>
);
};
   
  


export default NumberSelector;













