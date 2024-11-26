const mysql=require("mysql2")

const getConnection=()=>{
  
    return con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rohit@0311",
    database:"persondb"
  });
    
  
  }
module.exports={getConnection}  