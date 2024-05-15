import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] =useState("");
  const onButtonClick =(buttonText) => {
    if(buttonText === "C") {
      setCalVal("");
    }else if(buttonText === "=") {
        let result = eval(calVal);
        setCalVal(result);
    }else {
      const newDisplayItem= calVal + buttonText;
      setCalVal(newDisplayItem);
    }
 
  }
  return (
    <div className={styles.container}>
      <Display displayValue={calVal}></Display>
      <Buttons onButtonClick={onButtonClick}></Buttons> 

    </div>

  );
}

export default App
