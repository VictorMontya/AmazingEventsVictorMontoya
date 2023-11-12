
import { data } from "./modules/Data.js"
import {crearCard, formContenedor, buscador, informacion, filtrarCategory, checkBox, filtrarBuscar, superFiltro} from "./modules/funciones.js"

const arrayEevent = data.events;

let arrayCategory = [];
let arrayActiividad = [];

arrayCategory = Array.from(new Set(arrayEevent.map(events => events.category.replace(" ", "-"))))

checkBox(arrayCategory)


crearCard(arrayEevent);







formContenedor.addEventListener('change', () => {

  superFiltro(arrayEevent)
})

buscador.addEventListener('keyup', () => {
  
  superFiltro(arrayEevent)

  })

   






  