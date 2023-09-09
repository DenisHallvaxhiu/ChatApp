import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu"
import "./App.css";

function App() {
  return (
    <div className="screen">
      <div className="left">
        <Menu/>
      </div>
      <div className="right">
        <Header />
      </div>
    </div>
  );
}

export default App;
