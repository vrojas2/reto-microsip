// import logo from './logo.svg';
// import './App.css';
// import './styles/styles.scss';
// import './components/CRUD'

import { CRUD } from "./components/CRUD";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rama de Victor
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CRUD/>
    </div>
  );
}

export default App;
