import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Shop></Shop>
      </main>
    </div>
  );
}

export default App;
