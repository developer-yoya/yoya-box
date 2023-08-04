import First from "@/components/First.js";
import Profile from "@/components/Profile";
import Todo from "@/components/Todo";
import { useState } from "react";

const animals = ["Dog","Cat","Rat"]

const Example = () => {
    const [toggle,setToggle] = useState(true);

    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);

    
    const toggleComponent = () => {
        setToggle(prev => !prev)
    }

    const animalList = [];
    for(const animal of animals){
        animalList.push(<li>{animal}</li>)
    }

    const [filterVal,setFilterVal] = useState("");

    return (
        <>
            {/* <button onClick={toggleComponent}>toggle</button>
            {toggle 
                ? <First key="A" title="A" count={countA} setCount={setCountA}/>
                 : <First key="B" title="B" count={countB} setCount={setCountB}/>
            }  

            <ul>
                {animalList}    
            </ul> 

            <h3>配列のフィルター</h3>
            <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
            <ul>
                {animals
                    .filter(animal => animal.indexOf(filterVal) !== -1)
                    .map((animal) => (<li>{animal}</li>))
                }
            </ul> */}

            <h3>フィルタートレーニング</h3>

                <input type="text" value={filterVal} onChange={(e) => setFilterVal(e.target.value)}/>
                <Profile filterVal={filterVal} />

            <h3>ToDoアプリ</h3>
            <Todo/>

            
        </>
    )
}

export default Example;

http:localhost:3000