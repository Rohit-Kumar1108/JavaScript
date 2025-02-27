


// <------------------Async-------------------------->


// // async function printHlo(){
// //     return "ROHIT PATEL";
// // }

// // printHlo()
// // .then((result)=>{
// //     console.log("Promise was  resolve with result  ",result)
// // })
// // .catch((error)=>{
// //     console.log("Promise was rejected with error  ",error)
// // })






// <------------------------ Await ---------------------------->

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();

//         },1000)
//     })
// }

// async function demo() {
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
// }




// <----------------------Color Change --------------------------->



let body = document.querySelector("body");

function colorChange(color, delay, C) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // let num = Math.floor(Math.random() * 5) + 1;
            // if (num > 3) {
            //     reject("promise was reject")
            // }
            body.style.backgroundColor = color;
            body.style.color = C;
            console.log(`color changed to ${color}`);
            resolve("color changed ");
        },delay)
    })
}

async function changeColor() {
    try {
        await colorChange("red", 1000, "white");
        await colorChange("blue", 1000, "white");
        await colorChange("green", 1000, "black");
        await colorChange("pink", 1000, "black");
        await colorChange("brown", 1000, "white");
        await colorChange("aqua", 1000, "black");
        await colorChange("black", 1000, "white");
        await colorChange("orange", 1000, "brown");
    }

    catch(err) {
        console.log("error caught")
        console.log(err)
    }


    let number = 7;
    console.log(number);
}