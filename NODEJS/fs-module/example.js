// const n1=11
// const n2=19
// const add=n1+n2
// console.log(add)

// window,document,history,location,screen  these objects are not available in node js because these are browser object.

// const arr=["rohit", "ashwin","harish","pratham","akshay"]

// for(e of arr){
//     console.log(e)
// }
const fs=require("fs")
const data="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit et felis pharetra molestie. Integer volutpat, libero eu blandit dignissim, orci nisi consequat lorem, sit amet scelerisque lacus ante a metus. Phasellus consequat eros urna, non vehicula nulla faucibus ut. Sed at dui luctus, sollicitudin turpis id, ultrices dolor. Proin commodo cursus dui, at pretium mauris sodales sollicitudin. In imperdiet facilisis massa, vel euismod ante pulvinar vitae. Etiam tempor felis nec malesuada tempor."
// fs.writeFile("file.txt",data,(err)=>{   //fs.writeFile("FilePath",data,anonymous function)

//     if(err){
//         console.error(err)
//         return err;
//     }
//     console.log("File write successfully...")
// }) 

fs.writeFileSync("filesync.txt",data)