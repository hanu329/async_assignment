import {TodoItem} from "./TodoItem.jsx"
import {useState} from "react"
import {TodoList} from "./TodoList.jsx"
import { nanoid } from 'nanoid'
import "../App.css"




export const Todo = ({todo_fun})=>{
    
   
const [todo, settodo] = useState([])

     todo_fun(todo)

   const todofun = (v)=>{

       const t={
           title:v,
           status:false,
           id:nanoid()

       }
       settodo([...todo, t])
   }

   const handleStatus = ()=>{
   settodo(todo.filter((el)=>{return el.status===true}))
   }
    return <div className="shadow">
        
       <TodoItem getTodo={todofun}/>
       
        {
todo.map((el)=>{return <div key={todo.id}><TodoList todos = {el}  /> </div> } )
       }
         <button onClick={()=>{handleStatus()}}>show completed</button>   
    </div>
}