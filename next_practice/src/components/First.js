import styles from "../styles/color-design.module.css"
import {useState} from "react";

const First = ({color = 'red',title,count,setCount}) => {

    const countUp = () => {
        setCount((prevstate) => prevstate + 1);
    };
    const countDown = () => {
        setCount((prevstate) => prevstate - 1);
    };

    return(
        <>
           <h3 className={styles["color-design"]}>{title}：{count}</h3>
           <button onClick={countUp}>+</button> 
           <button onClick={countDown}>-</button>
        </>
    )
}

export default First;