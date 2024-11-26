
const mongoose = require('mongoose');

const url="mongodb://localhost:27017/persondb"
const  con=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
con.then((result)=>
{
    console.log(result)
    console.log("Connection Successful")
}).catch((err)=>
{
    console.error(err)
})

//models/ class(java)/object(JS)
const personSchema=new mongoose.Schema({
    name:String,
    gender:String,   
    mobile:{type:String,unique:true},
    email:{type:String,unique:true},
    password:{type:String}
})

const PersonModel=mongoose.model("person",personSchema)
// const personCollection=database.collection("person")
// const employeeCollection=database.collection("employee")

// module.exports={personCollection,employee Collection} for mongo
module.exports={PersonModel}