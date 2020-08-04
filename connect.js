const mysql = require('mysql');

var connection = mysql.createConnection({
	   host: "localhost",
	   user: "dron",
	   password: "port2100",
	   database: "newkross"
});
module.exports = {connection}