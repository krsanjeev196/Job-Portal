const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');


// // mongoose.connect("mongodb://localhost:27017/JobPortal", {
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true,
// //     useCreateIndex:true
// // }).then(()=>{
// //     console.log(`Connection Successful`);
// // }).catch((e)=>{
// //     console.log(`no connection`);
// // })

mongoose.connect("mongodb://localhost:27017/JOb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`no connection`);
})

// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
//      if(err) throw err;

//      //Write databse Insert/Update/Query code here..
                
// });


