import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentItem from './components/StudentItem'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <h1>Vite + React</h1>
        <StudentItem />
      </div>
  )
}

export default App
