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
    // const extractEmail = () =>{
    //     setText(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi))
    //     setText(text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi).length)
    // }
    
    // console.log(typeof text)
    
    // const [style, setStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })  

    // const [insidetext, setInsideText] = useState("Enable Dark Mode");

    const handleCopy = () =>{
        // let text = document.getElementById("exampleFormControlTextarea1"); // as we are using the navigator API so hame text ko select karne ki koi jaroorat hi nhi h... so phli 2 lines ka code jaroori nhi h
        // text.select();  
        // navigator.clipboard.writeText(text.value);
        navigator.clipboard.writeText(text);  // .value karne ki jaroorat nhi navigator API ke saath

        // document.getSelection().removeAllRanges();      // deselect the selected text when we copied
        props.alertPlay("Copied Text", "success");
    }

    // const DarkMode = ()=>{
    //     if(style.color === 'white'){
    //     setStyle({
    //         color: "black",
    //         backgroundColor: "white"
    //     })
    //     // setInsideText("Enable Dark Mode")
    // }
    // else{
    //     setStyle({
    //         color: "white",
    //         backgroundColor: "black"
    //     })
    //     // setInsideText("Enable Light Mode")
    // }

    // }

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
  let arr = content.split(/\s+/);
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


    //this converts text to sentence case meaning the first word starts with a captial letter the rest of the words are lowercase

    const handleSentenceCaseClick = () => {
      let lowerCase = text.toLowerCase();
      let regex = /([^.!?]+[!?.\d\s]+)/g;
      let sentences = lowerCase.match(regex);
      let newText = sentences
        .map((sentence) => {
          return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
            ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
            : sentence);
        })
        .join("");
  
      setText(newText);
    };

    const handleCapitalizeWordClick = () => {
      let lowercase = text.toLowerCase();
      let words = lowercase.split(" ");
      let newWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      });
      let newText = newWords.join(" ");
      setText(newText);
    };

    

    // a function to change  html bootstrap to react bootstrap
    //   by replacing class= to className=:          
    
    

        // const handleconverter =()=>{
        // let newtext = text.replace("class=","className=");
        // setText(newtext);
        // };

        
        // Remove Duplicate words

        function handleDuplicates(){
            let wordArr = text.split(" ");
            let newText = wordArr.filter((item, pos)=>{
                return wordArr.indexOf(item) === pos;
            })
            newText = newText.join(" ");
            setText(newText);
    }
    
    // We can also upload txt file using this -> 

    // const readTxt = (event) => {
    //     let file = event.target.files[0];
    //     let reader = new FileReader();
    //     reader.onload = function(event){
    //         setText(event.target.result);
    //     };
    //     reader.readAsText(file);
    // }

     
    // Adding a Capitalize button (first letter will be in capital) -

      // To add Capital Letter we use 3 main function - charAT , toUppercase and slice
      // charAt will show the string as it is - 

      // to uppercase will convert all string in uppercase and
      // slice will show the first letter in capital and convert other in lower case - 
      // eg - slice(1) will show 1st letter in capital and convert all in lower
      // and slice(2) will show first 2 letter in capital and convert all in lower

      // but by applying this it will show the only first letter of the whole sentence as in Capital
      // So we use FOR LOOP to acheive - 

//  const ChangeToCapitalizecase = () => {
    
//     let NewUpCase = FirstVarAsState.split(" ");

//     const ArrForCapital = NewUpCase;

//     for (let i = 0; i < ArrForCapital.length; i++) {
//       ArrForCapital[i] = ArrForCapital[i].charAt(0).toUpperCase() + ArrForCapital[i].slice(1)
      
//     }

//     const UpdatedCase = ArrForCapital.join(" ");
//     UpdateVarasState(UpdatedCase);
//   };


      const sort = () => {
        let sorting = text.split(" ");
        sorting = sorting.sort();
        let mem = "";
        for (let i of sorting) {
          mem += i + " ";
        }
        setText(mem);
      };

      // I have created a button to change the font-style of the text

      // 1st use a useState hook to define the font name
      const [font, setFont] = useState("");

      //2nd declear the inline font style into the textarea using the hook (font)

      //3rd create the button to oparate the font changing function

      //4th declear the function
      const fontFami = ()=>{
              alert("make sure that the font is installed in your device")
              let input = prompt("Enter the font name")
              setFont(input)
          }

        
          // This function converts the text case(inverse given text)
          // input: ThIs
          // output: tHiS
          
          const handleInverseClick = ()=>{
                  let newText =''
                  for (const letter of text) {
          
                      if (letter === letter.toLowerCase()) {
                          newText = newText+(letter.toUpperCase());
                      } else {
                          newText = newText+(letter.toLowerCase());
                      }
                  }
                  setText(newText);
              }

              // This function finds a specific word and deletes all that specific word

              const [fword, findWord] = useState("");

              const handleFind=(event) =>{
                console.log("change hua");
                findWord(event.target.value)
            }
              const handledelete=() =>{
                let newText = text.replaceAll(fword,"");
                setText(newText);
            }

            // Function to break paragraph into 1 sentence per line.
      
            const handleSPerLineClick =() =>{
      let newText = text.replaceAll('.',"\n");
      setText(newText);
  }  

//   My Feature: It will take a binary string and return its decimal equivalent.


// const handleBinToDec = () => {
//     let len = text.length;
//     let x = 0;
//     for (let i = 0; i < len; i++) {
//       x = x + (text[i] - "0") * (1<<(len - i - 1));
//     }
//     // console.log(x);
//     let newText = x.toString();
//     setText(newText);
//   };



  // Sentence count: 
  // {text.split(/[.?!]\s/).length}

  // Paragraph count: 
  // {text.split(/\r\n|\r|\n/).length}

    return (
        <>
        <div className="container-big" >
    <h1 className="my-3">{props.heading}</h1>

    <div class="mb-3" >
        <label htmlFor="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="10" onChange={handleOnChange} style={{backgroundColor: props.mode , fontFamily:font, color: props.mode ==='dark'? 'white':'black'}}></textarea>
        <div className="container mt-4" >
        <h4>find word</h4>
        <textarea className="form-control" value={fword} id="myBox" onChange={handleFind}  rows="1"></textarea>
          </div>
        {/* <textarea style={{fontFamily:font}} className="form-control bg-info " id="inputText" rows="10" value={text}  onChange={handleOnChange}></textarea> */}
        <button disabled ={text.length ===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled ={text.length ===0} className="btn btn-success my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button disabled ={text.length ===0} className="btn btn-danger my-2 mx-2" onClick={clear}>Clear Text</button>
        {/* <button disabled ={text.length ===0} className="btn btn-danger my-2 " onClick={extractEmail}>Extract Email</button> */}
        {/* <button disabled ={text.length ===0} className="btn btn-dark my-2 mx-2" onClick={DarkMode}>{insidetext}</button> */}
        <button disabled ={text.length ===0} className="btn btn-success my-2 " onClick={handleCopy}>Copy Text</button>
        <button disabled ={text.length ===0} className="btn btn-success my-2 mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled ={text.length ===0} onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        <button disabled ={text.length ===0} onClick={CapitaliseFirstWord} className="btn btn-warning my-2">Capitalise First Word</button>
        <button disabled ={text.length ===0} onClick={handleReverse} className="btn btn-warning my-2 mx-2">Reverse Text</button>
        <button disabled ={text.length ===0} className="btn btn-primary " onClick={handleVoClick}>Count no. of Vowels</button>
        <button disabled ={text.length ===0} className="btn btn-primary mx-2" onClick={handleCoClick}>Count no. of Consonants</button>
        <button disabled ={text.length ===0} className='btn btn-dark' onClick={downloadTxtFile}>Download Text</button>
        <button disabled ={text.length ===0} className='btn btn-dark mx-2' onClick={handleSentenceCaseClick}>Sentence Case</button>
        <button disabled ={text.length ===0} className='btn btn-dark mx-2' onClick={handleCapitalizeWordClick}>Capitalize Case</button>
        {/* <button disabled ={text.length ===0} className='btn btn-dark mx-2' onClick={handleconverter}>Handle Converter</button> */}
        <button disabled ={text.length ===0} className='btn btn-dark mx-2' onClick={handleDuplicates}>Handle Duplicates</button>
        <button disabled ={text.length ===0} className='btn btn-dark mx-2' onClick={sort}>Sort</button>
        <button title="Change Font" disabled ={text.length ===0} onClick={fontFami} className="btn btn-warning m-1 rounded-pill">Change Font</button>
        <button title="Change Font" disabled ={text.length ===0} onClick={handleInverseClick} className="btn btn-success m-1 rounded-pill">Handle Inverse Click</button>
        <button className="btn btn-primary mx-2" disabled ={text.length ===0} onClick={handledelete}>Delete Specific Word</button>
        <button className="btn btn-primary mx-2" disabled ={text.length ===0} onClick={handleSPerLineClick}>Paragraph to Line</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleBinToDec}>Binary to Decimal</button> */}
    </div>
    
    <div className="container" style={{backgroundColor: props.mode ==='dark'? 'light':'dark', color: props.mode ==='dark'? 'light':'dark'}}>
    {/* <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange = {readTxt}/> */}
        <h1>Your Text Summary</h1>

       <p> {text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p> {/*agar string space se end ho rhi ho to length -1 kar do using JS Logic otherwise number of words 1 jaada milega if the string ends with a space. This split is giving us 1 character even when there is no character in it */}
       <p> {countWords(text)} words and {text.length} characters</p> {/*agar string space se end ho rhi ho to length -1 kar do using JS Logic otherwise number of words 1 jaada milega if the string ends with a space. This split is giving us 1 character even when there is no character in it */}
        <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length} Minutes read</p> {/* Taaki jab koi word typed hi na ho to 0 minutes read dikhaaye*/}
        {/* <p><b>This is like the Word Counter on Google</b></p>  */}
        <h3 className='my-3'>Preview</h3>       
        {/* <div style ={{height: "100px" , backgroundColor: "red", color: "white" }}> */}
        <p>{text}</p>          {/* This text would be {this.text} if we were using class based components*/}
        {/* </div> */}
        <h3>You have entered:</h3>
    <p>{count} No. of Vowels</p>
    <p>{count1} No. of Consonants</p>
    </div>
    </div>
</>
  )
}
