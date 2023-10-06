let display = document.getElementById("main-display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
  button.addEventListener('click',(e) => {
      switch(e.target.innerText){
          case 'AC':
              display.innerText ='';
              break;
              case 'DE':
                  if(display.innerText){
                      display.innerText = display.innerText.slice(0,-1);
                  }
                  break; 
                   case '=':
                    try{
                      display.innerText = eval(display.innerText); 
                   }catch{
                      display.innerText = 'Error!';
                      }
                          break;
          default:
              display.innerText += e.target.innerText;

      }
           
  });
});

const on = document.getElementById("on");
const off = document.getElementById("off");

const calculator = document.querySelector(".calculator");
// const mainDisplay = document.querySelector(".main-display");
const buttonCorn = document.querySelectorAll(".button");
for (let i = 0; i < buttonCorn.length; i++) {
  buttonCorn[i].style.color = "white";
  buttonCorn[i].style.backgroundColor = "black";
}

on.addEventListener("click", (e) => {
  display.style.backgroundColor = "white";
  calculator.style.backgroundColor = "white";
  for (let i = 0; i < buttonCorn.length; i++) {
    buttonCorn[i].style.color = "black";
    buttonCorn[i].style.backgroundColor = "white";
  }
});

off.addEventListener("click", (e) => {
  display.style.backgroundColor = "black";
  calculator.style.backgroundColor = "black";
  for (let i = 0; i < buttonCorn.length; i++) {
     buttonCorn[i].style.color = "white";

     buttonCorn[i].style.backgroundColor = "black";
  }
});