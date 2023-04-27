import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'




export default function Navbar(props) {

  const handleChange = (event) => {             // without this function, we would not be able to change the background color
    props.toggleColor(event.target.value)
  }

 
  
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.About}</Link>
        </li>
        
       
        
      </ul>
      
        {/* <div className="form-check form-switch mx-1">
             <input className="form-check-input" onClick={()=>props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
             <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
        </div> */}
        <div className='mx-1'>
            {/* <input type='color' title="Change background color" /> */}
            <input type='color' title="Change background color" onChange={handleChange}/>
        </div>
        <div className='bg-primary rounded mx-1 my-1' onClick ={() =>props.toggleMode('primary')} style={{height: "30px", width: "30px", cursor: "pointer" }}></div>
        <div className='bg-danger rounded mx-1 my-1' onClick ={() =>props.toggleMode('danger')} style={{height: "30px", width: "30px", cursor: "pointer" }}></div>
        <div className='bg-success rounded mx-1 my-1' onClick ={() =>props.toggleMode('success')} style={{height: "30px", width: "30px", cursor: "pointer" }}></div>
        <div className='bg-warning rounded mx-1 my-1' onClick ={() =>props.toggleMode('warning')} style={{height: "30px", width: "30px", cursor: "pointer" }}></div>
        <div className="dropdown mx-4">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Colored Background
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" onClick={props.changegreen} to="/">Green</Link></li>
            <li><Link className="dropdown-item" onClick={props.changered} to="/">Red</Link></li>
            <li><Link className="dropdown-item" onClick={props.changeyellow} to="/">Yellow</Link></li>
          </ul>
        </div>
    </div>
  </div>
</nav>
    
  )
}

Navbar.defaultProps = {
    title: "Title comes here"
}

Navbar.propTypes = {
    title : PropTypes.string

}


 