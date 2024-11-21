import logo from "./logo.svg";
import "./index.css";
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
