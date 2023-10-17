const informacion = document.getElementById("Contenedor")
const arrayEevent = data.events



const fechaActual = parseInt(data.currentDate)
let upComing=[]

for (let longitud = 0; longitud < 14; longitud++) {
  const fechaEvents = parseInt(data.events[longitud].date);
  if (fechaActual == fechaEvents) {upComing.push(data.events[longitud])
  
  }
}console.log(upComing)



for (let event of upComing) { 

     
     {

        const caja = document.createElement("div")
        caja.classList.add("card")
        caja.style.width = "18rem"

        caja.innerHTML = `<img src="${event.image}" class="card-img-top tamaño" alt="">
<div class="card-body">
  <h5 class="card-title">"${event.name}"</h5>
  <p class="card-text">"${event.description}"</p>
  <p class="text-start d-flex position-absolute">"Price: ${event.price} "</p>
  <div class="d-flex justify-content-end">
    <a href="Details.html" class="btn btn-primary  ">Details</a>
  </div>
`

        informacion.appendChild(caja)

    }
} 