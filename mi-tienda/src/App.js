import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './custom.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
          path="/" 
          element={<ItemListContainer greeting="¡Bienvenidos a PC Monster Components!" />} 
        />
        <Route 
          path="/categoria/:categoriaId" 
          element={<ItemListContainer greeting="¡Bienvenidos a PC Monster Components!" />} 
        />
        <Route 
          path="/item/:id" 
          element={<ItemDetailContainer />} 
        />
        <Route 
          path="*" 
          element={
            <div className="container mt-5 text-center">
              <h2 style={{ color: '#a4dc34' }}>404: Página no encontrada</h2>
              <p className="text-light">La página que estás buscando no existe.</p>
            </div>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;