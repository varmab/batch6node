var express=require("express")
var router=express.Router();

var db=require('../db')


//get all students
router.route("/")
    .get((req,res)=>{
        db.Student.find({},(err,students)=>{
            if(err) res.send(err);
            res.send(students);
        })
    })
    .post((req,res)=>{
        var newStudent=new db.Student(req.body);
        newStudent.save((err,student)=>{
            if(err) res.status(500).send(err);
            res.status(200).send(student)
        })
    })

//get single student
router.route("/:id")
    .get((req,res)=>{
        var id=req.params.id
        db.Student.findById(id,(err,student)=>{
            if(err) res.send(err);
            res.send(student);
        })    
    })
    .delete((req,res)=>{
        var id=req.params.id;
        db.Student.findByIdAndDelete(id,(err,student)=>{
            if(err) res.send(err)
            res.send(student);
        })
    })

module.exports=router;