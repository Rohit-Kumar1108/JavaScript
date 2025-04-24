

let h1=document.querySelector("h1");

let btn=document.querySelector("button");
btn.addEventListener("click",getFacts)






let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response)=>{
//  return response.json()
// })
// .then((data)=>{
//   console.log("data1   ",data.fact)
//   return fetch(url)
//   .then((response)=>{
//     return response.json()
//   })
//   .then((data2)=>{
//     console.log("data2  ",data2.fact);
//   })
// })
// .catch((err)=>{
//   console.log("Error -", err);
// });


async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(h1.innerText=data.fact)
  } catch (error) {
    console.log(error);
  }
  console.log(6)
}