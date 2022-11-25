import { useState } from "react";
// import usestate from "usestate";git add
import "./App.css";
// import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#050045";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="MyNavbar"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
      </div>
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />}></Route> */}
      {/* <Route */}
      {/* exact
            path="/"
            element={ */}
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyse below"
        mode={mode}
      />
      {/* } */}
      {/* ></Route> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
