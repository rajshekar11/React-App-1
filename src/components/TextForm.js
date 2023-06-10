
import React,{useState} from 'react'

let myStyle={
  color:'black',
  backgroundColor:'white'
};

export default function TextForm() {
  
    const [text,setText]=useState("Enter text here");

    const [btnText,setBtntext] =useState("Dark mode")

    const [myStyle,setMystyle]=useState({
      color:'black',
      backgroundColor:'white'
    })

    let toggleChange=()=>{
      if(myStyle.color==='white'){
        setMystyle({
          color:'black',
      backgroundColor:'white'
        })
      }
      else{
       setMystyle({
        color:'white',
      backgroundColor:'black'
       })
      }
    }

    

    let onupClick=()=>{
        let newT=text.toUpperCase();
        setText(newT);
    };

    let onupChange=(event)=>{
        setText(event.target.value);
    };
  return (
    <div>
      
<div className="mb-3" style={myStyle}>
    <h1>Enter Text Below </h1>
 
  <textarea className="form-control" value={text} style={myStyle} onChange={onupChange} id="exampleFormControlTextarea1" rows="8"></textarea>
  
</div>
<button type="submit" style={myStyle} className="btn btn-primary" onClick={onupClick}>Convert to Uppercase</button>
<div className='container my-4' >
    <button type="button" onClick={toggleChange} className="btn btn-success">{btnText}</button>
</div>
    </div>
    
  )
}
