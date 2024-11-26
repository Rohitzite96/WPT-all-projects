const express=require("express")
const app=express()

app.listen(3000,"localhost",()=>{
    console.log("http://localhost:3000")
})

app.set("view engine","ejs")

app.get("/",(req,res)=>[
    res.render("home",{name:"Hamara Ghar "})
])

app.get("/list",(req,res)=>{
    const guest=[
        {
        name:"Akshay",
        mobile:"9876545672",
        food:true},
        {
        name:"Pratham",
        mobile:"982344672",
        food:false},
        {
        name:"Harish",
        mobile:"9229936273",
        food:true},
    ]
    res.render("welcome",{guest})
})