const myfunction=require("./myfunction")//no destructuring
const r1=myfunction.add(23,4)
console.log(r1)

const r2=myfunction.sub(23,4)
console.log(r2)

const r3=myfunction.multiply(23,4)
console.log(r3)


// const {add,sub,multiply}=require("./myfunction")//destructuring
// const a1=add(4,2)
// console.log(a1)

// const a2=sub(3,2)
// console.log(a2)

// const a3=multiply(3,3)
// console.log(a3)

// const sum=require("./myfunction")
// const r4=add(3,5)
// console.log(r4)