
const informacion = document.getElementById("Contenedor")
const arrayEevent = data.events

const formContenedor = document.getElementById("form")
let arrayCategory = []

arrayCategory= Array.from(new Set (arrayEevent.map(events => events.category.replace(" ", "-"))))


function checkBox(tipoEvento) {
  arrayCategory.forEach(category =>{
  let barraCheckbox = document.createElement("div")
  barraCheckbox.classList.add("form-check")

  barraCheckbox.innerHTML = `<div class="form-check form-check-inline fs-5 mt-1">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox" value="${category}">
        <label class="form-check-label " for="${category}">${category.replace("-"," ")}</label>
      </div>`
      formContenedor.appendChild(barraCheckbox)
  } )
  
} checkBox(arrayCategory)

formContenedor.addEventListener('change',() => {
  
  let categoryEscogida = filtrarCategory(arrayEevent)
  
  crearCard(categoryEscogida)
  
} )

function filtrarCategory(arrayEevent){
  let selet = Array.from( document.querySelectorAll('input[type="checkBox"]:checked')).map(checkBox =>checkBox.value)
 let categoryFilter = []
 arrayEevent.forEach(categoria => {selet.forEach(tipos => { if (tipos == categoria.category.replace(" ","-")) {
  categoryFilter.push(categoria)
 }  
}) }
  )
  if (categoryFilter.length == 0) {categoryFilter.push(arrayEevent)
    
  }
  console.log(categoryFilter)
 return categoryFilter
} 




function crearCard(event){
  informacion.innerHTML = " ";
for (let event of arrayEevent) {
  const caja = document.createElement("div")
  caja.classList.add("card")
  caja.style.width = "18rem"

  caja.innerHTML = `<img src="${event.image}" class="card-img-top tamaño" alt="">
<div class="card-body">
  <h5 class="card-title">${event.name}</h5>
  <p class="card-text">${event.description}</p>
  <p class="text-start d-flex position-absolute">Price: ${event.price} </p>
  <div class="d-flex justify-content-end">
    <a href="./details.html?_id=${event._id}" class="btn btn-primary  ">Details</a>
  </div>
`

  informacion.appendChild(caja)

}}
crearCard(informacion)

