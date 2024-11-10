const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const { body, validationResult } = require('express-validator');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Assuming index.html is in a folder named 'public'

// Connect to SQLite database
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the in-memory SQLite database.');
});

// Create students table
db.serialize(() => {
    db.run(`CREATE TABLE students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        surname TEXT,
        age INTEGER,
        school TEXT
    )`);
});

// API endpoint to receive student information with validation
app.post('/api/students', [
    body('name').isString().notEmpty(),
    body('surname').isString().notEmpty(),
    body('age').isInt({ min: 0 }),
    body('school').isString().notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, age, school } = req.body;
    const sql = `INSERT INTO students (name, surname, age, school) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [name, surname, age, school], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, surname });
    });
});

// API endpoint to receive student information
app.post('/api/students', (req, res) => {
    const { name, surname, age, school } = req.body;
    const sql = `INSERT INTO students (name, surname, age, school) VALUES (?, ?, ?, ?)`;
    
    db.run(sql, [name, surname, age, school], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID, name, surname });
    });
});

// API endpoint to get all students
app.get('/api/students', (req, res) => {
    const sql = `SELECT * FROM students`;
    
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// API endpoint to update student information
app.put('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const { name, surname, age, school } = req.body;
    const sql = `UPDATE students SET name = ?, surname = ?, age = ?, school = ? WHERE id = ?`;
    
    db.run(sql, [name, surname, age, school, id], function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ id, name, surname });
    });
});

// API endpoint to delete a student
app.delete('/api/students/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM students WHERE id = ?`;
    
    db.run(sql, id, function(err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Student deleted successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});