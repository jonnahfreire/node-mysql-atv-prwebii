const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql1"
});

conn.connect(function(err) {
  if (err) return false;
  return true;
});

module.exports = conn;
