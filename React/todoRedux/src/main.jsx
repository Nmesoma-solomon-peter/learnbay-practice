import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {todoStore} from "./Redux.js"
import {Provider} from "react-redux"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  // </StrictMode>,
)
