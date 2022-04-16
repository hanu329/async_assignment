import "../App.css"
import { TodoItem } from "./TodoItem"
import { useState } from "react"

export const TodoList = ({todos})=>{
    const [cls, setcls] = useState(true)

    const handleClass = (cls) =>{
        if(todos.status==true){
            todos.status=false;
        }
        else{
            todos.status= true;
        }
        setcls(cls===true &&  todos.status==true? false : true) 
  }
 
    return  <div><div className="Sajana_todo">
        {
        console.log(todos.title)
        }
        <div  key={todos.id}>
         {todos.title}   </div>
         <div onClick={()=>{handleClass(cls)}} className = {cls? "first":"second"}>{todos.status? "Completed":"Pending"}</div>
    {/* <div></div> */}
   
    </div>  
   
    </div>
}