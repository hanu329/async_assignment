import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Logo} from "./Logo.jsx"
import {Links} from "./Links.jsx"
import {Button} from "./Button.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Logo />
     <Links />
     <Button />
    </div>
  )
}

export default App
