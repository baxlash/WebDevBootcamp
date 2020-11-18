var numberOfSquares = 6
var colors = generateRandomColors(numberOfSquares)

var squares = document.querySelectorAll(".square")
var pickedColor = pickRandomColor()
var colorDisplay = document.getElementById("colorDisplay")
var msgDisplay = document.getElementById("message")
var h1Display = document.querySelector("h1")
var resetBtn = document.getElementById("reset")
var easyBtn = document.getElementById("easyBtn")
var hardBtn = document.getElementById("hardBtn")
var btn = document.querySelectorAll("button")

resetBtn.addEventListener("click", function(){
     resetBtn.textContent = "New Colors"
     colors = generateRandomColors(numberOfSquares)
     pickedColor = pickRandomColor()
     colorDisplay.textContent = pickedColor
     for (let i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = colors[i]
     }
     resetGame()
})

easyBtn.addEventListener("click", function(){
     numberOfSquares = 3;
     easyBtn.classList.add("selected")
     hardBtn.classList.remove("selected")
     colors = generateRandomColors(numberOfSquares)
     pickedColor = pickRandomColor()
     colorDisplay.textContent = pickedColor
     for(var i = 0; i < squares.length; i++){
          if (colors[i]) {
               squares[i].style.backgroundColor = colors[i]
          } else {
               squares[i].style.display = "none"
          }
     }
     resetGame()
})

hardBtn.addEventListener("click", function(){
     numberOfSquares = 6
     easyBtn.classList.remove("selected")
     hardBtn.classList.add("selected")
     colors = generateRandomColors(numberOfSquares)
     pickedColor = pickRandomColor()
     colorDisplay.textContent = pickedColor
     for(var i = 0; i < squares.length; i++){
          squares[i].style.backgroundColor = colors[i]
          squares[i].style.display = "block"
     }
     resetGame()
})

colorDisplay.textContent = pickedColor

for (let i = 0; i < squares.length; i++) {
     //add initial colors to squares
     squares[i].style.backgroundColor = colors[i]

     //add click listener to squeares
     squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor
          if (clickedColor === pickedColor) {
               changeColors(clickedColor)
               h1Display.style.backgroundColor = clickedColor
               msgDisplay.textContent = "Correct!"
               resetBtn.textContent = "Play Again?"
          } else {
               this.style.backgroundColor = "#232323"
               msgDisplay.textContent = "Try again!"
          }
     })
}

function changeColors(color) {
     squares.forEach(element => {
          element.style.backgroundColor = color
     });
     if (numberOfSquares == 6){
          easyBtn.style.color = color
          easyBtn.style.backgroundColor = "white"
          hardBtn.style.color = "white"
          hardBtn.style.backgroundColor = color
          resetBtn.style.color = color
          resetBtn.style.backgroundColor = "white"
          for (let i = 0; i < btn.length - 1; i++) {
               btn[i].addEventListener("mouseover", function(){
                    this.style.color = "white"
                    this.style.backgroundColor = color
               })
               btn[i].addEventListener("mouseout", function(){
                    this.style.color = color
                    this.style.backgroundColor = "white"
               })     
          }
     } else {
          easyBtn.style.color = "white"
          easyBtn.style.backgroundColor = color
          hardBtn.style.color = color
          hardBtn.style.backgroundColor = "white"
          resetBtn.style.color = color
          resetBtn.style.backgroundColor = "white"
          for (let i = 0; i < btn.length; i++) {
               if (i != 1) {
                    btn[i].addEventListener("mouseover", function(){
                         this.style.color = "white"
                         this.style.backgroundColor = color
                    })
                    btn[i].addEventListener("mouseout", function(){
                         this.style.color = color
                         this.style.backgroundColor = "white"
                    })          
               }
          }
     }
}

function pickRandomColor(){
     var random = Math.floor(Math.random() * colors.length)
     return colors[random]
}

function generateRandomColors(numberOfColors) {
     var newColors = []
     for (let i = 0; i < numberOfColors; i++) {
          newColors.push(randomColor())    
     }
     return newColors
}

function randomColor() {
     var r = Math.floor(Math.random() * 256)
     var g = Math.floor(Math.random() * 256)
     var b = Math.floor(Math.random() * 256)
     var color = "rgb(" + r + ", " + g + ", " + b + ")"

     return color
}

function resetGame() {
     msgDisplay.textContent = ""
     h1Display.style.backgroundColor = "steelblue"
     if (numberOfSquares == 6) {
          easyBtn.style.color = "steelblue"
          easyBtn.style.backgroundColor = "white"
          hardBtn.style.color = "white"
          hardBtn.style.backgroundColor = "steelblue"   
          for (let i = 0; i < btn.length - 1; i++) {
               btn[i].addEventListener("mouseover", function(){
                    this.style.color = "white"
                    this.style.backgroundColor = "steelblue"
               })
               btn[i].addEventListener("mouseout", function(){
                    this.style.color = "steelblue"
                    this.style.backgroundColor = "white"
               })     
          }  
     } else {
          easyBtn.style.color = "white"
          easyBtn.style.backgroundColor = "steelblue"
          hardBtn.style.color = "steelblue"
          hardBtn.style.backgroundColor = "white"  
          for (let i = 0; i < btn.length; i++) {
               if (i != 1) {
                    btn[i].addEventListener("mouseover", function(){
                         this.style.color = "white"
                         this.style.backgroundColor = "steelblue"
                    })
                    btn[i].addEventListener("mouseout", function(){
                         this.style.color = "steelblue"
                         this.style.backgroundColor = "white"
                    })          
               }
          }   
     }
     resetBtn.style.color = "steelblue"
     resetBtn.style.backgroundColor = "white"
}