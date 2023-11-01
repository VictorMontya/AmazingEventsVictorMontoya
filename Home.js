
const informacion = document.getElementById("Contenedor")
const arrayEevent = data.events

const formContenedor = document.getElementById("form")
const searchContenedor = document.getElementById("buscar")
let arrayCategory = []

arrayCategory = Array.from(new Set(arrayEevent.map(events => events.category.replace(" ", "-"))))

function checkBox(arrayCategory) {
  arrayCategory.forEach(category => {
    const barraCheckbox = document.createElement("div")
    barraCheckbox.classList.add("form-check")

    barraCheckbox.innerHTML = `<div class="form-check form-check-inline fs-5 mt-1">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox" value="${category}">
        <label class="form-check-label " for="${category}">${category.replace("-", " ")}</label>
      </div>
      <nav class="navbar  w-60 justify-content-end">
          `
    formContenedor.appendChild(barraCheckbox)
  })

} checkBox(arrayCategory)

function filtrarCategory(arrayEevent) {
  let selet = Array.from(document.querySelectorAll('input[type="checkBox"]:checked')).map(checkBox => checkBox.value)

  let categoryFilter = []

  arrayEevent.forEach(categoria => {
    selet.forEach(tipos => {
      if (tipos == categoria.category.replace(" ", "-")) {
        categoryFilter.push(categoria)
      }

    })
  })
  if (categoryFilter.length == 0) {
    categoryFilter = arrayEevent

  }
  console.log(categoryFilter)
  return categoryFilter;
  
}
 
function searchBox(arrayEevent) {
  return arrayEevent.(events => events.name.ToLowerCase().includes(searchContenedor.value.ToLowerCase()))
 
 } 

function crearCard(arrayEevent) {
  if(arrayEevent.length==0){
    informacion.innerHTML = `<h2>No se encontro su busqueda</h2>`
  }else{
    informacion.innerHTML = ""
  arrayEevent.forEach(event => {


 
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

  })
}}
crearCard(arrayEevent)







/* function unionFiltros(arrayEevent) {
  let categoryEscogida = filtrarCategory(arrayEevent)
  let categoryBuscada = searchBox(categoryEscogida)
  crearCard(categoryBuscada)
} */

formContenedor.addEventListener('change', () => {

  let categoryEscogida = filtrarCategory(arrayEevent)
  crearCard(categoryEscogida)
});

searchContenedor.addEventListener('keyup', () => {
  let categoryBuscada = searchBox(arrayEevent)
  crearCard(categoryBuscada)
   
})





/* formContenedor.addEventListener('change',()=>{
  function superFiltro(arrayEevent){
    let filtro1 = filtrarCountrys(arrayEevent) 
    
    crearCard(filtro1)
  } 
  
} ) 
 */
  