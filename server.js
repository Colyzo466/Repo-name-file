const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/students', (req, res) => {
    const { name, surname, age, school } = req.body;

    // Here you can add logic to store the student information in a database if needed. For now, we'll just return the received data as a response.

    res.json({ name, surname, age, school });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});