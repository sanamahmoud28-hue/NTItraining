//partA
function intro(){
    x="hello"
}
intro()
console.log(x) // the result will be hello because without using strict x will be assigned as a global variable 
  

function second(){
    "use strict";
    try{
x="hello"
    }
catch(error){
    console.log(error.message)
}
}
second()
console.log(x)// it will print an error message because x now is not a global variable


function third(){
    "use strict";
    var localVar = "test"
    obj={name:"sana",age:"19"}
    try{
delete (localVar)
    }
catch(error){
    console.log(error.message)
}
try{
delete (obj)
   }
catch(error){
   console.log(error.message)
}
}
third()
console.log(localVar)// it will print an error message because u cant delete a variable
console.log(obj)//object will be deleted




//partB
console.log(x); //undefined
var x = 10; 
console.log(x); // 10


// Case 1 
 sayHi(); 
 function sayHi() 
 { console.log("Hi"); } // it will not throw an error
 // Case 2 
 sayBye(); //it will not work because saybye() is undefined so it will throw an error
 var sayBye = function () { 
console.log("Bye"); 
};



console.log(a); //u cannot access the variable duee to the TDZ so it will throw refrence error
let a = 5;


var n = 1; 
function demo() {  
console.log(n); // undefined  
var n = 2;  
console.log(n); // 2
} 
demo(); 
console.log(n); // 1
// part c

function one(){
    var i = 0
    for(i;i<=5;i++){
        console.log("hello")
    }
}
console.log(i)//it will print an error as i is not defined 


let i = 0
function two(){
 for(i;i<=5;i++){
        console.log("hello")
    }
}
console.log(i)//it will print 0 because let is block scoped

// the difference between var and let is that var is only seen within the function scope but let is seen within the block scope

const student={name:"sana",age:"19",city:"egypt"}
student.age="20"
console.log(student)
student.grade=100
console.log(student)
delete student.city
console.log(student)
try{
    student={...student};
}
catch(error){
    console.log(error.message)
}


const arr1=[1,2,3]
arr1.push(0)
console.log(arr1)//allowed
arr1={...arr1}
console.log(arr1)//not allowed cannot assign to a constant array
//part d


const welcome= (name) => 
{ return 'Welcome, ${name}!' }
console.log(welcome("sana"))


const fullInfo=(first, last, age) =>
{
    return `${first} ${last} is ${age} years old`
}
console.log(fullInfo("sana","mahmoud","19"))


const multiply=(a, b) =>
{
    return a*b

}
console.log(multiply(2,5))
const add=(a, b) =>
{
    console.log(a)
    console.log(b)
    return a+b
}
console.log(add(2,5))
//partD

const product = { title: "Laptop", price: 15000, inStock: true, brand: "Dell" };
const{title,price,inStock}=product
console.log(title,price,inStock)
const arr=["HTML", "CSS", "JS", "React"]
const[firstitem,seconditem]=arr
console.log(firstitem,seconditem)


function greet(name = "Guest", message = "Hello"){
    console.log(`${message},${name}`)
}
greet("sana","welcome")
greet( "","welcome")
greet()


function sumAll(...numbers){
    return numbers.reduce((acc,current)=>acc+current,0)
}
console.log(sumAll(1,2,3))
console.log(sumAll(10,20,30,40))

one=[1, 2]
two=[3,4,5]
merged=[...one,...two]
console.log(merged)


const user = { name: "Sara", age: 22 };
 const contact = { email: "sara@nti.com", age: 23 };
 merged2={...user,...contact}
 console.log(merged2)
//partF

let person1 = { name: "Ali", child: { age: 5 } }; 
let person2 = person1; 
person2.name = "Omar"; 
console.log(person1.name);//omar beacuse the value is changed



const original = { name: "Mona", details: { city: "Cairo" } };
const copy={...original}
copy.name="sana"
copy.details.city="alexandria"
console.log(original)//nothing changed in the original because we only changed in the copy not the original object
console.log(copy)









