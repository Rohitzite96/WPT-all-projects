const path=require("path")
const fs=require("fs")

// console.log(__dirname)
// // R:\cdac aug24\WPT\NODEJS\fs-module\
// console.log(process.cwd())// cwd() current work directory
// R:\cdac aug24\WPT\NODEJS\fs-module

const filePath=path.join(__dirname,"files","profile.txt")
console.log(filePath)
// R:\cdac aug24\WPT\NODEJS\fs-module\files\profile.txt
const data=fs.readFileSync(filePath,"utf-8")
console.log(data)