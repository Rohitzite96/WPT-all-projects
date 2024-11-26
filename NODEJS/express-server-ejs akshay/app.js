const express = require('express')
const app = express()
const path = require("path");
//CORS => Cross origin resource 
const cors = require("cors");
// const mysql = require("mysql2");
const bodyParser = require("body-parser");

const loginRouter = require("./routers/login")  //  "./" means current folder
const registerRouter = require("./routers/register")  //  "./" means current folder

// what is middleware??
/*
  
*/
//provide client url in cors.. this is known as proxy
app.use(cors("http://localhost:3000")) //cors-middleware

app.use(bodyParser.json())

app.use("/login",loginRouter); 
app.use("/registration",registerRouter); 

app.set("view engine","ejs") //setting a view template engine ejs to default engine



const basePath = path.join(__dirname, "pages")

// const getConnection = () => {
//   return con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "persondb"
//   });
  // return con;
// }


app.get('/', function (req, res) {
  res.sendFile(path.join(basePath, "index.html"))
})
app.get('/about', function (req, res) {
  res.render("about",{name:"Akshay"});
})
app.get('/contact', function (req, res) {
  res.sendFile(path.join(basePath, "contact.html"))
})
app.get('/services', function (req, res) {
  res.sendFile(path.join(basePath, "services.html"))
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(basePath, "404page.html"))
})

app.listen(8000,"localhost",()=>console.log("http://localhost:8000"));