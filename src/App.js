import ButtonPrimary from "@taskrabbit/meadow-web/lib/ButtonPrimary";
import TRThemeProvider from "@taskrabbit/meadow-web/lib/Theme";

import Button from "./components/Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <TRThemeProvider>
      <div className="App">
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
          <Button onClick={() => console.log("WAH")}>DOGE CI</Button>
          <ButtonPrimary>MEADOW</ButtonPrimary>
        </header>
      </div>
    </TRThemeProvider>
  );
}

export default App;
