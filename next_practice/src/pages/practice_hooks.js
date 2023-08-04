import { useState } from "react";
import { useReducer } from "react";

const practice_hooks = () => {

const[state,setState] = useState(0);
const[rstate,dispatch] = useReducer((prev,action) => {
    if(action === '+'){
        return ++prev;
    } else if(action ==='-'){
        return --prev;
    }
},0);

const countUp = () => {
    setState(prev => ++prev);
}

const rcountUp = () => {
    dispatch('+');
}

const rcountDown = () => {
    dispatch('-');
}

return(
    <>
       <div>
            <h3>{state}</h3>
            <button onClick={countUp}>+</button>
       </div>
       <div>
            <h3>{rstate}</h3>
            <button onClick={rcountUp}>+</button>
            <button onClick={rcountDown}>-</button>
       </div>
        
    </>
)

}

export default practice_hooks;

http:localhost:3000//practice_hooks