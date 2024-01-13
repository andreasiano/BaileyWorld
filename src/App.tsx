
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CartContextProvider } from './context/CartContext';


const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App


