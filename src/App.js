import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <ItemListContainer greeting="proyecto react" title="listado de productos"/>
      </header>
    </div>
  );
}

export default App;
