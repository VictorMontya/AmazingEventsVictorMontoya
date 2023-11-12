const urlDetails = new URLSearchParams(window.location.search)
const id = urlDetails.get("_id")

import { data } from "./modules/Data.js"

const eventos = data.events

let eventoBuscado = eventos.find(eventos => eventos._id == id)
const cardEventos = document.getElementById("CarsDetalles")

function crearCaja(arrayEevent){
    const caja = document.createElement("div")
    caja.classList.add("card")
    caja.style.width = "30rem"
    
  
    caja.innerHTML = `<img src="${arrayEevent.image}" class="card-img-top tamaño borde" alt="">
  <div class="card-body borde ">
    <h5 class="card-title centrado tituloTamaño text-center">${arrayEevent.name}</h5>
    <p class="card-text centrado justify-content-center text-center">${arrayEevent.description}</p>
    <p class="text-start d-flex position-relative centrado ">Date: ${arrayEevent.date} </p>
    <p class="text-start d-flex position-relative centrado ">Category: ${arrayEevent.category} </p>
    <p class="text-start d-flex position-relative centrado ">Place: ${arrayEevent.place} </p>
    <p class="text-start d-flex position-relative centrado ">Capacity: ${arrayEevent.capacity} </p>
    <p class="text-start d-flex position-relative centrado ">Assistance: ${arrayEevent.assistance} </p>
    <p class="text-start d-flex position-relative centrado ">Price: ${arrayEevent.price} </p>
    <div class="d-flex justify-content-end">
    
    </div>`
    cardEventos.appendChild(caja)
}
    crearCaja(eventoBuscado)