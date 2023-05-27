import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/Web/LoginPage';  // Assuming LoginPage is in the same directory
import OrderPage from './Pages/Web/OrderPage';  // Assuming OrderPage is in the same directory

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