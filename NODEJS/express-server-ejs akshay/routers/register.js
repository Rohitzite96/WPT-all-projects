const express = require("express");
const path = require("path");

const router = express.Router();
const basePath = path.join(process.cwd(), "pages");

const getConnection = require("../db");
const {personCollection}=require("../mongoDb")
const {PersonModel}=require("../mongooseDb")

router.get('/', function (req, res) {
    res.sendFile(path.join(basePath, "registration.html"))
})
//MySQL connection
// router.post('/', function (req, res) {
//     const data = req.body;
//     // console.log(data);
//     try {
//         const c = getConnection()//get connection object
//         c.connect((err) => {
//             if (err) throw err;
//             console.log("Connection Successful");
//             const sql = `insert into person (name,mobile,password,email,gender) 
//             values (
//             '${data.name}',
//             '${data.mobile}',
//             '${data.password}',
//             '${data.email}',
//             '${data.gender}')`;

//             c.query(sql, function (err, result) {
//                 if (err) throw err;
//                 if (result.affectedRows == 1) {
//                     console.log("Insert successful");
//                     // console.log(result);
//                     res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
//                 } else {
//                     res.json({ affectedRows: 0, msg: "Person not registered" })
//                     console.log("not inserted")
//                 }
//             })
//         })

//     } catch (err) {
//         console.log(err);
//         res.sendFile(path.join(basePath, "registration.html"))
//     }

// })

// *************************************************************************************************
// *************************************************************************************************

//mongodb connection
// router.post('/',async function (req, res) {
//     const persondata = req.body;
//     // console.log(data);
//     try {
//         const savedPerson=await personCollection.insertOne(persondata)
//                 console.log(savedPerson)
//                 res.json({msg: "Person registered" })
//                 // if (err) throw err;
//                 // if (result.affectedRows == 1) {
//                 //     console.log("Insert successful");
//                 //     // console.log(result);
//                 //     res.json({ affectedRows: result.affectedRows, msg: "Person registered" })
//                 // } else {
//                 //     res.json({ affectedRows: 0, msg: "Person not registered" })
//                 //     console.log("not inserted")
//                 // }

//     } catch (err) {
//         console.log(err);
//         res.json({msg: "error in register" })
//         // res.sendFile(path.join(basePath, "registration.html"))
//     }

// })

// *************************************************************************************************
// *************************************************************************************************

//mongoose collection
router.post('/',async function (req, res) {
    const personData = req.body;
    // console.log(data);
    try {

        const person=new PersonModel(personData)
        const savedPerson=await person.save()
                console.log(savedPerson)
             
                if (savedPerson) {
                    console.log("Insert successful");
                    // console.log(result);
                    res.json({ msg: "Person registered" })
                } else {
                    res.json({ affectedRows: 0, msg: "Person not registered" })
                    console.log("not inserted")
                }

    } catch (err) {
        console.log(err);
        res.json({msg: "error in register" })
        // res.sendFile(path.join(basePath, "registration.html"))
    }

})

module.exports = router;