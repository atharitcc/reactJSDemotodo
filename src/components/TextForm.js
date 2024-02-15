import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCLick = () => {
        // console.log("Uppercase was clicked");
        setText("you have clicked on handleClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }

    const handleLoCLick = () => {
        // console.log("Lowercase was clicked");
        setText("you have clicked on handleClick");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")
    }


    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied text ","success")
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed ExtraSpaces","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    var wordCount = text.split(/\s+/).filter((element)=>{
        return element.length!==0
    }).length;
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-2 my-1' onClick={handleUpCLick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleLoCLick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy text</button>
            <button className='btn btn-primary mx-2 my-1' onClick={handleExtraSpace}>Remove extra spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{wordCount} words and {text.length} charcters</p>
            <p>{0.008 * wordCount } Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox to review it here"}</p>
        </div>
        </>
    )
}
