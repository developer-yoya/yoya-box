import {useState} from "react";

const Form = ({createTodo}) => {
    const[enterdTodo,setEnterdTodo] = useState("");
    const addTodo = (e) => {
        const inputVal = e.target.value;

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enterdTodo,
        };

        createTodo(newTodo);
    }

    return(
        <>
            <input type="text" value={enterdTodo} onChange={(e) => setEnterdTodo(e.target.value)}/>
            <button onClick={addTodo}>追加</button>
        </>
    )
}

export default Form;