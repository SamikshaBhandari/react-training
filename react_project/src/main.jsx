import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import Register from './section/Register.jsx'
// import Login from './section/Login.jsx'
// import Counter from './section/Counter.jsx'

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <Login/>
    <Counter/> */
    <Register/>
    }
  </StrictMode>,
)
