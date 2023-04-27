import React, { useState } from 'react'

export default function About() {
    

    const [mystyle, setMyStyle] = useState({
        backgroundColor: "black",
        color: "white"
    })

    const [buttontext, setButtonText] = useState("Enable Light Mode")

    
    const darkMode = () =>{
        if(mystyle.color === 'white'){
            setMyStyle({
                backgroundColor:'white',
                color :'black'
            })
            setButtonText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                
                backgroundColor : 'black',
                color : 'white'
            })
            setButtonText("Enable Light Mode")
        }
    }

  return (
    <div className="container my-4" style={mystyle}>
        <h1 className='my-2'>About Us</h1>
    <div className="accordion"  id="accordionExample">
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={mystyle}>
        Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mystyle}>
        <strong>MyText App gives you a way to analyze your text quickly and efficiently. Be it word count, character count, number of vowels and consonants and Many More.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" id="headingTwo" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
      <div className="accordion-body" style={mystyle}>
        <strong>My Text App is a free character counting tool that provides instant character count & word count statistics for a given text. It reports the number of words and characters and Many More. This is suitable for writing text with word/character limit.</strong>
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header"  id="headingThree">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse"  aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
        <strong>This word counting application can work in any web browser like Google Chrome, Firefox, Internet Explorer, Safari, Opera, etc. It suits to count characters in Facebook, blogs, books, excel documents, pdf document, essays, etc.</strong> 
      </div>
    </div>
  </div>
</div>
<button className="btn btn-dark my-3" onClick={darkMode}>{buttontext}</button>
</div>
  )
}


