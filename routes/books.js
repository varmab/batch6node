var express=require("express");
var router=express.Router();

//get all books
router.get("/",(req,res)=>{
    res.send(books);
})

module.exports=router;