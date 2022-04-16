import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Todo} from "./components/Todo.jsx"
import { Showcompleted } from "./components/Showcompleted.jsx"


function App() {
  const [count, setCount] = useState(0)
  const [newtodo, setnewtodo] = useState([])
       const td=(v)=>{
        setnewtodo(v)
       }
  return (
    <div className="App">
      
      <Todo todo_fun={td}/>
    {
    newtodo.map((ele) => (<div><Showcompleted sts={ele.status} /></div>))
    }
    
    
           
    </div>
  )
}

export default App
