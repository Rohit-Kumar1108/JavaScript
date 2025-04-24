let h1=document.querySelector("h1")



function changeColor(color,delay){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      h1.style.color=color;
      resolve("color changed :");
  },delay)

  });
   
}







// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("pink",1000,()=>{
//                 changeColor("brown",1000)
//             });
//         });
//     });
// });




changeColor("red",1000)
.then(()=>{
  console.log("red color changed : ");
  return changeColor("orange",1000);
})
.then(()=>{
  console.log("orange color changed : ");
  return changeColor("blue",1000);
})
.then(()=>{
  console.log("blue color changed :");
  return changeColor("green",1000)
})
.then(()=>{
  console.log("green color changed :");
  return changeColor("brown",1000)
})
.then(()=>{
  console.log("brown color changed :");
 
})



// Callback Nesting -> Callback hell


// Callback hell  -->

// function saveDb(data, sucess, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
  
//     if (internetSpeed > 4) {
//       sucess();
//     } else {
//       failure();
//     }
//   }
  
//   saveDb(
//     "apna college",
//     () => {
//       console.log("your data was saved : ");
//       saveDb(
//         "ROHIT PATEL",
//         () => {
//           console.log("sucess");
//           saveDb(
//             "Callback",
//             () => {
//               console.log("Callback sucess...");
//             },
//             () => {
//               console.log("Callback failure..");
//             }
//           );
//         },
//         () => {
//           console.log("failure");
//         }
//       );
//     },
//     () => {
//       console.log("weak connection.....");
//     }
//   );
  