var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var students=require("./routes/students")
var books=require("./routes/books");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/api/students",students);
app.use("/api/books",books);

app.listen(8000,()=>{
    console.log("Students server is started")
})