import styles from "../App.module.css";
const Buttons=({onButtonClick}) =>{
    let buttonNames =['0','1','2','C','3','4','5','+','6','7','8','-','9','*','.','/','='];
    return (
        <div className={styles.buttonscontainer}>
           {buttonNames.map(buttonName =><button className={styles.button} key={buttonName} onClick={() => onButtonClick(buttonName)}>{buttonName}</button> )}
        </div>
    );
};
export default Buttons;