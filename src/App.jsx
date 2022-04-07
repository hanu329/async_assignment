import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
   <>
        <h1> Mobile Operating System</h1>

        <ul>
            <li>Android</li>
            <li>Blackberry</li>
            <li>iphone</li>
            <li>Window Phone</li>
        </ul>

        <h1> Mobile Manufacturers</h1>

        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
    </>
   
    </div>
  )
}

export default App
