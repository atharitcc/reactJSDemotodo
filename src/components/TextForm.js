import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpCLick = () => {
        // console.log("Uppercase was clicked");
        setText("you have clicked on handleClick");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoCLick = () => {
        // console.log("Lowercase was clicked");
        setText("you have clicked on handleClick");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    var wordCount = text.split(" ").length;
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpCLick}>Convert to Uppercase</button>
            <button className='btn btn-primary' onClick={handleLoCLick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{wordCount} words and {text.length} charcters</p>
            <p>{0.008 * wordCount } Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
