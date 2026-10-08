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
        { id: 1, name: 'Laptop Gaming Pro', price: 15000000, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&q=80' },
        { id: 2, name: 'Mouse Wireless', price: 250000, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&q=80' },
        { id: 3, name: 'Keyboard Mechanical', price: 850000, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&q=80' }
    ]);
});