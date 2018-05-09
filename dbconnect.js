
require('dotenv').config();
var mysql = require('mysql');

// Need environment values to connect
var conn = mysql.createConnection({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

conn.connect(function(err) {
    if (err) throw err;
});
 
class DBConnect {
        
    getLastRecord(args)
    { 
        conn.query("SELECT * FROM SMGWS WHERE id = "+ parseInt( args.id ) +" limit 1", function (err, rows, fields) { 
            if (err) {
                return reject(err);
            }
            return (rows);
        }); 
    }

    addRecord(args)
    { 
        // ...
    }

    deleteRecord(args)
    { 
        // ...
    }

}

module.exports = DBConnect;