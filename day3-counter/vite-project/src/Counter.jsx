import { useState } from "react"
import "./App.css"

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleChange = (v) =>{
        if(v==1){
            setCounter(counter+1)
        }
        if(v==-1){
            setCounter(counter-1)
        }
        if(v===0){
            setCounter(counter*2)
        }
       
    }

    return <div>
        <div className={counter%2===1? "red": "green"}>counter:{counter}</div>
        <button onClick={()=>{handleChange(1)}}>add</button>
        <button onClick={()=>{handleChange(-1)}}>substract</button>
        <button onClick={()=>{handleChange(0)}}>double</button>
    </div>
}