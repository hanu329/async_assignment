import {TodoItem} from "./TodoItem.jsx"
import {useState} from "react"
import {TodoList} from "./TodoList.jsx"
import { nanoid } from 'nanoid'
import "../App.css"



export const Todo = ({getTodo, todolist})=>{
    
   
const [todo, settodo] = useState([])



   const todofun = (v)=>{

       const t={
           title:v,
           id:nanoid()

       }
       settodo([...todo, t])
   }
    return <div className="shadow">
       <TodoItem getTodo={todofun}/>
       
        {
todo.map((el)=>{return <div key={todo.id}><TodoList todolist = {el.title}  /> </div> } )
       }
        
    </div>
}