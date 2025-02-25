// let h1=document.querySelector("h1")



// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange();
//     },delay)
// }




// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("pink",1000,()=>{
//                 changeColor("brown",1000)
//             });
//         });
//     });
// });



// Callback Nesting -> Callback hell


// Callback hell  -->

function saveDb(data, sucess, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
  
    if (internetSpeed > 4) {
      sucess();
    } else {
      failure();
    }
  }
  
  saveDb(
    "apna college",
    () => {
      console.log("your data was saved : ");
      saveDb(
        "ROHIT PATEL",
        () => {
          console.log("sucess");
          saveDb(
            "Callback",
            () => {
              console.log("Callback sucess...");
            },
            () => {
              console.log("Callback failure..");
            }
          );
        },
        () => {
          console.log("failure");
        }
      );
    },
    () => {
      console.log("weak connection.....");
    }
  );
  