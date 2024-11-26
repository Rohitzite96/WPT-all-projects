const errordiv=document.getElementById("error")
const historyList=document.querySelector("#history-list")
const history=[]
const operations=["+","-","/","!(fact)","%","Area of circle=","Area of rect=","evenodd"]

/* push() add value
   unshift() to add value at start 
   pop() delete from last
   shift() delete from start

   splice() add/remove element from any index

   Iterating functions
   HOF(High order functions) callback function forEach(), filter(), map()

    // aisa function jiske arguement me function aata hai, aise function ko HIGH ORDER FUNCTION kehte hai,
    // argumented function hai usko call back function kehte hai.


   Assignment
    area of circle
    area of rectanglec
    factorial
    even odd
  


*/
function getParseHistoryList()
{
    return JSON.parse(localStorage.getItem("history"))
}

function addListEvent(){ const lists=document.querySelectorAll("#history-list > li")

  lists.forEach((li)=>{
  li.addEventListener("click",async ()=>{
    const bothSide=li.innerHtml.split("=")
    document.querySelector("#result").innerHtml=bothsides[0]
    
    let operand=null
    operations.forEach((op)=>
    {
      if(bothSides[1].includes(op))
      {
        operand=bothSides[1].split(op)
      }

    })
    document.querySelector("#num1").value= await bothsides[0]
    document.querySelector("#num2").value= await bothsides[1]
        })

  })
}

//addEventListener() removeEventListner()
document.querySelector("#filter").addEventListener("change",function(){
  const op=this.value
  if(op==="all"||op===""){
    printHistoryList(getParseHistoryList())
  }
  else{
  // console.log(op)
    const parseHistory=getParseHistoryList()
    const filteredParseHistory=parseHistory.filter(function(e){
      return op===e.op
})

    printHistoryList(filteredParseHistory)
}

})



function addToHistory(num1, num2,r,op)
{
    const exp={num1,num2,result:r,op}
    history.push(exp)
    console.table(history)
    const jsonHistory=JSON.stringify(history)//converting array into  JSON String.

    localStorage.setItem("history",jsonHistory)//local storage is window object.
    printHistoryList(getParseHistoryList())
 
}

function printHistoryList(parseHistory)
{    historyList.innerHTML=""
    parseHistory.forEach(function(e,i){
        historyList.innerHTML+=`<li class="list-group-item"> 
        <span>${e.result}</span>
        <span>=</span>
        <span>${e.num1}</span>
        <span>${e.op}</span>
        <span>${e.op==="!(fact)"?"":e.num2}</span>     
       
        </li>`//'===' matches datatype
    })
    
 
}
printHistoryList(getParseHistoryList())// call when html page load open
function addition()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=num1+num2
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"+")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}
function substraction()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=num1-num2
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"-")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}
function Multiplication()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=num1*num2
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"x")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}
function Divide()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=num1/num2
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"/")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}
function percent()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=(num1*num2)/100
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"%")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}



}
function areaofrect()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const num2= parseInt((document.getElementById("num2").value).trim())
 const result=num1*num2
 document.getElementById("result").innerHTML="Area of rectangle ="+result
 addToHistory(num1,num2,result,"Area of rect=")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}


function oddeven()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 if(num1%2===0){
 const result=document.write("even");
 }
 else{
    const result=document.write("odd");
 }
 document.getElementById("result").innerHTML="Result="+result
 addToHistory(num1,num2,result,"evenodd")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}
}

function areaofcircle()
{
  // DOM Document Object Module
  try{
 const num1= parseInt((document.getElementById("num1").value).trim())//trim()
 const result=Math.PI*num1*num1
 document.getElementById("result").innerHTML="Area of Circle = "+result
 addToHistory(num1,num2,result,"Area of circle=")
}

catch(e){
    errordiv.innerHTML=e
 console.error(e)
}

}
function factorial()
{
  try{
  const num1= parseInt((document.getElementById("num1").value).trim())//trim()
  const num=0
   f=1,i=1
  while(i<=num1){
    f=f*i;
    i++;
  }
  const result=f
  document.getElementById("result").innerHTML=`${num1}!=${result}`
  addToHistory(num1,num2,result,"!(fact)")
}

 
 catch(e){
     errordiv.innerHTML=e
  console.error(e)
}

}