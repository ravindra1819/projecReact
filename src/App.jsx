import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectDemo from './components/EffectDemo'
import UseRefDemo from './components/RefDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseEffectDemo />
      <UseRefDemo />
    </>
  )
}

export default App
