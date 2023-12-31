
export const informacion = document.getElementById("Contenedor")

export const formContenedor = document.getElementById("form")
export const buscador = document.getElementById("buscar")

 


export function crearCard(arrayActiividad) {
    if(arrayActiividad.length==0){
      informacion.innerHTML = `<h2>No se encontro su busqueda</h2>`
    }else{
      informacion.innerHTML = " "
      arrayActiividad.forEach(event => {
  
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
  
export function filtrarCategory(arrayActiividad) {
  let selet = Array.from(document.querySelectorAll('input[type="checkBox"]:checked')).map(checkBox => checkBox.value)
  let categoryFilter = []
 
  arrayActiividad.forEach(categoria => {
    selet.forEach(tipos => {
      if (tipos == categoria.category.replace(" ", "-")) {
        categoryFilter.push(categoria)
      }

    })
  })
  if (categoryFilter.length == 0) {
    categoryFilter = arrayActiividad

  }
  console.log(categoryFilter)
  return categoryFilter;
  
}  
export function checkBox(arrayCategory) {
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

} 

export function filtrarBuscar(arrayPersonas) {
  return arrayPersonas.filter(persona => persona.name.toLowerCase().includes(buscador.value.toLowerCase()))

 } 

export function superFiltro(arrayPersonas){
  let filtro1 = filtrarCategory(arrayPersonas) 
  let filtro2 = filtrarBuscar(filtro1)
  crearCard(filtro2)
}
