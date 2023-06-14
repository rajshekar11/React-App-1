
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode,setMode]=useState("light");

  let toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
    }
    else{
      setMode("light")
    }
  }

  return (
    <>
  <Navbar mode={mode} toggleMode={toggleMode} title="Yowai Mo"></Navbar>
  <div className='container my-3'>
    <TextForm >

    </TextForm>
  </div>
  </>
  );
}

export default App;
