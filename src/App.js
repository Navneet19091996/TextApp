// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
import Alert from './components/Alert';
// import About from './components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//     Route
//   } from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null)

  const [color, setColor] = useState('light')

   let alertPlay = (message, type) =>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
   }
  
  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'grey';
      alertPlay("Light Mode has been Enabled", "success")
      document.title = "My Text App(Light Mode)"
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      alertPlay("Dark Mode has been Enabled", "success")
      document.title = "My Text App(Dark Mode)"
    }
  }

  const toggleColor = (value) => {
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
    document.body.style.color = 'white';    
  }

  const changegreen = ()=>{
    // setColor('green')
    document.body.style.backgroundColor = 'green'
    document.body.style.color = 'blue'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title = "MMMy App" mode = {mode} toggleMode = {toggleMode} toggleColor={toggleColor} color={setColor} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>  
      <Alert alert ={alert}/>
      <div className="container my-4"> 

      <Textarea heading = "Heading Here" alertPlay = {alertPlay}/>

        {/* <Routes>
          
          <Route path="/about" element={<About />}></Route>           */}
          {/* <Route path="/" element={<Textarea heading = "Heading Here" alertPlay = {alertPlay}/>}></Route>       */}

        {/* </Routes>   */}
    </div>
    {/* </Router>        */}
    </>
  );
}

export default App;
