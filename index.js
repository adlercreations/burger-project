const burgersList = document.getElementById(`burgers-list`)

fetch("http://localhost:4000/burgers")
.then(response => response.json())
.then(burgers => {
    burgers.forEach(addBurgerToBurgersList)
})
    
function addBurgerToBurgersList(burger) {
    const liElement = documetn.createElement(`li`)

    const idElement = document.createElement(`h3`)
    idElement.textContent = `Burger # ${burger.id}`
    
    const nameElement = document.createElement(`h3`)
    nameElement.textContent = `Name: ${burger.name}`

    const imageELement = document.createElement(`img`)
    imageELement.src = burger.image

    

    liElement.appendChild(nameElement)
    burgersList.appendChild(liElement)
}
