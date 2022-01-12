var express= require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    //properties...
    host='localhost',
    user:'root',
    password:'',
    database:'job_portal'
});

connection.connect(function(error){
    if(error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
});

app.get('/', function(req, resp){
    //about mysql
    connection.query("select * from table test", function(error, rows, fields){
        //callback
        if(error){
            console.log('error in the query');
        }else{
            console.log('successful query');
            //parse with your rows
        }
    })
})

app.listen(3307);