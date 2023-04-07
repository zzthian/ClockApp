import logo from './logo.svg';
import './App.css';
import User from './User';
import Clock from './Clock';


function formatName(name) {
  return name.firstName + ' ' + name.lastName;
}
const zz = {
  firstName: 'zz', 
  lastName: 'thian'
};
function App() {
  return (
    <div className="App">
      <User userName = {formatName(zz)} appVer = '1'/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
      <Clock/>
    </div>
  );
}

export default App;
