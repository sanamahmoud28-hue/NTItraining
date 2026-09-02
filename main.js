import{message,URL} from './module1.js';
console.log(message("sana"))


const getBUTTON=document.getElementById("getbutton")
const postBUTTON=document.getElementById("postbutton")
const putBUTTON=document.getElementById("putbutton")
const DeleteBUTTON=document.getElementById("deletebutton")
const getBUTTON2=document.getElementById("getbutton2")
const postBUTTON2=document.getElementById("postbutton2")
const putBUTTON2=document.getElementById("putbutton2")
const DeleteBUTTON2=document.getElementById("deletebutton2")
const getBUTTON3=document.getElementById("getbutton3")
const postBUTTON3=document.getElementById("postbutton3")
const putBUTTON3=document.getElementById("putbutton3")
const DeleteBUTTON3=document.getElementById("deletebutton3")
const getBUTTON4=document.getElementById("getbutton4")
const postBUTTON4=document.getElementById("postbutton4")
const putBUTTON4=document.getElementById("putbutton4")
const DeleteBUTTON4=document.getElementById("deletebutton4")

 //let URL="https://jsonplaceholder.typicode.com/posts";
 getBUTTON.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('GET',URL)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 postBUTTON.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('POST',URL)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })


const URL2="https://jsonplaceholder.typicode.com/posts/1"
putBUTTON.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('PUT',URL2)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 DeleteBUTTON.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('DELETE',URL2)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })


 const URL3= "https://dummyjson.com/products"
getBUTTON2.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('GET',URL3)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 postBUTTON2.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('POST',"https://dummyjson.com/products/add")
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })


const URL4="https://dummyjson.com/products/1"
putBUTTON2.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('PUT',URL4)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 DeleteBUTTON2.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('DELETE',URL4)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 const URL5= "https://reqres.in/api/users"
getBUTTON3.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('GET',URL5)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 postBUTTON3.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('POST',URL5)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })


const URL6="https://reqres.in/api/users/1"
putBUTTON3.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('PUT',URL6)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 DeleteBUTTON3.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('DELETE',URL6)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })


 const URL7= "https://dog.ceo/api/breeds/image/random"
getBUTTON4.addEventListener("click",()=>{
let xhr=new XMLHttpRequest()
xhr.open('GET',URL7)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();
 })



 //postBUTTON4.addEventListener("click",()=>{
//let xhr=new XMLHttpRequest()
//xhr.open('POST',URL7)
//xhr.addEventListener("load",()=>{
  //  console.log("[load] event fired. status =",xhr.response)
//})
//xhr.send();
 //})


//const URL8="https://dog.ceo/api/breeds/image/random/1"
//putBUTTON4.addEventListener("click",()=>{
 //   let xhr=new XMLHttpRequest()
  //  xhr.open('PUT',URL8)
  //  xhr.addEventListener("load",()=>{
  //      console.log("[load] event fired. status =",xhr.response)
  //  })
  //  xhr.send();
  //  })



 //DeleteBUTTON4.addEventListener("click",()=>{
//let xhr=new XMLHttpRequest()
//xhr.open('DELETE',URL8)
//xhr.addEventListener("load",()=>{
 //   console.log("[load] event fired. status =",xhr.response)
//})
//xhr.send();
// })