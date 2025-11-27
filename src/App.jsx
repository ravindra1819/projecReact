import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoPagination from './components/TodoPagination'
import UseEffectDemo from './components/EffectDemo'
import UseRefDemo from './components/RefDemo'


function App() {

  return (
    <>
      <UseEffectDemo />
      <UseRefDemo/>
      <TodoPagination />
    </>
  )
}

export default App
