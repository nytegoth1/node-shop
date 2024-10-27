const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3025;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the public directory

// Sample data
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, image: `http://localhost:${PORT}/images/laptop.png`, description: "Acer Laptop" },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, image: `http://localhost:${PORT}/images/phone.png`, description: "It is a Phone"},
    { id: 3, name: 'Tablet', category: 'Electronics', price: 499.99, image: `http://localhost:${PORT}/images/tablet.jpg`, description: "Android Tablet with Octa-core"},
    { id: 4, name: 'T-Shirt', category: 'Clothing', price: 19.99, image: `http://localhost:${PORT}/images/shirt.jpg`, description: "It is a Shirt"},
    { id: 5, name: 'Jeans', category: 'Clothing', price: 39.99, image: `http://localhost:${PORT}/images/jeans.jpg`, description: "They are Jeans"},
    { id: 6, name: 'Jacket', category: 'Clothing', price: 79.99, image: `http://localhost:${PORT}/images/jacket.jpg` , description: "It is a Jacket"},
    { id: 7, name: 'Book 1', category: 'Books', price: 14.99, image: `http://localhost:${PORT}/images/book1.png`, description: "A Paranormal Women's Fiction Novel"},
    { id: 8, name: 'The Home Cook', category: 'Books', price: 29.99, image: `http://localhost:${PORT}/images/book2.png`, description: "It is a Cookbook"},
    { id: 9, name: 'Army of Lies', category: 'Books', price: 19.99, image: `http://localhost:${PORT}/images/book3.png`, description: "A thrilling murder mystery story by Ryan Spell"},
    { id: 10, name: 'Z book', category: 'Books', price: 19.99, image: `http://localhost:${PORT}/images/book4.png`, description: "Blank book"},
    { id: 11, name: 'Dress', category: 'Clothing', price: 39.99, image: `http://localhost:${PORT}/images/dress1.png`, description: "A Dress"},
];

const categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
];

// Endpoints
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.use(express.static('public'));
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Route to get a specific product by ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = products.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found');
    }
});

app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Serve the index.html as the default route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
