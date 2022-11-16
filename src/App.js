import './App.css';
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./context/CartContext"
import {Cart} from "./components/Cart/Cart"



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/item/:categoriaId' element={<ItemListContainer/>} />
              <Route path='/detalles/:detalleId' element={<ItemDetailContainer/>} />
              <Route path='/Cart' element={<Cart/>} />
            </Routes>
        </header>
      </div>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
