 const randomColor = function(){
    const hex = '1234566789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
 }

 let intervalId;

function changeColor(){
  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000);
  }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
};

const stopChangeColor = function(){
    clearInterval(intervalId);
    intervalId=null;
}


 document.querySelector("#start").addEventListener("click",changeColor);
 document.querySelector("#stop").addEventListener("click",stopChangeColor);
