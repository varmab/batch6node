var express=require("express")

var router=express.Router();

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
router.route("/")
    .get((req,res)=>{
        res.send(students);
    })
    .post((req,res)=>{
        var newStudent=req.body;
        students.push(newStudent);
        res.send(students)
    })

//get single student
router.route("/:id")
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

module.exports=router;