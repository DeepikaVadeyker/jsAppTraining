import React,{ useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
 
  return (
    <div>
      <header>
        <h1>Items</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
      <header>
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </header>
     
    </div>
  );
}

export default App;