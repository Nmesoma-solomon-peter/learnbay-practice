import React, { useContext } from 'react'
import { myBasket } from './App'

function Result() {
  const {myScore} = useContext(myBasket);
  return (
    <div>
      <h2>Your Score is : {myScore}</h2>
    </div>
  )
}

export default Result