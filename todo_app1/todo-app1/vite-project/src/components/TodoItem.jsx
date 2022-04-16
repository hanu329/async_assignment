import { useState } from "react"
import "../App.css"

export const TodoItem = ({getTodo, handleClass})=>{
   
    const [title, settext] = useState([])
    return <div >
        
        <div className="input-todo">

        <input
       
        type="text" onChange={(e)=>{
           
           settext(e.target.value)
       }} />
       <button 
      
       onClick={()=>{ 
            // handleClass(v)
        getTodo(title)
       }
    }>setTodo</button>
        </div>
       
    </div>
}