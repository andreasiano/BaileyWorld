
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CartContextProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <main>
        <ToastContainer
          position="top-right" // or "top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{
            // Customize the style of the toast container
            width: 'auto',
            minWidth: '300px',
          }}
        />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App


