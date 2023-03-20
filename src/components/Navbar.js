import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'




export default function Navbar(props) {

  const handleChange = (event) => {             // without this function, we would not be able to change the background color
    props.toggleColor(event.target.value)
  }
  
  return (
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.About}</a>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        <div className="form-check form-switch mx-3">
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked"  />
             <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light'}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
        </div>
        <div>
            {/* <input type='color' title="Change background color" /> */}
            <input type='color' title="Change background color" onChange={handleChange}/>
        </div>
        <div className="dropdown mx-4">
          <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Colored Background
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
            <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
            <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
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


 