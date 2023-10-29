
const informacion = document.getElementById("Contenedor")
const arrayEevent = data.events


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

}

