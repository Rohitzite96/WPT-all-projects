const fs=require("fs")
// fs.readFile("file.txt","utf-8",(err,data)=>{ //utf universal transform format is used to convert binary into string format
//     try{
// if(err){
//     throw err
// }   
//     console.log(data)
//     }
//     catch(err){
//         console.error(err)
//         return err
//     }
// })

try
{
 const data=fs.readFileSync("filesync.txt","utf-8")
 console.log(data)
}
catch(err){
    console.error(err)
}