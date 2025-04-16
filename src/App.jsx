
import { createContext, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'


export const CountContext =createContext();


export const  AnotherContext   = createContext();

export const Passing = createContext();

function App() {
     const [count, setCount]   =useState(0)
     const handleClick = ()=>{
      setCount(count+1)
     }

      const [another, setAnother] = useState(11);

      const [passing, setPassing]=useState(20)

  return (
    <div>
    
  <Passing.Provider value={[passing, setPassing]}>

  <AnotherContext.Provider value={[another, setAnother]}>

<CountContext.Provider value={[count, setCount]}>
 <div className=''>



 <Navbar
 // handleClick ={handleClick}

 ></Navbar>
 <button className='btn mt-5' onClick={handleClick}>count is{count}</button>
 </div>

 </CountContext.Provider>
</AnotherContext.Provider>
  </Passing.Provider>
    </div>
  )
}

export default App
