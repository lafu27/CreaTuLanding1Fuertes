import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} unidades al carrito`);
  };

  if (!producto) {
    return null;
  }

  return (
    <div className="card bg-dark text-light">
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={producto.imagen} 
            className="img-fluid rounded-start p-3" 
            alt={producto.nombre}
            style={{ objectFit: 'contain', height: '400px', width: '100%' }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title mb-4" style={{ color: '#a4dc34' }}>{producto.nombre}</h2>
            <p className="card-text">{producto.descripcion}</p>
            <h4 className="card-text mb-4">$ {producto.precio.toLocaleString()}</h4>
            
            <div className="mb-4">
              <h5 style={{ color: '#a4dc34' }}>Especificaciones:</h5>
              <ul className="list-unstyled">
                {Object.entries(producto.especificaciones).map(([key, value]) => (
                  <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
              </ul>
            </div>

            <div className="mb-3">
              <p className="mb-2">Stock disponible: {producto.stock}</p>
              <ItemCount 
                inicial={1} 
                stock={producto.stock} 
                onAdd={onAdd}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;