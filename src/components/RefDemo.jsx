import { useRef } from "react";

export default function UseRefDemo(){
  const inputRef = useRef(null);

  const focusInput = ()=> {
    inputRef.current.focus();
    console.log(inputRef.current)
  }

  return(
    <div>

      <input 
      type="text" 
      className='border p-2 m-4'
      placeholder="Enter Name" 
      ref={inputRef} />

    <button onClick={focusInput} 
    className='ml-4 bg-blue-500 text-white px-4 py-2'
    >Focus Input
    </button>

    </div>
  )
}