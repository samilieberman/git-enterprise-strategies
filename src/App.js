import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
        <p> My name is Caroline Kroll and this is my project </p>
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <p>
          Hello World! This is our team project.
        </p>	
      </header>
    </div>
  );
}

export default App;
