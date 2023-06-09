
import React,{useState} from 'react'



export default function TextForm() {
    const [text,setText]=useState("Enter text here");
    let onupClick=()=>{
        let newT=text.toUpperCase();
        setText(newT);
    };

    let onupChange=(event)=>{
        setText(event.target.value);
    };
  return (
    <div>
      
<div className="mb-3">
    <h1>Enter Text Below </h1>
 
  <textarea className="form-control" value={text} onChange={onupChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  
</div>
<button type="submit" className="btn btn-primary" onClick={onupClick}>Convert to Uppercase</button>
    </div>
  )
}
