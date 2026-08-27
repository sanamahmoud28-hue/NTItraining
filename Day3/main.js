//task1
var str1 ="Sana Mahmoud"
console.log(str1.length)

var str2 ="I am learning JavaSript"
console.log(str2.toLowerCase())
console.log(str2.toUpperCase())

var str3 ="student@nti.com"
console.log(str3.includes("@"))

var str4 ="JavaScript"
console.log(str4[0])
console.log(str4[9])

var str5 ="this is a bad day"
console.log(str5.replace("bad","good"))

var str6 ="i love coding"
var str7= str6.split(" ")
console.log(str6.split(" "))
console.log(str7.join("-"))

var str8 =" nti egypt training "
console.log(str8.trim().replace("egypt","cairo").toUpperCase())
//task2
var num ="45.8"
console.log(+num)

var num ="7.6"
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

arr =[12,5,28,9]
console.log(Math.max(arr))
console.log(Math.min(arr))

console.log(Math.random()*21)


price = 19.4567
console.log(price.toFixed(2))

var sum = 0
for(var i = 1;i<=5;i++){
    sum+=Math.random()*51

}



avg=sum/5
console.log(avg.toFixed(2))
//task3
for(var i = 1;i<=20;i++){
    console.log(i)
}


for(var i = 1;i<=15;i++){
    if(i%2){
        console.log(i)
    }

}


var i=11
while(i>1){
    i--
    console.log(i)
}

arr=["sara","omar","mona","youssef"]
for (item of arr){
console.log(item)
}


for(var i = 1;i<=10;i++){
    
    if(i==7){
       break
    }
console.log(i)
}



for(var i =1;i<=3;i++){
    for(var j=1;j<=10;j++){
        console.log(i+ " * "+ j +" = "+ i*j)
    }
}



for(var i =1;i<=30;i++){
    if(i%3==0){
continue
    }
if(i==25){
    break
}
console.log(i)
}
//task4
var str="HELLO"
for(var i = 0;i<=4;i++){
    console.log(str[i])
}



sum =0
arr=[10,20,30,40]
for (item of arr){
sum+=item
}
console.log(sum)



var count =0
var str ="javascript is amazing and awesome"
for(i=1;i<=str.length;i++){
    if(str[i]=="a"||str[i]=="A" ){
        count++
    }
}
console.log(count)



var arr=[70,85,92,60,77,88]
for (item of arr){
if(item%2==0){
console.log(item)
}
}




var arr=["ahmed","sara","omar","layla",'hassan']
for (item of arr){
if(item[0]=="a" ||item[0]=="s" ){
console.log(item.toUpperCase())
}
}


