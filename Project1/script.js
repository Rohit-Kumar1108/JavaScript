const buttons = document.querySelectorAll(".btn");
const box = document.querySelector(".box");


buttons.forEach(function(button){
    button.addEventListener("click",function(e){

        let val = e.target.id;
        console.log(val)
        box.style.backgroundColor=val;
    })
    })