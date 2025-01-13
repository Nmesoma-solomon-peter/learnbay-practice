import React, { useState } from 'react'
import useCounter from './useCounter'

function Counter() {
    const info = useCounter();
  return (
    <div>
        <h1>{info[0]}</h1>
        <button onClick={info[1]}>Decrease</button>
        <button onClick={info[2]}>increase</button>
    </div>
  )
}

export default Counter