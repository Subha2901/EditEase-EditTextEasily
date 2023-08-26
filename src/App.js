import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './Component/Navbar';
import Textarea from './Component/Textarea';
import Alerts from './Component/Alerts';
import About from './Component/About';

function generateLighterShade(hexColor, percentage) {
  const color = hexColor.slice(1); // Remove the "#" from the hex code
  const rgb = parseInt(color, 16); // Convert hex to decimal
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  const newR = Math.min(r + r * (percentage / 100), 255);
  const newG = Math.min(g + g * (percentage / 100), 255);
  const newB = Math.min(b + b * (percentage / 100), 255);

  const newHexColor = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

  return newHexColor;
}

function generateDarkerShade(hexColor, percentage) {
  const color = hexColor.slice(1);
  const rgb = parseInt(color, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = rgb & 0xff;

  const newR = Math.max(r - r * (percentage / 100), 0);
  const newG = Math.max(g - g * (percentage / 100), 0);
  const newB = Math.max(b - b * (percentage / 100), 0);

  const newHexColor = `#${Math.round(newR).toString(16).padStart(2, '0')}${Math.round(newG).toString(16).padStart(2, '0')}${Math.round(newB).toString(16).padStart(2, '0')}`;

  return newHexColor;
}

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>
      setAlert(null)
      , 1500)
  }

  const handleToggle = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#142f32';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#e6ffe6';
      showAlert("Light mode is enabled", "success");
    }

  }

  const handleYellowTheme = () => {
    if (mode === 'dark') {
      console.log(generateDarkerShade('FFC107', 70));
      setMode("darkYellow");
    }
    else {
      console.log(generateLighterShade('FFC107', 70));
      setMode('lightYellow');
    }
  }

  // const bgvColor = {
  //       backgroudColor: '#142f32'
  // }

  return (
    <Router>
      <div>
        <Navbar title="TextUtils" mode={mode} handleToggle={handleToggle} handleYellowTheme={handleYellowTheme} />
      </div>
      <Alerts alert={alert} />

      <div className='container'>
        <Routes>

          <Route path="/" element={<Textarea mode={mode} handleToggle={handleToggle} showAlert={showAlert} handleYellowTheme={handleYellowTheme} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>

      </div>


    </Router>

  );
}

export default App;
