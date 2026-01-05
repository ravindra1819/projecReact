import React from "react";
import Child from "./Child";

export default function Parent({message}){
  return(
    <div style={{padding: "10px", border: "1px solid blue"}}>
      <h2>Parent Component</h2>
      <Child message = {message} />
    </div>
  );
}