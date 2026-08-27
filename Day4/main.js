//task1
var car ={brand:"bmw",model:"new",year:"2026",color:"blue"}
console.log(car)



console.log(car.brand)
console.log(car["year"])


car.color ="black"
car.price="1000000"
console.log(car)


delete car.year
console.log(car.year)//undefined because year is not declared in my object now


var student={[student-name] :"sara",age:"20"}
console.log(student[student-name])


var book = {title:"books name",author:fullname={firstname:"sana",lastname:"mahmoud"}}
console.log(book.author.lastname)


student={name:"ali",age:"25",city:"cairo"}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(student.hasOwnProperty("job"))


settings={theme:"dark",lang:"en"}
Object.freeze(settings)
settings.theme="light"
settings.fontsize="16"
console.log(settings)//the freeze method stores the original object (immutable method)
//task2
arr=["cairo","giza","alex","damnhour","luxor"]
console.log(arr)
console.log(arr.length)


console.log(arr[0])
console.log(arr[1])
console.log(arr[4])

arr.push("gouna")
console.log(arr)
arr.unshift("hurghada")
console.log(arr)



arr.pop("gouna")
console.log(arr)
arr.shift("hurghada")
console.log(arr)


arr=["html","css","js","react"]
console.log(arr.indexOf("js"))
console.log(arr.includes("python"))


arr=["pen","book","bag"]
arr.forEach((item,index)=>{
    console.log(`index is ${index} : ${item}`)
})


arr=["red","green","blue","yellow"]
for(item of arr){
    if(item == "blue"){
    continue
    } 
 console.log(item)       
}


arr=["a","b","c"]
arr.push("d")
arr.push("e")
arr.shift("a")
console.log(arr)
console.log(arr.length)
//task3
arr=["apple","bannana","cherry"]
console.log(arr.map(fruit=>fruit.toUpperCase()))


arr=[10,55,30,80,45,90]
console.log(arr.filter(num => num>50))


arr=["cairo","giza","alex","aswan"]
console.log(arr.find(letter=> letter[0]=="a"))
console.log(arr.findIndex(letter=> letter[0]=="a"))


arr=["a","b","c","d","e"]
console.log(arr.slice(1,4))
console.log(arr)



 arr=["one","two","three","four"]
 console.log(arr.splice(1,2))
 console.log(arr)


 arr=[40,100,1,5,25]
 console.log(arr.sort((a,b) => a-b))


 arr=[16,21,17,19]
 console.log(arr.some(num => num>18))
 console.log(arr.every(num => num>18))


 arr=[5,10,15,20]
 var sum = 0
 sum=arr.reduce((accumulator,value) => {
    return accumulator + value

 },0)
 console.log(sum)
//task4
arr=[{ name: "Omar", grade: 80 }, { name: "Mona", grade: 90 }, { name: "Ali", grade: 70 }]
for(item of arr){
    console.log(item.name)
    console.log(item.grade)
}


for(item of arr){
   console.log(arr.filter(item => item.grade>=80))
 console.log(arr.map(item =>item.name))

}


arr=[{name:"fan",price:1000},{name:"door",price:10000}]
for(item of arr){
sum=arr.reduce((accumulator,item) => {
    return accumulator + item.price

 },0)
}
console.log(sum)



arr=["js", "html", "css", "js", "react", "js"] 
count=0
for(item of arr){
    if (item=="js")
    {
        count++
    }
}
console.log(count)


classroom={teacher:"miss",students:["sana","mahmoud","mohamed","ibrahim"]}
console.log(classroom.teacher)
console.log(classroom.students.length)
console.log(classroom.students[3])








