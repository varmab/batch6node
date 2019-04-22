var express=require("express");
var app=express();
var bodyParser=require("body-parser");

// username=varmab&password=12346

/* 

  {
    username:varmab,
    password:123456
  }

*/

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

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

//get all students
app.route("/api/students")
    .get((req,res)=>{
        res.send(students);
    })
    .post((req,res)=>{
        var newStudent=req.body;
        students.push(newStudent);
        res.send(students)
    })

//get single student
app.route("/api/students/:id")
    .get((req,res)=>{
        var id=req.params.id

        var student=students.filter((student)=>{
            return student.id==id
        })

        res.send(student);
    })
    .delete((req,res)=>{
        var id=req.params.id;

        var newStudents=students.filter((student)=>{
            return student.id !=id
        })

        res.send(newStudents);
    })

//get all books
app.get("/api/books",(req,res)=>{
    res.send(books);
})

app.listen(8000,()=>{
    console.log("Students server is started")
})