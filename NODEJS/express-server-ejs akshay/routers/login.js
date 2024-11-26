const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const router = express.Router();
const basePath = path.join(process.cwd(), "pages");
const {personCollection}=require("../mongoDb")

const getConnection = require("../db");

//changed the get and post link from "/login"  to "/"
router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "login.html"))
})

// MySQL connection
// router.post('/', function (req, res) {
//     // res.sendFile(path.join(basePath, "login.html"))
//     const data = req.body;
//     console.log(data);
//     try {
//         const c = getConnection()//get connection object
//         c.connect((err) => {
//             if (err) throw err;
//             console.log("Connection Successful");
//             const sql = `select * from person where email = '${data.email}' and password = '${data.password}'`;

//             c.query(sql, function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//                 // if (result.affectedRows == 1) {
//                     console.log(result);
//                     if (result.length == 1) {
//                         console.log("Login successful");
//                         res.json({ login: true, msg: "Person logged-in",person:result[0] })
//                     }
//                 // } 
//                 else {
                    
//                     res.json({ login: false, msg: "Person not logged-in" })
//                     console.log("Log-in failed")
//                 }
//             })
//         })

//     } catch (err) {
//         res.sendFile(path.join(basePath, "login.html"))
//     }
// })
// *************************************************************************************************
// *************************************************************************************************
// for Mongodb connection
router.post('/', async function (req, res) {
    // res.sendFile(path.join(basePath, "login.html"))
    const personData = req.body;
    // console.log(data);
    try {
        console.log(personData)
        const savedPerson=await personCollection.find({}, { projection: { email: 1, password: 1 } })
            console.log(savedPerson)
            // if (err) throw err;
            res.json({msg: "Logged in"})

                // if (err) throw err;
                // // console.log(result);
                // // if (result.affectedRows == 1) {
                //     // console.log(result);
                //     if (result.length == 1) {
                //         console.log("Login successful");
                //         res.json({ login: true, msg: "Person logged-in",person:result[0] })
                //     }
                // } 
                // else {
                //     res.json({ login: false, msg: "Person not logged-in" })
                //     console.log("Log-in failed")
                // }
         
       

    } catch (err) {
        console.log(err)
        res.json({msg: "Login ERROR"})
        // res.sendFile(path.join(basePath, "login.html"))
    }
})

// console.log(module);
module.exports = router;
// console.log(module);