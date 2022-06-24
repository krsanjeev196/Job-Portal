const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const app = express();


require("./db/conn");


const Register= require("./models/register");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const views_path = path.join(__dirname, "../views");

// console.log(path.join(__dirname, "../public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", views_path)

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/register", (req, res)=>{
    res.render("register");
})

//creating new user in database
app.post("/register", async(req, res)=>{
    try {
        
        // console.log(req.body.name);
        // res.send(req.body.name);
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password=== cpassword){

            const registerEmplyoee = new Register({
                name : req.body.name,
                email : req.body.email,
                mobile : req.body.mobile,
                password : req.body.password,
                confirmpassword : req.body.confirmpassword
            })

            const registered = await registerEmplyoee.save();
            res.status(201).render(index);

        }else{
            res.send("Passwords are not matching !!")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
});
