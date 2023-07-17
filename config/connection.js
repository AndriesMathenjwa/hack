var mysql =  require("mysql");

//Create Connections
// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'hackersity', 
// })

var mysqlConnection = mysql.createConnection({
    host: 'sql8.freemysqlhosting.net',
    user: 'sql8632682',
    password: 'pGXlzf7Jbt',
    database: 'sql8632682', 
})

//connect to database
mysqlConnection.connect((err) => {
    if (err){
        console.log(err);
    }else{
        console.log('connected');
    }
})


module.exports =mysqlConnection ;