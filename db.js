var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/batch6");

var studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    email:{
        type:String,
        unique:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    createdDt:{
        type:Date,
        default:Date.now()
    }
})

exports.Student=mongoose.model('Student',studentSchema,'students')

var bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author: String
})

exports.Book=mongoose.model('Book',bookSchema,'books')
