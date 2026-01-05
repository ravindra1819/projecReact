 import React from "react"
 
 export default function GrandChild({message}){
  return(
    <div style={{padding:"10px", border:"1px solid gray"}}>
      <h3>Grand Child Component</h3>
      <p>Message from App : {message}</p>
    </div>
  );
}