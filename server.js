const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/bio', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bio.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
