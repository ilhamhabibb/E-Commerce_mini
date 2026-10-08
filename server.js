const express = require('express');
const app = express();
const PORT = 3000;

// Sajikan file static dari folder 'public'
app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});