import React, { useState } from 'react'
import { addTodo } from './redux';
import { useDispatch, useSelector } from 'react-redux';

function Todo() {
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const output = useSelector((result)=>{
        console.log(result.add);
        return result.add.allTask
    });
    
    const updateInput = (event)=>{
        setInput(event.target.value);
    }
    const addTask = ()=>{
        dispatch(addTodo(input));
    }

  return (
    <div>
        <input type="text"  onChange={updateInput}/>
        <button onClick={addTask}>Add Task</button>
        <div>
            {
                output.map((i)=>{
                    return <li>{i}</li>       
                })
            }
        </div>
    </div>
  )
}

export default Todo