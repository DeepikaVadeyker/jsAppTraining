import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const [itemsVisible, setItemsVisible] = useState(false); // to toggle display


  const fetchItems = () => {
    fetch('http://localhost:5000/api/items')  // <-- GET request
      .then((response) => response.json())
      .then((data) => {

        setItems(data);
        setItemsVisible(true);
      })
      .catch((error) => console.error('Error fetching items:', error));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newItem }),
    })
      .then((response) => response.json())
      .then((data) => setItems([...items, data]));

    setNewItem('');
            setItemsVisible(false);

  };


  // if (loading) return <p>Loading...</p>;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Items</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add a new item"
            style={{ marginRight: "10px", padding: "5px" }}

          />
          <button type="submit">Add Item</button>
        </form>
        <button
          onClick={fetchItems}
          style={{ marginTop: '20px', padding: '8px 12px', cursor: 'pointer' }}
        >
          Get All Items
        </button>
        {itemsVisible && (
          <>
            <h2>Item List</h2>
            <ul>
              {items.length > 0 ? (
                items.map((item) => <li key={item.id}>{item.name}</li>)
              ) : (
                <p>No items found.</p>
              )}
            </ul>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
