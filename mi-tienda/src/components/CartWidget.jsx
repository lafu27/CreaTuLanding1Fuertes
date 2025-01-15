import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center position-relative" style={{ color: '#a4dc34', cursor: 'pointer' }}>
      <ShoppingCart className="me-2" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3
      </span>
      <div className="ms-2 d-none d-lg-block">
        <span className="text-light">Carrito</span>
      </div>
    </div>
  );
};

export default CartWidget;