const http=require("http")
const fs=require("fs")
const path=require("path")
const app=http.createServer((req,res)=>{

    const basePath=path.join(__dirname,"pages")
    if(req.url==="/"){
        const pageText= fs.readFileSync(path.join(basePath,"index.html"),"utf-8")
        res.write(pageText)
        res.end()}
   else if(req.url==="/contact"){
         const pageText= fs.readFileSync(path.join(basePath,"contact.html"),"utf-8")
        res.write(pageText)
        res.end()}
    else if(req.url==="/about"){
        const pageText= fs.readFileSync(path.join(basePath,"about.html"),"utf-8")
        res.write(pageText)
        res.end()}
    else {
        const pageText= fs.readFileSync(path.join(basePath,"404page.html"),"utf-8")
        res.writeHead(404,{"Content-type":"text/html"})//to write status code
        res.write(pageText)
        res.end()
    }

})
app.listen(8000,"localhost",()=>{
    console.log("http//localhost:8000")
})
