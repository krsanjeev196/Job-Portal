const mongoose = require("mongoose");
const { MongoClient } = require('mongodb');


mongoose.connect("mongodb://localhost:27017/JobPortal", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`no connection`);
})
