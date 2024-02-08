import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const toggleMode = () => {
    if(mode == 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze belows" mode={mode}/>
        {/* <About/> */}
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
