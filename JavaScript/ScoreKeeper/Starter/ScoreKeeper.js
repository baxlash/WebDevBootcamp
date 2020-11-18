var p1Btn = document.getElementById("p1");
var p2Btn = document.getElementById("p2");
var rstBtn = document.getElementById("rst");
var p1Dsp = document.getElementById("p1Display");
var p2Dsp = document.getElementById("p2Display");
var winningScoreDsp = document.querySelector("p span");
var numInput = document.querySelector("input");
var p1Scr = 0;
var p2Scr = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener("click", function(){
     if (!gameOver){
          p1Scr++;
          if (p1Scr === winningScore){
               p1Dsp.classList.add("winner")
               gameOver = true;
          }
          p1Dsp.textContent = p1Scr;     
     }
});

p2Btn.addEventListener("click", function(){
     if (!gameOver){
          p2Scr++;
          if (p2Scr === winningScore){
               p2Dsp.classList.add("winner");
               gameOver = true;
          }
          p2Dsp.textContent = p2Scr;     
     }
})

rstBtn.addEventListener("click", function(){
     reset();
})

numInput.addEventListener("change", function(){
     winningScoreDsp.textContent = this.value;
     winningScore = Number(this.value);
     reset();
})

function reset(){
     p1Dsp.textContent = 0;
     p2Dsp.textContent = 0;
     p1Scr = 0;
     p2Scr = 0;
     gameOver = false;
     p1Dsp.classList.remove("winner");
     p2Dsp.classList.remove("winner");
}
