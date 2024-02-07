import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState("dark"); // whether dark mode is enable or not
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
      <Navbar title="Textutils" mode={mode}/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze belows"/>
        {/* <About/> */}
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
