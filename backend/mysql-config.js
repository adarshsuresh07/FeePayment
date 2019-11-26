const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'payment',
  password: 'feepayment',
  database: 'feepayment'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database Connected');
});

module.exports = db;