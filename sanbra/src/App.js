// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos 'Routes'
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Routes> {/* Reemplazamos Route por Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes> {/* Cerramos el bloque de Routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
