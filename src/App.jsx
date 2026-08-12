import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from '../component/Home.jsx'
import Dashboard from '../component/Dashboard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3> welcome</h3>
    <Home></Home>
    <Dashboard></Dashboard>
    </>
  
  )
}

export default App
