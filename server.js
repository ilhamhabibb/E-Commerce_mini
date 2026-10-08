const express = require('express');
const app = express();
const PORT = 3000;

// Sajikan file static dari folder 'public'
app.use(express.static('public'));
app.use(express.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '1234') {
        res.json({ message: 'Login berhasil!', token: 'abc123token' });
    } else {
        res.status(401).json({ message: 'Login gagal!' });
    }
});

app.post('/api/checkout', (req, res) => {
    const { items } = req.body;
    res.json({ message: 'Checkout sukses!', totalItems: items.length });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop Gaming', price: 15000000 },
        { id: 2, name: 'Mouse Wireless', price: 250000 }
    ]);
});