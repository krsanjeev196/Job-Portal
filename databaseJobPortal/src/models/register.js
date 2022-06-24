const mongoose= require("mongoose");

const employeeSchema = new mongoose.Schema({
name : {
    type:String,
    required: true
},
email: {
    type:String,
    required: true,
    unique:true
},
mobile : {
    type: Number,
    required: true,
    unique:true
},
password : {
    type:String,
    required: true
},
confirmpassword : {
    type:String,
    required: true
}
})

//creating collection
const Register = new mongoose.model("UserData",employeeSchema);

module.exports = Register;