import React, {useState} from 'react'



export default function Textarea(props) {

    const[text, setText] = useState("");

    const handleOnChange = (event)=>{
        // console.log("Changed");
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        // console.log("UpClicked");
        setText(text.toUpperCase());
        props.alertPlay("Converted to Upper Case", "success");
    }
    
    const CapitaliseFirstWord = () =>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        
    }
    
    const handleLowerClick = () =>{
        setText(text.toLowerCase());
        props.alertPlay("Converted to Lower Case", "success");
    }
    const clear = ()=>{
        setText("")
    }
    const extractEmail = () =>{
        setText(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi))
        setText(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).length)
    }
    
    // console.log(typeof text)
    
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })  

    const [insidetext, setInsideText] = useState("Enable Dark Mode");

    const handleCopy = () =>{
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const DarkMode = ()=>{
        if(style.color === 'white'){
        setStyle({
            color: "black",
            backgroundColor: "white"
        })
        setInsideText("Enable Dark Mode")
    }
    else{
        setStyle({
            color: "white",
            backgroundColor: "black"
        })
        setInsideText("Enable Light Mode")
    }

    }

    const RemoveExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join())
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }


      const handleReverse = (event) => {
        /* Convert string to array*/
        let strArr = text.split("");
        /* Reverse array*/
        strArr = strArr.reverse();
        /* Convert array to string*/
        let newText = strArr.join("");
        setText(newText);
      }; 
      

      //COUNT THE NUMBER OF VOWELS AND NUMBER OF CONSONANTS FROM THE ENTERED TEXT IN THE TEXTAREA


 //Global declaration:
   let [count, setCount] = useState(0);
   let [count1, setCount1] = useState(0);
   let countChar = 0,
   countCons = 0;

// Function to count Vowels:

const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };

      // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        countCons++;
        setCount1(countCons);
      }
    }
}

const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
}


    // count characters and words

    // let counting = 0;

    // for(let i = 0; i<text.length;i++){
    //     if(text.endsWith ===" "){
    //         counting ++;
    //     }
    //     else if (text.endsWith ===""){
    //         continue;
    //     }
    //     // return counting;
    // }

    // const countWords = (str) => {                       // this also works fine
    //     let words;
    //     if (text === "") {
    
    //       words = 0;
    //     } else {
    //       words = str.trim().split(/\s+/).length;
    //     }
    //     return words;
    //   };
    

      

//Logic for word count ( multiple spaces case also solved )

function countWords(content){
  if(content===""){
    return 0;
  }
  let arr = content.split(" ");
  let len = arr.length;
  let count=0;
  
  for(let i=0;i<len;i++){
    if(arr[i]==='' || arr[i]===' '){
       count++;
    }
  }
  return len-count;
}

    
    // console.log(counting)

    //     let counting = 0;
    // let countWords = (text) =>{
        
    //     while(!(text.endsWith === "" ||text.endsWith === " ")){
    //         counting++;
            
    //     }
        
    // //     if(text.endsWith === "" ||text.endsWith === " "){
    // //         return;
    // //     }
    // //     else{
    // //         counting++
    // // }    
    // return counting
    // }


    

    return (
        <>
        <div className="container-big" >
    <h1 className="my-3">{props.heading}</h1>

    <div class="mb-3" >
        <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode , color: props.mode ==='dark'? 'white':'black'}}></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-success my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-danger my-2 mx-2" onClick={clear}>Clear Text</button>
        <button className="btn btn-danger my-2 " onClick={extractEmail}>Extract Email</button>
        <button className="btn btn-dark my-2 mx-2" onClick={DarkMode}>{insidetext}</button>
        <button className="btn btn-success my-2 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success my-2 mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button onClick={CapitaliseFirstWord} className="btn btn-warning my-2">Capitalise First Word</button>
        <button onClick={handleReverse} className="btn btn-warning my-2 mx-2">Reverse Text</button>
        <button className="btn btn-primary " onClick={handleVoClick}>Count no. of Vowels</button>
        <button className="btn btn-primary mx-2" onClick={handleCoClick}>Count no. of Consonants</button>
        <button className='btn btn-dark' onClick={downloadTxtFile}>Download Text</button>
    </div>
    
    <div className="container" style={{backgroundColor: props.mode ==='dark'? 'light':'dark', color: props.mode ==='dark'? 'light':'dark'}}>
        <h1>Your Text Summary</h1>
       <p> {(countWords(text))} words and {text.length} characters</p> {/*agar string space se end ho rhi ho to length -1 kar do using JS Logic otherwise number of words 1 jaada milega if the string ends with a space. This split is giving us 1 character even when there is no character in it */}
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p><b>This is like the Word Counter on Google</b></p> 
        <h3 className='my-3'>Preview</h3>       
        <p>{text}</p>          {/* This text would be {this.text} if we were using class based components*/}
        <h3>You have entered:</h3>
    <p>{count} No. of Vowels</p>
    <p>{count1} No. of Consonants</p>
    </div>
    </div>
</>
  )
}
