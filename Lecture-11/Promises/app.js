// Callback hell  -->

// function saveDb(data, sucess, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (internetSpeed > 4) {
//     sucess();
//   } else {
//     failure();
//   }
// }

// saveDb(
//   "apna college",
//   () => {
//     console.log("your data was saved : ");
//     saveDb(
//       "ROHIT PATEL",
//       () => {
//         console.log("sucess");
//         saveDb(
//           "Callback",
//           () => {
//             console.log("Callback sucess...");
//           },
//           () => {
//             console.log("Callback failure..");
//           }
//         );
//       },
//       () => {
//         console.log("failure");
//       }
//     );
//   },
//   () => {
//     console.log("weak connection.....");
//   }
// );

function saveDb(data) {
  return new Promise((success, failure) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success(" Success : data was saved ");
    } else {
      failure("failure : weak connection");
    }
  });
}




// let request = saveDb("apna college")
//   .then(() => {
//     console.log("Promise was resolve : data-1 saved ");
//     saveDb("data-1 save").then(()=>{
//       console.log("data-2 saved")
//     });
//   })
//   .catch(() => {
//     console.log("Promise was reject : ");
//     console.log(request); 
//   });





  // <----------------- Promise chaining ----------------------------->



  let request = saveDb("apna college")
  .then((result) => {
    console.log("Promise was resolve : data-1 saved ");
    console.log("result of promise: ",result);
    return saveDb("Hello World ! ")
  })
  .then((result)=>{
    console.log("Data-2 Saved...");
    console.log("result of promise: ",result);
    return saveDb("ROHIT PATEL")
  })
  .then((result )=>{
    console.log("data-3 saved...")
    console.log("result of promise: ",result);
  })
  .catch((error) => {
    console.log("Promise was reject : ");
    console.log("result of reject ",error); 
  });




