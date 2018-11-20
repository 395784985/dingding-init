var mysql = require('mysql');
var mysqlHelp = {};

mysqlHelp.option = {
    host: 'localhost',
    port: '3306',
    database: 'dba',
    user: 'root',
    password: 'root'
};

mysqlHelp.connection = mysql.createConnection(option);
connection.connect(function (err) {
    if (err) {
        console.log("mysql open connection failure");
    } else {
        console.log("mysql open connection success");

        connection.query("select * from users", function (err, result) {
            console.log(result.length);
            for ( var index in result) {
				console.log(result[index].username);
			}
        });

        connection.end(function (err) {
            if (err) {
                console.log("mysql close connection failure");
            } else {
                console.log("mysql close connection success");
            }
        }); 
    }
})
console.log("hello");

module.exports = mysqlHelp;