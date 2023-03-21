import React, { useState } from 'react'

const TextForm = (props) => {
    let [text,setText]=useState("")
    let up=()=>{
        // console.log("Text is Clicked");
        let newText= text.toUpperCase()
        setText(newText)
        props.showalert("Converted to UpperCase", "Success")
    }
    let down=()=>{
        // console.log("Text is Clicked");
        let newText= text.toLowerCase()
        setText(newText)
        props.showalert("Converted to LowerCase", "Success")
    }

    let change=(e)=>{
        // console.log("changed")
        setText(e.target.value)
    }
    let clear=()=>{
      let cleartext=""
      setText(cleartext)
    }
    let rev=()=>{
      let a=text.split("")
      let b=a.reverse()
      let c=b.join("")
      setText(c)
      props.showalert("Texts are Reversed", "Success")
    }

    let copy=()=>{
      navigator.clipboard.writeText(text)
      .then(()=>{
      })
      props.showalert("Coped to Clipboard!", "Success")
    }
  return (
    <>
    <div className="container" style={{ color:props.mode ==="dark"?"white":"black"}} >
    <h1>{props.headings}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} id="form" style={{ backgroundColor:props.mode ==="dark"?"#03031c":"light", color:props.mode ==="dark"?"white":"black" }} rows="9" onChange={change}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={up}>Upper Case</button>
<button className="btn btn-primary mx-2" onClick={down}>Lower Case</button>
<button className="btn btn-primary mx-2" onClick={rev}>Reverse Text</button>
<button className="btn btn-primary mx-2" onClick={copy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>


    </div>
    <div className="conainter my-5" style={{ color:props.mode ==="dark"?"white":"black"}}>                    
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} <b>Words</b> and {text.split("").length} <b>Characters</b></p>
        {/* split(" "): split with a space provides an array */}
        <p>{0.008*text.split(" ").length} Mintues to read</p>
        <h2>Preview</h2>
        <p>{text.length>1?text:"Enter something in the box to preview."}</p>
    </div>
    </>
  )
}

export default TextForm