import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const productos = [
    {
      id: 1,
      nombre: "RTX 4080",
      categoria: "Tarjetas Gráficas",
      precio: 799999,
      imagen: "/img/rtx4080.png"
    },
    {
      id: 2,
      nombre: "Ryzen 9 7950X",
      categoria: "Procesadores",
      precio: 549999,
      imagen: "/img/ryzen9.png"
    }
  ];

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