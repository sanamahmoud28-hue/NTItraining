URL="https://jsonplaceholder.typicode.com/posts";
xhr=new XMLHttpRequest()
xhr.open('GET',URL)
xhr.addEventListener("load",()=>{
    console.log("[load] event fired. status =",xhr.response)
})
xhr.send();