const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];


app.get('/api/items', (req, res) => {
  res.json(data);
});

const products = [
  { id: 1, name: 'product 1' },
  { id: 2, name: 'product 2' },
];


app.get('/api/products', (req, res) => {
  res.json(products);
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});