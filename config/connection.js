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
    user: 'sql8630449',
    password: 'tDyaD7tBEt',
    database: 'sql8630449', 
})

//connect to database
mysqlConnection.connect((err) => {
    if (err){
        console.log(err);
    }else{
        console.log('connection succeded');
    }
})


module.exports =mysqlConnection ;