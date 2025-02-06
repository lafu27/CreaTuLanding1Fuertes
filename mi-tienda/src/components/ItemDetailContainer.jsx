import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../services/api';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        setLoading(true);
        const data = await getProductoById(id);
        setProducto(data);
      } catch (error) {
        setError('Error al cargar el producto');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

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
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;