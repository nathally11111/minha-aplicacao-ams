import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css'
import Contato from './Telas/Contato/Contato'
import Produtos from './Telas/Produtos/Produtos'

function App() {
 return (
    <Router>
        <nav className="navbar navbar-expand-lg navbar-purple">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Meu App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link to="/Produtos" className="nav-link">Produtos</Link>
              </li>
              <li className="nav-item">
                  <Link to="/Clientes" className="nav-link">Clientes</Link>
              </li>
              <li className="nav-item">
                  <Link to="/Vendas" className="nav-link">Vendas</Link>
              </li>
              <li className="nav-item">
                  <Link to="/Contato" className="nav-link">Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-3'>
        <Routes>
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Produtos" element={<Produtos />} />
          <Route path="/" element={<Produtos />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
