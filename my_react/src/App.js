import logo from "./logo.svg";
import "./App.css";

import LoginForm from "./components/Login";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    /*<div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <>
      <Navbar />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;
