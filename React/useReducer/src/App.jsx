import { act, useReducer, useState } from 'react'
import './App.css'

function App() {

  const initialData = {
    count1:0,
    count2:0,
  }

  const myReducer = (state,action)=>{
    if(action.type == "increment1"){
      return {...state,count1 : state.count1 + 1}
    }
    if(action.type == "decrement1"){
      return {...state,count1 : state.count1 - 1}
    }
    if(action.type == "increment2"){
      return {count1 : state.count1, count2 : state.count2 + 1}
    }
    if(action.type == "decrement2"){
      return {count1 : state.count1, count2 : state.count2 - 1}
    }
  }

  const [state,dispatch] = useReducer(myReducer,initialData)

  const increment1 = ()=>{
    dispatch({type:"increment1"})
  }

  const decrement1 = ()=>{    
    dispatch({type:"decrement1"})
  }

  const increment2 = ()=>{
    dispatch({type:"increment2"})
  }

  const decrement2 = ()=>{
    dispatch({type:"decrement2"})
  }

  return (
    <>
     <div>
      <button onClick={increment1}>increment</button>
      <h1>{state.count1}</h1>
      <button onClick={decrement1}>Decrement</button>
     </div>

     <div>
      <button onClick={increment2}>increment</button>
      <h1>{state.count2}</h1>
      <button onClick={decrement2}>Decrement</button>
     </div>
    </>
  )
}

export default App
