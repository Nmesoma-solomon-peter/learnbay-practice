import React, { useState, createContext} from 'react'
import Question from "./Question"
import Home from './Homepage';
import Result from './Result'

import "./App.css"

export const myBasket = createContext();

function App() {


  const [quizStage, setQuizStage] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <>
      <div>
        <myBasket.Provider value={{stage : setQuizStage,myScore : score,setMyScore:setScore}}>
        {quizStage == "home" && <Home />}
        {quizStage == "Question" && <Question />}
        {quizStage == "result" && <Result />}
        </myBasket.Provider>


      </div>

    </>
  )
}

export default App