var lis = document.querySelectorAll("li");

lis.forEach(element => {
   element.addEventListener("mouseover", function () {
        this.classList.add("active");
   }) 

   element.addEventListener("mouseout", function(){
        this.classList.remove("active");
   })

   element.addEventListener("click", function(){
        this.classList.toggle("done");
   })
});