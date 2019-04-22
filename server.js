var express=require("express");
var app=express();

var students=[
    {
        id:1,
        name:"Varma"
    },
    {
        id:2,
        name:"Neelima"
    },
    {
        id:3,
        name:"Suma"
    }
]

app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("Welcome to Batch 6 Server")
})

app.get("/api/students",(req,res)=>{
    res.send(students)
})

app.listen(7000,()=>{
    console.log("Server is started")
})