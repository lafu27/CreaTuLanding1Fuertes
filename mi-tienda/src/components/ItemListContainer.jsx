import React, { useState, useEffect } from 'react';
import { getProductos } from '../services/api';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        setError('Error al cargar los productos');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="p-5 text-center bg-dark text-light rounded mb-4">
        <h2 style={{ color: '#a4dc34' }}>{greeting}</h2>
        <p className="lead">Los mejores componentes para tu PC al mejor precio</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map(producto => (
          <div key={producto.id} className="col">
            <div className="card h-100 bg-dark text-light">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title" style={{ color: '#a4dc34' }}>{producto.nombre}</h5>
                <p className="card-text">{producto.categoria}</p>
                <p className="card-text">$ {producto.precio.toLocaleString()}</p>
                <button className="btn btn-success" style={{ backgroundColor: '#a4dc34', borderColor: '#a4dc34' }}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;