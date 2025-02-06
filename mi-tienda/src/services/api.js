const BASE_URL = 'http://localhost:3001';
const DELAY = 1000; 

const simulateDelay = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, DELAY);
  });
};

export const getProductos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/productos`);
    const data = await response.json();
    return simulateDelay(data);
  } catch (error) {
    console.error("Error fetching productos:", error);
    throw error;
  }
};

export const getProductoById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/productos/${id}`);
    const data = await response.json();
    return simulateDelay(data);
  } catch (error) {
    console.error("Error fetching producto:", error);
    throw error;
  }
};

export const getProductosByCategoria = async (categoria) => {
  try {
    const response = await fetch(`${BASE_URL}/productos?categoria=${categoria}`);
    const data = await response.json();
    return simulateDelay(data);
  } catch (error) {
    console.error("Error fetching productos by categoria:", error);
    throw error;
  }
};