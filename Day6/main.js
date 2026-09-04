products = [
  { id: 1, name: "Laptop", price: 18500.5, category: "Electronics", quantity: 4 },
  { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
  { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
  { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }]
nextid=5
productstable=document.getElementById("myProducts")
function getall(list = products) {
  productstable.innerHTML = '' 
list.forEach(p => {
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${p.id}</td>
      <td>${p.name}</td>
      <td>$${p.price}</td>
      <td>${p.category}</td>
      <td>${p.quantity}</td>
      <td>
        <button class="DELETEbutton" data-id="${p.id}">Delete</button>
      </td>
    `
    productstable.appendChild(tr)
  })
}




const createBUTTON = document.getElementById('createbutton')
const ERRORmessage = document.getElementById('message')
createBUTTON.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim()
  const price = parseInt(document.getElementById("price").value)
  const category = document.getElementById("category").value.trim()
  const quantity = parseInt(document.getElementById("quantity").value)
  if (!name || isNaN(price) || price <= 0 || isNaN(quantity) || quantity < 0) {
    ERRORmessage.textContent = "enter the correct data pls"
    return
  }


  
  const Newproduct = { id: nextid++, name, price, category, quantity }
  products.push(Newproduct)
  getall(products)
})

function deleteproduct(id) {
  if (confirm("u want to delete this product?")) {
    const index = products.findIndex(p => p.id === id)
    if (index !== -1) {
      products.splice(index, 1)
      getall()
    }
  }
}

const searchInput = document.getElementById('search')
searchInput.addEventListener("input", (e) => {
  const keyword = e.target.value.trim().toLowerCase()
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(keyword) || 
    p.category.toLowerCase().includes(keyword)
  )

  getall(filtered)
})


productstable.addEventListener("click", (e) => {
  if (e.target.classList.contains("DELETEbutton")) {
    const productid = Number(e.target.getAttribute("data-id"))
    deleteproduct(productid)
  }
})
getall()