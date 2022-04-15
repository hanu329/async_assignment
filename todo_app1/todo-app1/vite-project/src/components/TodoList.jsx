import "../App.css"
import { TodoItem } from "./TodoItem"
import { useState } from "react"

export const TodoList = ({todolist})=>{
    const [cls, setcls] = useState(true)

    const handleClass = (cls) =>{
        console.log(1)
        setcls(cls===true ? false : true) 
  }
 
    return  <div><div className="Sajana_todo">
        <div  key={todolist.id}>
         {todolist} </div>
    <div onClick={()=>{handleClass(cls)}} className = {cls? "first":"second"} ></div>
   
    </div>  
   
    </div>
}