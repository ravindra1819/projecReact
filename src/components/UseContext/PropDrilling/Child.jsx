import React from "react";
import GrandChild from "./GrandChild";

export default function Child({message}){
  return(
    <div style={{padding: "10px", border: "1px solid green"}}>
      <h2>Child Component</h2>
      <GrandChild message={message} />
    </div>
  );
}