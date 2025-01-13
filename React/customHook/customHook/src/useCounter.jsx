import React from 'react'
import { useState } from 'react';


function useCounter() {
    const [count, setCount] = useState(0);
    function decreaseCounter(){
        setCount(count - 1);
    }
    function increaseCounter(){
        setCount(count + 1);
    }

  return [count, decreaseCounter, increaseCounter]
}

export default useCounter