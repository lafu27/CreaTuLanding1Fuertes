import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductos, getProductosByCategoria } from '../services/api';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoriaId } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setLoading(true);
        const data = categoriaId 
          ? await getProductosByCategoria(categoriaId)
          : await getProductos();
        setProductos(data);
      } catch (error) {
        setError('Error al cargar los productos');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoriaId]);

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
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;