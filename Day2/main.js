//task1
for(var i = 1;i<=10;i++){
console.log(i)
}
//task2
for(var i = 1;i<=20;i++){
if(i%2==0)
console.log(i)
}
//task3
sum=0
for(var i = 1;i<=15;i++){
sum+=i
}
console.log("Total sales= "+sum)
//task4
var i = 1
while(i<=7){
    console.log(i)
    i++
    
}
//task5
var i = 8
while(i>=1){
    console.log(i)
    i--
    
}
//task6
i=1
do{
    console.log("welcome")
    console.log(i)
    i++
}
while(i<=5);
//task7
var itemsInCart = 10;
while(itemsInCart=0){
    break
};
do{
    console.log("start your shopping")
}
while(itemsInCart!=0);

// while(itemsInCart<5){
 //   break
 //};// while loop will iterate only when the condition is true
//do{ // do while will iterate one time tthen will iterate only when the condition is truew
////    console.log("start your shopping")
//}
//while(itemsInCart<5);

//task8
userName = "Ali"
userAge = 22 
isStudent = true
console.log(userName + typeof userName )
console.log(userAge + typeof userAge )
console.log(isStudent +typeof isStudent )
//task9
dbPrice = 10 
inputPrice = "10"

console.log(dbPrice==inputPrice ) //compares values only
console.log(dbPrice===inputPrice ) // compares values and data tyep
//task10
userName=window.prompt("enter name")
window.alert(`Welcome, ${userName}`)
//task11
quantity=window.prompt("enter quantity")
console.log(+quantity + typeof +quantity )
console.log(Number(quantity) + typeof Number(quantity))
console.log(parseInt(quantity) + typeof parseInt(quantity) )
//task12
a = 10 
b = 3
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
//task13
age=window.prompt("enter age")
if(age>=18)
{
    console.log("you can enter")
}
else{
    console.log("Sorry, underage")
}
//task14
grade=window.prompt("enter grade")
if(grade>=90 && grade >=80)
{
    console.log("A")
}
else if (grade<=80 && grade >=70){
 console.log("B")
 
}
else if (grade<=70 && grade >=60){
 console.log("C")}

else{
    console.log("D")
}
//task15
age=window.prompt("enter age")
var message = age = 17 ? 'minor'  : age = 21 ? 'adult' :
console.log(message)
//task16
var day= window.prompt("enter a day")
switch(day){
    case "sunday":
        console.log("your day")
        break
    case "monday":
        console.log("here we go again")
        break
    case "weekend":
        console.log("yay")
        break
    case "friday":
        console.log("finally its friday")
        break
    default:
        console.log("not correct")
}
//task17
var price= window.prompt("enter price")
for(i=1;i<=10;i++){
    console.log(i +" x "+ price + " = " + i*price)
}
//task18
var size= window.prompt("enter size")
if(size > 0){
    for(var i = 1;i<=size;i++){
        console.log(i)
    }
    
}
else{
    console.log("Invalid file size")
}
//task19
num = window.prompt("enter num")
if(num%2){
    console.log("normal")
}
else{
    console.log("express")
}
//task20
arr =[" Ahmed"," Sara"]
sum=0
for (var item of arr){
    sum++
   console.log("Student" + sum + " : "+ item )
}
//task21
sum=0
for(var i = 1;i<=5;i++){
    num = +window.prompt("enter num")
    sum+=num
 }
 avg = sum/5
    console.log(sum)
    console.log(avg)
//task22
 
attempts = 0
correctPin = window.prompt("enter pin")
while(attempts!=3){
    attempts++
    if(correctPin = "1234"){
        console.log("welcome")
        break;
    }
    else{
        continue;
    }

}
//task23
hasAccount = true 
isVerified = false
console.log(hasAccount && !isVerified)
console.log(hasAccount && isVerified)
console.log(hasAccount || isVerified)

if(hasAccount && isVerified )
{
    console.log("please verify")
}
else if (hasAccount || isVerified ){
    console.log("welcome back")

}
else 
    console.log("please sign up")
//task24
var a = 40; 
var b = 50; 
var c = "60"; 
var d = 30; 
var e = 30; 
sum=console.log(a + b + (+c) + d + e);
if(sum<=200){
    for(var i = 1;i<=sum;i++){
        console.log(i)
    }
    
}
else{
    console.log("too big to print line by line ")
}
//task25
n = +window.prompt("enter num")
if(n<0){
    console.log("wrong input")
}
else{
    var factor = 1
for(i=2;i<=n;i++){
    factor*=i
}
console.log(n + "!" + " = "+ factor)
window.alert(n + "!" + " = "+ factor)


}








    




