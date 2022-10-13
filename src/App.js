import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/item/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/detalles/:id' element={<ItemDetailContainer/>} />
          </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}


export default App;
