var products=[{
    id: 1,
    name: "laptop",
    price: 18500.5,
    category: "electronics",
    quantity: 4

}]






function CreateProduct(name,price,category,quantity){
    newid = products.id + 1
    product={
    id: newid,
    name: name,
    price: price,
    category: category,
    quantity: quantity
}
name.trim()
category.trim()
if(name=""){
    return "enter the correct name"
}
if(price<0){
    return "enter the correct price"
}
if(quantity<=0){
    return "enter the correct quantity"
}
products.push(product)
return product

}








function printProducts(list){
    console.table(list)
}



function getAllProducts(products){
    printProducts(list)
    products = list
    return list
}



function getProductbyID(id){
    list.id.find(newid,"null")
}



function UpdateProduct(id,name,price,category,quantity){
    if(id==""){
        return "please enter an updated id"
    }
newproduct={
    id: newid,
    name: name,
    price: price,
    category: category,
    quantity: quantity
}
return newproduct
}


function deleteproduct(id){
index=products.findIndex(id)
if(index == null){
    return "this id is not found"
}
confirmation=window.confirm("are u sure u want to delete it?")
if(confirmation == true){
    deletedproduct=products.splice(index,1)
    return deletedproduct
}
}


function filterProducts(keyword){
    products.filter(name,category)
    keyword.trim().toLowerCase().includes(keyword)
    return products
}

function startapp(){


    thechoice = window.prompt(`===== NTI MINI STORE =====

    1) add product

    2) show all product

    3) show product by id

    4) update product

    5) Delete product

    6) search filter

    0) exit

`)
switch(thechoice){
    case "1":
        name=window.prompt("enter a name")
        price=window.prompt("enter a price")
        category=window.prompt("enter a category")
        quantity=window.prompt("enter a qunatity")

        CreateProduct(name,price,category,quantity)
        break
    case "2":
      getAllProducts() 
      break
    case"3": 
      id = window.prompt("enter an id")
      getProductbyID(id)
      break
    case"4": 
      id=window.prompt("enter the id ")
      name=window.prompt("enter a name")
      price=window.prompt("enter a price")
      category=window.prompt("enter a category")
      quantity=window.prompt("enter a qunatity")
      UpdateProduct(id,name,price,category,quantity)
      break
    case"5":
      id=window.prompt("enter the id u want to delete")
      deleteproduct(id)
      break
    case"6":
      keyword=window.prompt("enter the keyword u want to filter")
      filterProducts(keyword)
      break
    case"0":
    break
default:
    console.log("enter a correct num")
    
}

}

 

    
startapp()