import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { add_Task } from './Redux';

function Task() {
    // assigning useSelector.
    const output = useSelector((result)=>{
        return result.task.allTask
    }) 
    // assigning useDispatch
    const dispatch = useDispatch()
    const [enteredTask, setEnteredTask] = useState("");

    function collectTask(event){
        setEnteredTask(event.target.value);
    }
    function sendTask(){
            dispatch(add_Task(enteredTask))
    }

    return (
        <>
            Enter Task : <input type="text"  onChange={collectTask}/>
            <button onClick={sendTask}>Add Task</button>

            <div>
                {output.map((i)=>{
                    return <li>{i}</li>
                })}
            </div>
        </>
    )
}

export default Task