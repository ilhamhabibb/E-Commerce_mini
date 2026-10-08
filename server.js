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

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});