import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log("uppercase was clicked");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been converted to Upper case", "success");
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been converted to Lower case", "success");
  };
  const handleCapClick = () => {
    handleLowClick();
    let newText = text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      let currCh,
        preCh = text[i - 1];
      if (preCh === " ") {
        currCh = text[i].toUpperCase();
      } else {
        currCh = text[i];
      }
      newText = newText + currCh;
    }
    props.showAlert("Your text has been Capitalized", "success");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
    //this will help us to change the value wrttien in textarea
  };

  const [text, setText] = useState(" ");
  //   setText("setText fnc used");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control mb-3"
            id="TextArea"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#322F58" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-warning " onClick={handleUpclick}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          convert to lowercase
        </button>
        <button className="btn btn-success" onClick={handleCapClick}>
          convert to capatilize+
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
