import React from 'react';
import './css/App.css'

import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Contato from './Telas/Contato/Contato'
import Produtos from './Telas/Produtos/Produtos'
function App() {
  return (
    <Router>
      <nav>
        <Link to="/Contato">Home</Link>
        <Link to="/Produto">Sobre</Link>
      </nav>

    <div style={{ textAlign: 'center' }}>
     <h1>Site em React</h1>
    </div>
    <Routes>
    <Route path="/Contato" element={<Contato/>} />
    <Route path="/Produtos" element={<Produtos/>} />
    </Routes>
  
    </Router>
  );
  
}
import { Route } from 'react-router-dom';

export default App;
