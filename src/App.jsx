import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/header/Header';
function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
