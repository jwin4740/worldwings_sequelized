// Set up MySQL connection.
var mysql = require("mysql");
var pool;


if (process.env.JAWSDB_URL) {
  pool = mysql.createPool({
    host: 'wvulqmhjj9tbtc1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'dlm4rgt37q308ite',
    password: 'dayuxqnae55nyfwy',
    database: 'wgbgjjdudztlge8l'
  });
} else {
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'platinum',
    database: 'ww2_db'
  });
}

pool.getConnection(function (err, connection) {
    console.log("connected");
    if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});


// Export pool for our ORM to use.
module.exports = pool;