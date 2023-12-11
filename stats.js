import { filtrarF, filtrarP} from "./modulos/funciones.js";

let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(urlsprint)
.then(response => response.json())
.then(data =>  {

    let crearTr = document.getElementById("crearTr")
    let PrimerTr = document.createElement("tr")
    PrimerTr.innerHTML = `<th class="bg-dark text-white" colspan="3">Events Statistics</th>`

    crearTr.appendChild(PrimerTr)

    let resultadoOperacionAsistenciaMayores = []
    let resultadoOperacionAsistenciaMenores = []

    let asistencia = data.events.filter(events => events.assistance)

    for (let i = 0; i < asistencia.length; i++) {
      let diezPorciento = (100 / 100) * asistencia[i].capacity
      let resultadoOperacion = Math.floor((Number((asistencia[i].assistance / diezPorciento) * 100)))

      if (resultadoOperacion > 90) {
        resultadoOperacionAsistenciaMayores.push({
          nombre: asistencia[i].name,
          categorias: asistencia[i].category,
          asistencia: resultadoOperacion,
          capacidad: asistencia[i].capacity
        })
      }
      if (resultadoOperacion <90) {
        resultadoOperacionAsistenciaMenores.push({
          nombre: asistencia[i].name,
          categorias: asistencia[i].category,
          asistencia: resultadoOperacion,
          capacidad: asistencia[i].capacity
        })
        
      }

    }

    for (let i = 0; i < resultadoOperacionAsistenciaMayores.length; i++) {

      let primerTr = document.createElement("tr")
      primerTr.innerHTML = `
    <td class="col-4">The event <b>${resultadoOperacionAsistenciaMayores[i].nombre}</b> had an assist of  <b>${resultadoOperacionAsistenciaMayores[i].asistencia}%</b></td>
    <td class="col-4">The event <b>${resultadoOperacionAsistenciaMenores[i].nombre}</b> had an assist of <b>${resultadoOperacionAsistenciaMenores[i].asistencia}%</b></td>
    <td class="col-4">The event <b>${resultadoOperacionAsistenciaMayores[i].nombre}</b> It has a capacity of <b>${resultadoOperacionAsistenciaMayores[i].capacidad}</b></td>`

      crearTr.appendChild(primerTr)
    }



    let nuevoTr = document.createElement("tr")
    nuevoTr.innerHTML = `<th class="bg-dark text-white" colspan="3">Upcoming events statistics by category</th>`

    crearTr.appendChild(nuevoTr)

    let eventosF = filtrarF(data.events, data.currentDate, true)

    

    let categoriesEventsFuture = []
    let ingresosEventsFuture = []

    for (let i = 0; i < eventosF.length; i++) {

      categoriesEventsFuture.push({
        nombre: eventosF[i].name,
        categorias: eventosF[i].category
      })

      ingresosEventsFuture.push({
        nombre: eventosF[i].name,
        ingresos: eventosF[i].price * eventosF[i].capacity
      })

    }

    for (let i = 0; i < categoriesEventsFuture.length; i++) {


      let nuevoTr = document.createElement("tr")
      nuevoTr.innerHTML = `
     <td class="col-4">The categories of future events are<b>${categoriesEventsFuture[i].categorias}: ${eventosF[i].name}</b></td>
     <td class="col-4">The estimated revenue for this category is <b>$${ingresosEventsFuture[i].ingresos}</b></td>
     <td class="col-4">Full attendance <b>100%</b></td>`

      crearTr.appendChild(nuevoTr)
    }

    let nuevoTrPast = document.createElement("tr")
    nuevoTrPast.innerHTML = `<th class="bg-dark text-white" colspan="3">Past Events statistics by category</th>`

    crearTr.appendChild(nuevoTrPast)

    let eventsPast = filtrarP(data.events, data.currentDate, false)


    let categoriesEventsPast = []
    let ingresosEventsPast = []
    let resultadoOperacionPast = []

    

    for (let i = 0; i < eventsPast.length; i++) {
      let diezPorciento = (100 / 100) * eventsPast[i].capacity
      let resultadoOperacion = Math.floor((Number((eventsPast[i].assistance / diezPorciento) * 100)))

      resultadoOperacionPast.push(resultadoOperacion)

      categoriesEventsPast.push({
        nombre: eventsPast[i].name,
        categorias: eventsPast[i].category
      })

      ingresosEventsPast.push({
        nombre: eventsPast[i].name,
        ingresos: eventsPast[i].price * eventsPast[i].assistance
      })

    }

    for (let i = 0; i < categoriesEventsPast.length; i++) {


      let nuevoTr = document.createElement("tr")
      nuevoTr.innerHTML = `
        <td class="col-4">The categories of past events were <b>${categoriesEventsPast[i].categorias}: ${eventsPast[i].name}</b></td>
        <td class="col-4">The estimated revenue for this category is <b>$${ingresosEventsPast[i].ingresos}</b></td>
        <td class="col-4">This event was attended by the <b>${resultadoOperacionPast[i]}%</b></td>`

      crearTr.appendChild(nuevoTr)
    }

})