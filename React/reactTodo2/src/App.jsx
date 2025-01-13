import { useState } from 'react'
import './App.css'
import Todo from './todo'
import { myStore } from './redux'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Todo />
    </>
  )
}

export default App
