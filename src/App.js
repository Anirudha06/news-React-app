import "./App.css";

import React, { useState} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark')
      // document.body.style.backgroundColor='rgb(28 56 86)';
    }
    else
    {
        setMode('light');
        // document.body.style.backgroundColor='white';
    }
  }
  const pageSize = 15;


    return (
      <div>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
            // onLoaderFinished={() =>{setProgress(10)}
          />
          <Routes>
            <Route exact path="/General" element={<News mode={mode} setProgress={setProgress} key="General " pageSize={pageSize} country="in" category="General" />} />
            <Route exact path="/Business" element={<News mode={mode} setProgress={setProgress} key="Business " pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News mode={mode} setProgress={setProgress} key=" Entertainment " pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/General" element={<News mode={mode} setProgress={setProgress} key="General " pageSize={pageSize} country="in" category="General" />} />
            <Route exact path="/Health" element={<News mode={mode} setProgress={setProgress} key="Health " pageSize={pageSize} country="in" category="Health" />} />
            <Route exact path="/Science" element={<News mode={mode} setProgress={setProgress} key="Science" pageSize={pageSize} country="in" category="Science" />} />
            <Route exact path="/Sports" element={<News mode={mode} setProgress={setProgress} key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News mode={mode} setProgress={setProgress} key="Technology" pageSize={pageSize} country="in" category="Technology" />} />
            {/* <Route exact path="/home" element={<News mode={mode} setProgress={setProgress} pageSize={pageSize} country="in" category="sports" />} /> */}
          </Routes>
        </Router>
      </div>
    );
    
    
  }
  export default App
