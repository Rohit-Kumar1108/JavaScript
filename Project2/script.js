const form = document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt( document.querySelector("#height").value);
    const waight = parseInt( document.querySelector("#waight").value);
    const results = document.querySelector("#results");
    if(height==''|| height<0 ||isNaN(height)){
        results.innerHTML =`Please give a valid Height ${height}`;
    }else if(waight==''|| waight<0 ||isNaN(waight)){
        results.innerHTML =`Please give a valid Waight ${waight}`;
    }else{
        const bmi = (waight/((height*height)/10000)).toFixed(2);
        results.innerHTML=`<span>${bmi}</span>`
    }
});