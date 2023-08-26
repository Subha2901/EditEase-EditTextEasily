import React, { useState } from 'react';

export default function Textarea(props) {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    const textareaDarkStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#0e1314a6'
    }

    const handleUpCase = () => {
        if (text.length !== 0) props.showAlert("Text is converted to uppercase", "success");
        else props.showAlert("No text found.", "warning");
        setText(text.toUpperCase());
    }

    const handleLowCase = () => {
        if (text.length !== 0) props.showAlert("Text is converted to lowercase", "success");
        else props.showAlert("No text found.", "warning");
        setText(text.toLowerCase());
    }

    const handleClear = () => {
        if (text.length !== 0) props.showAlert("Textarea is cleared.", "success");
        else props.showAlert("No text found.", "warning");
        setText('');
    }

    const handleCopy = () => {
        if (text.length !== 0) props.showAlert("Selected text has been copied", "success");
        else props.showAlert("No text found.", "warning");

        const selected = document.querySelector('textarea');
        if (selected.value.substring(selected.selectionStart, selected.selectionEnd).length === 0) {
            selected.select();
        }
        document.execCommand('copy');
    }

    const handleExtraSpace = () => {
        if (text.length !== 0) props.showAlert("All the extra space has been removed.", "success");
        else props.showAlert("No text found.", "warning");
        setText(text.trim().split(/\s+/).join(" "));
    }


    function handleChnage(event) {
        const newText = event.target.value;
        setText(newText);
        var l = newText.trim().split(/\s+/).length;
        if (l === 1 && newText.length === 0) {
            setCount(0);
        }
        else setCount(l);
    }

    return (
        <>
            {/* <div className="form-floating">
                <textarea className="form-control border border-dark-subtle shadow-sm p-3 mb-5 rounded" id="floatingTextarea" value={text} onChange={handleChnage}></textarea>
                <label htmlFor="floatingTextarea">Enter Text    ({count} words {text.length} characters)</label>
            </div> */}

            <div className='mx-sm-2 mx-lg-5 mx-md-5 mx-xl-5 px-lg-5 px-md-5 px-xl-5 pt-4'>
            <div className='container pb-2' ><p className='h5'> <span className='h1'>Try EditEase </span> - Convert to Uppercase | Lowercase | Remove Extra Space | Copy Text</p></div>
            {/* <h1 className='h1'>Try EditEase </h1> <h3> - Convert to Uppercase | Lowercase | Remove Extra Space</h3> */}

                <div className="form-floating " style={textareaDarkStyle}>
                    <textarea className="form-control border border-dark-subtle shadow-sm rounded" placeholder="Leave a comment here" id="floatingTextarea2" value={text} onChange={handleChnage} style={textareaDarkStyle}></textarea>
                    <label htmlFor="floatingTextarea2">Enter Text    ({count} words {text.length} characters)</label>
                </div>

            </div>

            <div className='container mx-lg-5 px-lg-5 py-3'>
                <button type='button' className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={handleUpCase}>Convert Uppercase</button>
                <button type='button' className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={handleLowCase}>Convert Lowercase</button>
                <button type='button' className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={handleClear}>Clear TeaxtArea</button>
                <button type='button' className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={handleCopy}>Copy Text</button>
                <button type='button' className={`btn btn-sm btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>


        </>
    )
}
