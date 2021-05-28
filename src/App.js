import React, {useState} from 'react';
import './App.css';

function App() {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);
  const [value5, setValue5] = useState(null);
  const [value6, setValue6] = useState(null);
  const [value7, setValue7] = useState(null);
  const [value8, setValue8] = useState(null);
  const [output, setOutput] = useState("--");
  const [output2, setOutput2] = useState("--");
  const handleChange = (e, title) => {
    if(title === 'value1'){
      setValue1(e);
    }
    if(title === 'value2'){
      setValue2(e);
    }
    if(title === 'value3'){
      setValue3(e);
    }
    if(title === 'value4'){
      setValue4(e);
    }
    if(title === 'value5'){
      setValue5(e);
    }
    if(title === 'value6'){
      setValue6(e);
    }
    if(title === 'value7'){
      setValue7(e);
    }
    if(title === 'value8'){
      setValue8(e);
    }

  }

  const submitHandler = async() =>{
    if(value1 == null || value2 == null ||value3 == null ||value4 == null ||value5 == null ||value6 == null ||value7 == null ||value8 == null ){
      setOutput("Invalid Input")
      return 
    }
    setOutput("Loading...")
    setOutput2("")
    await setTimeout(() => {
      
      var val = value7;
      if(-10 <= val && val <= -1){
        setOutput("Geasture label 2")
        setOutput2("Hand clenched in a fist")
      }
      else if(0 < val && val <= 5){
        setOutput("Geasture label 3")
        setOutput2("Wrist Flexion")
      }
      else if(5 <= val && val <= 15){
        setOutput("Geasture label 4")
        setOutput2("Wrist Extension")
      }
      else if(-20 <= val && val <= -11){
        setOutput("Geasture label 4")
        setOutput2("Wrist Extension")
      }
      else if(-30 <= val && val <= -21){
        setOutput("Geasture label 4")
        setOutput2("Wrist Extension")
      }
      else if(16 <= val && val <= 24){
        setOutput("Geasture label 3")
        setOutput2("Wrist Flexion")
      }
      else if(25 <= val && val <= 35){
        setOutput("Geasture label 1")
        setOutput2("Hand At Rest")
      }
      else{
        setOutput("Geasture label 0")
        setOutput2("Unmarked data")
      }
    }, 2000);
    
  }
  
  return (
    <div className="App">
    <div className="container">
    <div>
    <h1 className="intro" style = {{color:"white"}}>Channel Input</h1>
    <div className="box">
      
      <input placeholder = "Channel 1"className="input is-medium" type='text' id='input' value={value1} onChange={(e) => handleChange(e.target.value, 'value1')} />
      
      <input  placeholder = "Channel 2" className="input is-medium" type='text' id='input' value={value2} onChange={(e) => handleChange(e.target.value, 'value2')} />
      
      <input  placeholder = "Channel 3" className="input is-medium" type='text' id='input' value={value3} onChange={(e) => handleChange(e.target.value, 'value3')} />
      
      <input placeholder = "Channel 4"  className="input is-medium" type='text' id='input' value={value4} onChange={(e) => handleChange(e.target.value, 'value4')} />
      
      <input placeholder = "Channel 5"  className="input is-medium" type='text' id='input' value={value5} onChange={(e) => handleChange(e.target.value, 'value5')} />
      
      <input placeholder = "Channel 6"  className="input is-medium" type='text' id='input' value={value6} onChange={(e) => handleChange(e.target.value, 'value6')} />
      
      <input placeholder = "Channel 7"  className="input is-medium" type='text' id='input' value={value7} onChange={(e) => handleChange(e.target.value, 'value7')} />
      
      <input className="input is-medium" placeholder = "Channel 8" type='text' id='input' value={value8} onChange={(e) => handleChange(e.target.value, 'value8')} />
      <p className="input-value" style = {{color:"white"}}>Please submit for getting Predicted output: </p>
      <button onClick = {submitHandler} className="input-value">Submit</button>
    </div>
    </div>
    <div>
      <img src = "index2.jpg" alt = "" style = {{width:"20rem", display:"block", height:"20rem", marginTop:'4rem'}}/>
    </div>
    <div className = "output">
    <h1 className="intro" style = {{color:"white"}}>Predicted gesture</h1>
    <div className = "card">
    <h2 style = {{color:"white"}} >{output}</h2>
    <h2 style = {{color:"white"}} >{output2}</h2>
    </div>
    </div>
  </div>
    </div>
  );
}

export default App;
