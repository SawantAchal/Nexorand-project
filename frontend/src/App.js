import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </div>
  );
}

export default App;
