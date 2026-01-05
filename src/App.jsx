import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoPagination from './components/TodoPagination'
import UseEffectDemo from './components/EffectDemo'
import UseRefDemo from './components/RefDemo'
import Parent from './components/UseContext/PropDrilling/Parent'
import BankAccount from './components/UseReducer/BankAccount'
import InfiniteScrollDemo from './components/InfiniteScrollDemo'


function App() {

  const message = "Hello this message is from App";

  return (
    <>
      <UseEffectDemo />
      <InfiniteScrollDemo />
      <UseRefDemo />
      <div className='m-5'>
        <BankAccount />
      </div>
      <Parent message={message} />
      <TodoPagination />
    </>
  );
}

export default App
