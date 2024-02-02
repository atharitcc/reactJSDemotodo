import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <Navbar title="Textutils" aboutText="About Textutils"/> */}
      <Navbar title="Textutils"/>
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze belows"/>
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
