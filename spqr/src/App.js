import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Web/LoginPage';  
import OrderPage from './Pages/Web/OrderPage';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login_w" element={<LoginPage />} />
        <Route path="/order_w" element={<OrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;