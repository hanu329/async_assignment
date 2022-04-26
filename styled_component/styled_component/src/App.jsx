import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Button} from "./components/Button.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <Button className="blue">Primary Button</Button>
      <Button className="grey">Default Button</Button>
      <Button className="dashed">Dashed Button</Button>
      </div>
     <div>
     <Button className="text">Text Button</Button>
      <Button className="link">Link Button</Button>
     </div>
    </div>
  )
}

export default App
