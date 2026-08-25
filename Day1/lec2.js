function printmessage(){
    console.log("welcome back")
}
var day= window.prompt("enter a day")
switch(day){
    case "sunday":
        console.log("yay")
        break
    case "monday":
        console.log("nay")
        break
    default:
        console.log("bye")
}

arr =[10,20,30,40]
sum=0
for (var item of arr){
    sum+=item
   avg= sum/arr.length
   console.log(avg)


}