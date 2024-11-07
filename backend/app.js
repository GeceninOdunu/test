const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
fetch('http://localhost:5000')
    .then(response => response.text())
    .then(data => console.log(data));
