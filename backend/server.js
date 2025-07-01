const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // Required to parse JSON body from React

// ✅ MySQL DB connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alekhya'
});

// ✅ Test DB connection
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

// ✅ Default route
app.get('/', (req, res) => {
  res.json("From Backend Side");
});

// ✅ Get all contact records
app.get('/contact', (req, res) => {
  const sql = 'SELECT * FROM contact';
  db.query(sql, (err, data) => {
    if (err) {
      console.error("🔥 Error fetching data:", err.sqlMessage || err.message);
      return res.status(500).json({ message: 'Error fetching contacts' });
    }
    return res.json(data);
  });
});

// ✅ Insert form submission into DB
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  console.log("📥 Received Data:", req.body);

  const sql = 'INSERT INTO contact (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, service, message], (err, result) => {
    if (err) {
      console.error("🔥 MySQL Error:", err.sqlMessage || err.message);
      return res.status(500).json({ message: 'Failed to submit contact form' });
    }

    console.log("✅ Insert successful:", result);
    return res.status(200).json({ message: 'Contact form submitted successfully' });
  });
});

// ✅ Start server
app.listen(3000, () => {
  console.log(' Server running at http://localhost:3000');
});
