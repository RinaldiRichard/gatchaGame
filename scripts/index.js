const button = document.querySelector(".button");

button.addEventListener("click", () => {
    document.getElementById("result").style.opacity = "1";
  document.getElementById("result").innerHTML = getRndInteger(1, 10);

  if (document.getElementById("result").innerHTML >= 9) {
    document.querySelector(".fail").style.opacity = "0";
    document.querySelector(".win").style.opacity = "1";
    document.querySelector(".gain").style.opacity = "1";    
  } 
  
  else if (document.getElementById("result").innerHTML < 9) {
    document.querySelector(".fail").style.opacity = "1";
    document.querySelector(".win").style.opacity = "0";
    document.querySelector(".gain").style.opacity = "0";
  }
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
