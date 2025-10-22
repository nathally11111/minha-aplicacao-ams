import React from 'react';
import './css/App.css'

import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Contato from './Telas/Contato/Contato'
import Produtos from './Telas/Produtos/Produtos'
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

    <div style={{ textAlign: 'center' }}>
     <h1>Site em React</h1>
    </div>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
  
    </Router>
  );
  
}
import { Route } from 'react-router-dom';

export default App;
