
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'


export const CountContext =createContext();






function App() {
     const [count, setCount]   =useState(0)
     const handleClick = ()=>{
      setCount(count+1)
     }
  return (
    <div>
    
    <CountContext.Provider value={count}>
    <div className=''>
    <Navbar
    // handleClick ={handleClick}
   
    ></Navbar>
    <button className='btn mt-5' onClick={handleClick}>count is{count}</button>
    </div>

    </CountContext.Provider>
    </div>
  )
}

export default App
