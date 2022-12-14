import logo from './logo.svg';
import './App.css';
import ThemeProvider from './context/ThemeProvider';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar></Navbar>
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
      </div>
    </ThemeProvider>
  );
}

export default App;
