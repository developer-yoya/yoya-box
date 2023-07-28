import List from "./List";
import Form from "./Form";
import { useState } from "react";

const Todo = () => {

    const todosList = [];
    
    const [todos,setTodos] = useState(todosList);

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(newTodos);

        
    }

    const createTodo = (todo) => {
        setTodos([...todos,todo]);
    }

    return(
        <>
            <h3>Reminder</h3>
            <List todos={todos} deleteTodo = {deleteTodo}/>
            <Form createTodo={createTodo}/>
        </>
    )
}

export default Todo;