var productName =window.prompt("enter name")
var brand =window.prompt("enter brand name")
var price =window.prompt("enter price")
var category =window.prompt("category plz")
var confirmation =window.confirm("Is this product in stock?")
productInfo={Name:productName,Brand:brand,Price:(+price),Category:category}
console.log(`THANKS FOR BUYING ${productName}`)
document.getElementById("END").innerText = `THANKS FOR BUYING ${productName}`
console.log(productInfo)
window.alert(document.getElementById("END").innerText = `THANKS FOR BUYING ${productName}`)
console.log(productName[0])