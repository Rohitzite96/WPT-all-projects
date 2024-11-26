const displayDiv = document.getElementById("Display");
let intervalId = null;
let s = 0;
let min = 0;
let hr = 0;
let ms = 0;
let flag=false
function startClock() {
    if(!flag){
        flag=true
  intervalId = setInterval(function () {
    if (s === 60) {
      min++;
      s = 0;
    }
    if (min === 60) {
      hr++;
      min = 0;
    }
    s++;

    displayDiv.innerHTML = `${hr} hr : ${min} min : ${s} sec`;
  }, 999    );}
}
function stopClock() {
  
  clearInterval(intervalId);
  flag=false
}

function resetClock() {
    alert("are you sure you want to reset?")
  clearInterval(intervalId);
  hr = 0;
  min = 0;
  s = 0;
  displayDiv.innerHTML = "00 : 00 : 00 ";
  flag=false
}
