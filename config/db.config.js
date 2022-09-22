'use strict';
const mysql = require('mysql2');
//local mysql db connection
const dbConn = mysql.createConnection(
    {  
        host     : '172.31.17.54',  
        user     : 'root',  
        password : '',  
        database : 'node_mysql_crud_db'
    }
);
dbConn.connect(function(err) 
{  
    if (err) throw err;  
    console.log("Database Connected!");
});

module.exports = dbConn;