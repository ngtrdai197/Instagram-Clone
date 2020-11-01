import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

const SAY_HI = gql`
  query sayHi {
    sayHi
  }
`;

function App() {
  const { data, loading } = useQuery(SAY_HI);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!loading &&  data.sayHi}
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
  );
}

export default App;
