import React from 'react'
import { useSelector } from 'react-redux'

function Task2() {
    const output = useSelector((result)=>{
        return result.task.allTask
    })
  return (
    <>
        {
            output.map((i)=>{
                return <li>{i}</li>
            })
        }
    </>
  )
}

export default Task2