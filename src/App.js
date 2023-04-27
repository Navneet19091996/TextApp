// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
    Route
  } from "react-router-dom";



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
  const removeBodyColorClasses = ()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.style.backgroundColor = "";
  }
  const toggleMode = (cls) =>{
    removeBodyColorClasses();
    console.log(cls);
   document.body.classList.add(`bg-`+ cls);
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'grey';
      alertPlay("Light Mode has been Enabled", "success")
      document.title = "My Text App(Light Mode)";
      setColor("white");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'white';
      alertPlay("Dark Mode has been Enabled", "success")
      document.title = "My Text App(Dark Mode)"
      setColor("black");
    }
  }

  const toggleColor = (value) => {
    removeBodyColorClasses();
    console.log(value);
    setColor(value);
    document.body.style.backgroundColor = color;
    // document.body.style.color = 'white'? 'black':"white";    
  }

  const changegreen = ()=>{
    removeBodyColorClasses();
    // setColor('green')
    document.body.style.backgroundColor = 'green'
    // document.body.style.color = 'blue'
  }
  const changeyellow = ()=>{
    removeBodyColorClasses();
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    removeBodyColorClasses();
    document.body.style.backgroundColor = '#C15031'
  }

  return (
    <>
    <Router>
    <Navbar title = "MMMy App" mode = {mode} toggleMode = {toggleMode} toggleColor={toggleColor} color={setColor} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>  
      <Alert alert ={alert}/>
      <div className="container my-4"> 

        <Routes>
          
          <Route path="/about" element={<About />}></Route>        
          <Route path="/" element={<Textarea heading = "Heading Here" alertPlay = {alertPlay}/>}></Route>      

        </Routes>  
    </div>
    </Router>       
    </>
  );
}

export default App;
