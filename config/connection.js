// Connect Node to MySQL

var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: process.env.DBconnectionuser,
        password: process.env.DBconnectionpassword,
        database: "burgers_db"
    });


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export the connection for ORM to use

module.exports = connection;