var city1 = "Alex"; 
var city2 = city1; 
city2 = "Giza"; 
console.log(city1, city2); // the answer will be alex giza because these are strings
var car1 = { brand: "Toyota" }; 
var car2 = car1; 
car2.brand = "Honda"; 
console.log(car1, car2); // the answer will be honda honda because this is an object